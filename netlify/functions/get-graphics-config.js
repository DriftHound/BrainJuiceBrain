const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: ''
    };
  }

  try {
    // Get the backend API URL from environment variable
    const apiUrl = process.env.MANUS_API_URL;
    if (!apiUrl) {
      throw new Error('MANUS_API_URL environment variable not set');
    }

    // Forward the request to the Flask backend
    // Use the new backend URL and correct endpoint path
    const backendUrl = 'https://0vhlizcg6j5d.manus.space';
    const response = await fetch(`${backendUrl}/get-graphics-config`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error in get-graphics-config function:', error);
    
    // Return fallback configuration if backend is unavailable
    const fallbackConfig = {
      "theme": {
        "accentColor": "#81C784",
        "particleColor": "#A5D6A7"
      },
      "synapticWeave": {
        "particleCount": 80,
        "connectionDistance": 100,
        "speed": 0.8,
        "lineOpacity": 0.3,
        "nodeSize": 2.0,
        "pulseIntensity": 1.0
      },
      "animationIntensity": 1.0,
      "backgroundPattern": "neural",
      "transitionSpeed": 1.0
    };
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fallbackConfig)
    };
  }
};
