import { createContext, useReducer } from "react";

import gitHubReducer from "./GithubReducer";

const GithubContext = createContext();

const GUTHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUN_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
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
    const {items} = await response.json();
    console.log(items)

    dispatch({
      type: "GET_USERS",
      payload: items,
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
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
