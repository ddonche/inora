exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      headers: {
        'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`
      }
    });
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ count: data.count })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ count: 0 })
    };
  }
};