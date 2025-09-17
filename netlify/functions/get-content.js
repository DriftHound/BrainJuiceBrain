exports.handler = async (event, context) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Get the backend API URL from environment variables
        const backendUrl = 'https://0vhlizcg6j5d.manus.space';
        
        // Fetch content from backend using the correct endpoint path
        const response = await fetch(`${backendUrl}/get-content`);
        
        if (!response.ok) {
            throw new Error(`Backend responded with status: ${response.status}`);
        }
        
        const contentData = await response.json();
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(contentData)
        };
        
    } catch (error) {
        console.error('Error fetching content library:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Failed to fetch content library',
                details: error.message 
            })
        };
    }
};
