import React, { useState, useEffect, createContext, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();
export const GithubContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [userRepos, setUserRepos] = useState(mockRepos);
  const [userFollowers, setUserFollowers] = useState(mockFollowers);
  const val = "hello";
  return (
    <GithubContext.Provider value={{ githubUser, userRepos, userFollowers }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
