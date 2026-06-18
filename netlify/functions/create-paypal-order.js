const PAYPAL_API = 'https://api-m.paypal.com'; // Live. Use https://api-m.sandbox.paypal.com for testing

async function getAccessToken() {
    const credentials = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString('base64');

    const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
}

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
        const { items, customerName, phone, notes } = JSON.parse(event.body);

        if (!items || items.length === 0) {
            return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'No items provided' }) };
        }

        const accessToken = await getAccessToken();

        // Build PayPal purchase units (one per basket item)
        const itemList = items.map(item => ({
            name: item.name.substring(0, 127), // PayPal 127 char limit
            description: (item.configText || '').substring(0, 127),
            unit_amount: {
                currency_code: 'GBP',
                value: (item.price || 0).toFixed(2),
            },
            quantity: '1',
        }));

        const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

        const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [{
                description: `Manx Crown Diamonds — ${items.map(i => i.name).join(', ')}`.substring(0, 127),
                custom_id: customerName || '',
                soft_descriptor: 'ManxCrownDiam',
                items: itemList,
                amount: {
                    currency_code: 'GBP',
                    value: total.toFixed(2),
                    breakdown: {
                        item_total: {
                            currency_code: 'GBP',
                            value: total.toFixed(2),
                        },
                    },
                },
            }],
            payment_source: {
                paypal: {
                    experience_context: {
                        brand_name: 'Manx Crown Diamonds',
                        locale: 'en-GB',
                        shipping_preference: 'GET_FROM_FILE',
                        user_action: 'PAY_NOW',
                    },
                },
            },
        };

        const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'PayPal-Request-Id': `mcd-${Date.now()}`,
            },
            body: JSON.stringify(orderPayload),
        });

        const order = await response.json();

        if (!response.ok) {
            throw new Error(order.message || 'Failed to create PayPal order');
        }

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ orderID: order.id }),
        };

    } catch (err) {
        console.error('PayPal create order error:', err.message);
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
