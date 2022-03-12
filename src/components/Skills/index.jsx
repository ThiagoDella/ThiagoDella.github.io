import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ProgressSkill from "../ProgressSkill";
import fetchData from "../../fetchData";
import Skeleton from "../Skeleton";

function Skill(props) {
  const ctx = useRef();
  const [expand, setExpand] = useState(false);
  const [skills, setSkills] = useState([]);
  const [techText, setTechText] = useState("");

  useEffect(() => {
    fetchData("skills", (data) => {
      const newData = data.map((skill) => ({ ...skill.attributes }));
      setSkills(newData);
    });

    fetchData("tech-text", (data) => setTechText({ ...data.attributes }));
  }, []);

  useEffect(() => {
    let languagesChart;
    if (skills && ctx?.current) {
      languagesChart = new Chart(ctx.current.getContext("2d"), {
        type: "radar",
        options: {
          responsive: true,
          elements: {
            line: {
              borderWidth: 3,
            },
          },
          scales: {
            r: {
              min: 0,
              max: 4,
              ticks: {
                maxTicksLimit: 5,
                callback: function (value, index, ticks) {
                  const labels = [
                    "",
                    "Gets stuff done",
                    "Proficient",
                    "Advanced",
                  ];
                  return labels[value];
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const labels = [
                    "",
                    "Gets stuff done",
                    "Proficient",
                    "Advanced",
                  ];
                  return ` ${labels[context.formattedValue]}`;
                  // return ` In ${context.formattedValue} projects`
                },
              },
            },
          },
        },
        data: {
          labels: [
            "JavaScript",
            "Python",
            "React",
            "React Native",
            "CSS/SCSS",
            "NodeJS",
            "SQL",
            "NoSQL",
            "AWS",
            "CI",
          ],
          datasets: [
            {
              data: [3, 2, 3, 2, 2, 3, 2, 2, 1, 2],
              tension: 0.5,
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
          ],
        },
      });
    }
    return () => {
      languagesChart?.destroy();
    };
  }, [skills]);

  const expandSkills = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className={`radar ${skills.length > 0 ? "radar--height" : ""}`}>
        <div className="radar__title">Tech Skills</div>
        {techText && (
          <>
            <div className="radar__text">
              <ReactMarkdown>{techText.content}</ReactMarkdown>
            </div>
            <div className="radar__chart">
              <canvas ref={ctx}></canvas>
            </div>
          </>
        )}
        {!techText && (
          <div className="radar__skeleton">
            <Skeleton />
          </div>
        )}
      </div>
      {skills.length > 0 && (
        <div className={expand ? "skills--expanded" : "skills"}>
          <div className="skills__button">
            <button onClick={expandSkills}>
              {expand ? "Collapse skills" : "Expand skills"}
            </button>
          </div>
          {skills.map((skill, index) => (
            <ProgressSkill skill={skill} key={`${skill.name}-${index}`} />
          ))}
        </div>
      )}
    </>
  );
}

export default Skill;
