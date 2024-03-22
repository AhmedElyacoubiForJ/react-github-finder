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

// Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GUTHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUN_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(`${GUTHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUN_TOKEN}`,
    },
  });

  const data = await response.json();

  return data;
};
