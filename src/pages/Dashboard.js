import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGithubContext } from "../context/context";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isLoading } = useGithubContext();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("authenticated ? ", isAuthenticated);
  if (isLoading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <img src={loadingImage} className="loading-img" alt="loading..." />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;
