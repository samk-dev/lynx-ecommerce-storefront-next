interface ApiParams {
  url: string;
  query: string;
}

type Response<T> = { data: T };

const shopifyApi = async <T>({
  url,
  query,
}: ApiParams): Promise<Response<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export default shopifyApi;
