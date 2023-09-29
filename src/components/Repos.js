import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { userRepos } = useGithubContext();
  console.log("repos :", userRepos);
  const languages = userRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) {
      return total;
    }
    if (total[language] === undefined) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  console.log(languages);
  const chartData = Object.values(languages); // convert object of objects into array of objects

  console.log(chartData);
  return (
    <Wrapper className="section-center">
      <Pie3D chartData={chartData}></Pie3D>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  // div {
  //   width: 100% !important;
  // }
  // .fusioncharts-container {
  //   width: 100% !important;
  // }
  // svg {
  //   width: 100% !important;
  //   border-radius: var(--radius) !important;
  // }
`;

export default Repos;
