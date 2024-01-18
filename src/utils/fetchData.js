const isDevelopment = process.env.NODE_ENV === 'development';
const cacheOption = isDevelopment ? 'force-cache' : 'default';

const fetchData = async (query, variables) => {
	try {
		const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...{ query },
				...(variables && { variables }),
			}),
			...isDevelopment ? ({
				cache: cacheOption,
			}) : ({
				next: {
					revalidate: 900,
				},
			})
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