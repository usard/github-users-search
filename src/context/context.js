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
  const [searchText, setSearchText] = useState("");
  const [requests, setRequests] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const rootURL = `https://api.github.com`;

  useEffect(() => {
    fetchRequests();
  }, [searchText]);

  const fetchUserDetails = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.get(`${rootURL}/users/${searchText}`);
    if (response) {
      setGithubUser(response.data);
      const { followers_url, repos_url } = response.data;
      const followers = await axios(`${followers_url}`);
      setUserFollowers(followers.data);
      const repos = await axios(`${repos_url}`);
      setUserRepos(repos.data);
    } else {
      setError({
        ...error,
        show: true,
        msg: "no users found with the given input",
      });
    }
    fetchRequests();
    setIsLoading(false);
  };

  const fetchRequests = () => {
    axios(`${rootURL}/rate_limit`)
      .then((data) => {
        console.log("api invoked", data);
        const {
          rate: { remaining },
        } = data.data;
        setRequests(remaining);
        if (remaining === 0) {
          setError({
            ...error,
            show: true,
            msg: "sorry, u have exceeded the request limit",
          });
        }
      })
      .catch((err) => console.log("error :", err));
  };
  const val = "hello";

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        setGithubUser,
        userRepos,
        userFollowers,
        requests,
        error,
        isLoading,
        setIsLoading,
        fetchUserDetails,
        setSearchText,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};

export default GithubContextProvider;
