import React from "react";

function ProgressSkill({skill, ...props }) {
  const levels = ["Gets stuff done", "Proficient", "Advanced"];
  return (
    <div className="progress-skills">
      <div className="progress-skills__title">{skill.name}</div>
      <div className="progress-skills__levels">
        {skill &&
          levels.map((level, index) => (
            <>
              <div className="progress-skills__level" key={`${level}-${index+10}`}>{level}</div>
            </>
          ))}
      </div>
      <div className="progress-skills__steps">
        {skill &&
          levels.map((level, index) => (
            <>
              <div key={`${level}-${index+20}`}
                className={
                  index + 1 <= skill.level
                    ? "progress-skills__step--paint"
                    : "progress-skills__step"
                }
              ></div>
            </>
          ))}
      </div>
    </div>
  );
}

export default ProgressSkill;
