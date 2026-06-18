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
        const { orderID } = JSON.parse(event.body);

        if (!orderID) {
            return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'No orderID provided' }) };
        }

        const accessToken = await getAccessToken();

        const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        const captureData = await response.json();

        if (!response.ok) {
            throw new Error(captureData.message || 'Failed to capture PayPal payment');
        }

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                status: captureData.status,
                orderID: captureData.id,
            }),
        };

    } catch (err) {
        console.error('PayPal capture error:', err.message);
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
