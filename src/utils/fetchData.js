const fetchData = async (query) => {
  query = `query { ${query} }`
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...{ query },
      }),
    });

    const body = await response.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return { body };
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
      query,
    };
  }
};

export default fetchData;