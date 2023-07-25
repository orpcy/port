import React, { FC } from "react";

interface ISkillsProp {
  skills: {
    id: string;
    content: string;
    percentage: string;
    value: string;
  }[];
}

const SkillCard: FC<ISkillsProp> = ({ skills }) => {
  return (
    <div className="skills-inner">
      {skills.map((skill) => {
        const { id, content, percentage } = skill;
        return (
          <div className="progress-wrap" key={id}>
            <div className="skills-percent">
              <span>{content}</span>
              {/* <span>{porcentage}</span> */}
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: percentage }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
