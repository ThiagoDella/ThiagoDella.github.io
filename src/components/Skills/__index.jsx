import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function Language(props) {
  const ctx = useRef();

  useEffect(() => {
    const languagesChart = new Chart(ctx.current.getContext("2d"), {
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
                  "Good",
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
                  "Good",
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
        //labels: ['Advanced', 'Proficient', 'Good', 'Gets stuff done'],
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
            data: [4, 3, 4, 3, 3, 3, 4, 3, 1, 2],
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
    return () => {
      languagesChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="radar">
        <div className="radar__title">Tech Skills</div>
        <div className="radar__text--left">
          <p>
            <span className="space"></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius omnis
            earum, quibusdam accusamus mollitia, totam est maxime magnam
            molestias molestiae ex debitis, sunt tenetur ipsa! Libero saepe aut
            ex ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eius omnis earum, quibusdam accusamus mollitia, totam est maxime
            magnam molestias molestiae ex debitis, sunt tenetur ipsa! Libero
            saepe aut ex ducimus.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eius omnis earum, quibusdam accusamus mollitia,
            totam est maxime magnam molestias molestiae ex debitis, sunt tenetur
            ipsa! Libero saepe aut ex ducimus.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius omnis earum, quibusdam accusamus
            mollitia, totam est maxime magnam molestias molestiae ex debitis,
            sunt tenetur ipsa! Libero saepe aut ex ducimus.
          </p>
        </div>
        {/* <div className="radar__chart">
          <div className="radar__fixer">
            <canvas ref={ctx}></canvas>
          </div>
        </div> */}

        <div className="radar__text--right">
          <p>
            <span className="pullout">
              <div className="radar__chart">
                <div className="radar__fixer">
                  <canvas ref={ctx}></canvas>
                </div>
              </div>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius omnis
            earum, quibusdam accusamus mollitia, totam est maxime magnam
            molestias molestiae ex debitis, sunt tenetur ipsa! Libero saepe aut
            ex ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eius omnis earum, quibusdam accusamus mollitia, totam est maxime
            magnam molestias molestiae ex debitis, sunt tenetur ipsa! Libero
            saepe aut ex ducimus.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eius omnis earum, quibusdam accusamus mollitia,
            totam est maxime magnam molestiasmolestiae ex debitis, sunt tenetur
            ipsa! Libero saepe aut ex ducimus.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eius omnis earum, quibusdam accusamus
            mollitia, totam est maxime magnam molestias molestiae ex debitis,
            sunt tenetur ipsa! Libero saepe aut ex ducimus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Language;
