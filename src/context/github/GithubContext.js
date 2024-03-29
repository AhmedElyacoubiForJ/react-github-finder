import { createContext, useReducer } from "react";

import gitHubReducer from "./GithubReducer";

const GithubContext = createContext();

const GUTHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUN_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  // Get initial users (testing purposes)
  /*  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${GUTHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUN_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  }; */

  // Get search results
  const searchUsers = async (text) => {
    setLoading();

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

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GUTHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUN_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

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

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // clear searched users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  // Set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
