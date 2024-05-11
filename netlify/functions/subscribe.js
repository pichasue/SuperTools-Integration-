exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { 'Allow': 'POST' },
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: 'Email is required',
    };
  }

  // Here you would typically add the email to your database or mailing list
  // For demonstration purposes, we'll just return a success message

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Subscription successful for email: ${email}` }),
  };
};
