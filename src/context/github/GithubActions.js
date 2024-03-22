const GUTHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUN_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get search results
export const searchUsers = async (text) => {
  // url parameters cutched
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GUTHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUN_TOKEN}`,
    },
  });

  // postmann what we get. destructing the result
  const { items } = await response.json();

  return items;
};
