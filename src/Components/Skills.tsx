import React, { useState } from "react";
import SkillCard from "./SkillCard";

interface SkillTypes {
  id: string;
  content: string;
  percentage: string;
  value: string;
}

const Skills = () => {
  const [skillsA] = useState<Array<SkillTypes>>([
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      percentage: "100%",
      value: "100",
    },
    {
      id: "Node_skill",
      content: "Node.js",
      percentage: "97%",
      value: "97",
    },
    { id: "HTML5_skill", content: "HTML5", percentage: "100%", value: "100" },
    { id: "CSS3_skill", content: "CSS3", percentage: "100%", value: "100" },
    {
      id: "Javascript_skill",
      content: "JavaScript",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Typescript_skill",
      content: "Typescript",
      percentage: "95%",
      value: "95",
    },
    {
      id: "Redux_skill",
      content: "Redux",
      percentage: "94%",
      value: "94",
    },
    {
      id: "NextJS_skill",
      content: "NextJS",
      percentage: "90%",
      value: "90",
    },
  ]);

  const [skillsB] = useState<Array<SkillTypes>>([
    {
      id: "GraphQL_skill",
      content: "GraphQL",
      percentage: "96%",
      value: "96",
    },
    {
      id: "RestAPI_skill",
      content: "RestAPI",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Database_skill",
      content: "Databases",
      percentage: "96%",
      value: "96",
    },
    {
      id: "Git_skill",
      content: "Git",
      percentage: "98%",
      value: "98",
    },
    {
      id: "Firebase_skill",
      content: "Firebase",
      percentage: "92%",
      value: "92",
    },
    {
      id: "MongoDB_skill",
      content: "MongoDB",
      percentage: "98%",
      value: "98",
    },
    {
      id: "UI/UX_skill",
      content: "UI/UX Design",
      percentage: "94%",
      value: "94",
    },
    {
      id: "Figma_skill",
      content: "Figma",
      percentage: "94%",
      value: "94",
    },
  ]);

  return (
    <div className="skills">
      <h4>EXPERTISE</h4>
      <div className="skills-wrapper">
        <SkillCard skills={skillsA} />
        <div className="divider"></div>
        <SkillCard skills={skillsB} />
        {/* <div className="skills-img">
          <img src="/img/computer.png" alt="programming" />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
