import { createContext, useReducer } from "react";

import gitHubReducer from "./GithubReducer";

const GithubContext = createContext();

const GUTHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUN_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const fetchUsers = async () => {
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
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
