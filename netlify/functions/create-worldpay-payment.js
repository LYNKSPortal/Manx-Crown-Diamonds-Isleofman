// Worldpay Hosted Payment Pages — create a payment session
// Docs: https://docs.worldpay.com/access/products/hosted-payment-pages/setup-a-payment
//
// Required Netlify environment variables:
//   WORLDPAY_USERNAME       — HPP username (from your Worldpay Implementation Manager)
//   WORLDPAY_PASSWORD       — HPP password
//   WORLDPAY_MERCHANT_ENTITY — e.g. "POxxxxxxxxx" (your merchant entity ID)
//   WORLDPAY_SANDBOX        — set to "true" for sandbox testing (omit or "false" for live)
//   URL                     — automatically set by Netlify to your site URL

const WORLDPAY_API = process.env.WORLDPAY_SANDBOX === 'true'
    ? 'https://try.access.worldpay.com/payment_pages'   // Sandbox
    : 'https://access.worldpay.com/payment_pages';       // Live

exports.handler = async (event) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    try {
        const { items, firstName, lastName, email, phone, address, notes } = JSON.parse(event.body);

        if (!items || items.length === 0) {
            return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'No items provided' }) };
        }

        const username       = process.env.WORLDPAY_USERNAME;
        const password       = process.env.WORLDPAY_PASSWORD;
        const merchantEntity = process.env.WORLDPAY_MERCHANT_ENTITY;

        // Netlify sets URL automatically; fallback to custom domain
        const siteUrl = (process.env.URL || 'https://manxcrowndiamonds.com').replace(/\/$/, '');

        if (!username || !password || !merchantEntity) {
            throw new Error(
                'Worldpay credentials not configured. ' +
                'Please set WORLDPAY_USERNAME, WORLDPAY_PASSWORD and WORLDPAY_MERCHANT_ENTITY ' +
                'in your Netlify site environment variables.'
            );
        }

        // HTTP Basic Auth — base64(username:password)
        const credentials = Buffer.from(`${username}:${password}`).toString('base64');

        // Total in pence (GBP exponent = 2, so £12.50 → 1250)
        const total         = items.reduce((sum, item) => sum + (item.price || 0), 0);
        const amountInPence = Math.round(total * 100);

        if (amountInPence <= 0) {
            return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid order total' }) };
        }

        // Unique reference for this transaction (max 64 chars)
        const transactionReference = `MCD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

        // Human-readable description of ordered items (max 255 chars)
        const orderDescription = `Order from ${firstName} ${lastName}: ${items.map(i => i.name).join(', ')}`
            .substring(0, 255);

        const requestBody = {
            transactionReference,
            merchant: {
                entity: merchantEntity,
            },
            narrative: {
                line1: 'Manx Crown Diamonds',
            },
            value: {
                currency: 'GBP',
                amount:   amountInPence,
            },
            description: orderDescription,
            resultURLs: {
                successURL: `${siteUrl}/success.html`,
                pendingURL: `${siteUrl}/success.html`,
                failureURL: `${siteUrl}/cancel.html?reason=failure`,
                errorURL:   `${siteUrl}/cancel.html?reason=error`,
                cancelURL:  `${siteUrl}/cancel.html?reason=cancelled`,
                expiryURL:  `${siteUrl}/cancel.html?reason=expired`,
            },
            locale: 'en-GB',
            expiry: '1800',  // 30 minutes for the customer to complete payment
            settlement: {
                auto: true,  // auto-settle immediately on successful payment
            },
            hostedProperties: {
                showBillingAddress:  'SHOW',
                showCancelButton:    true,
                showCardIcons:       true,
                showCardholderName:  true,
                showFooter:          true,
                showHeader:          true,
                paymentButtonLabel:  'payNow',
            },
        };

        // WP-CorrelationId: unique ID per request, used for Worldpay log tracing
        const correlationId = `mcd-${transactionReference}`.substring(0, 64);

        console.log(`Creating Worldpay payment: ${transactionReference} for £${total.toFixed(2)}`);

        const response = await fetch(WORLDPAY_API, {
            method: 'POST',
            headers: {
                'Authorization':    `Basic ${credentials}`,
                'Content-Type':     'application/vnd.worldpay.payment_pages-v1.hal+json',
                'Accept':           'application/vnd.worldpay.payment_pages-v1.hal+json',
                'WP-CorrelationId': correlationId,
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Worldpay API error:', JSON.stringify(data));
            throw new Error(data.message || `Worldpay returned HTTP ${response.status}`);
        }

        if (!data.url) {
            throw new Error('Worldpay did not return a payment URL');
        }

        console.log(`Worldpay payment URL created for ${transactionReference}`);

        return {
            statusCode: 200,
            headers:    corsHeaders,
            body:       JSON.stringify({ url: data.url }),
        };

    } catch (err) {
        console.error('Worldpay create-payment error:', err.message);
        return {
            statusCode: 500,
            headers:    corsHeaders,
            body:       JSON.stringify({ error: err.message }),
        };
    }
};
