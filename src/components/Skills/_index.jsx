import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function Language(props) {
  const [repositories, setRepositories] = useState("");
  const [languages, setLanguages] = useState();
  const [normCounter, setNormCounter] = useState({});
  const ctx = useRef();

  const normalize = (val, max, min) => (val - min) / (max - min) + 1;

  useEffect(() => {
    const getContent = async () => {
      let response = await fetch(
        "https://api.github.com/users/thiagodella/repos",
        {
          method: "GET",
          headers: {
            Authorization: "token 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",
          },
        }
      );
      setRepositories(await response.json());
    };
    getContent();
  }, []);

  useEffect(() => {
    const fetchLanguages = async (url) => {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "token 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",
        },
      });
      return await response.json();
    };

    const caller = async () => {
      const counter = {};
      const keys = Object.keys(repositories);
      const result = await Promise.all(
        keys.map((key) => fetchLanguages(repositories[key].languages_url))
      );
      // COUNT LANGUAGES
      result.map((langs) => {
        const _languages = Object.keys(langs);
        _languages.map((lang) => {
          if (counter[lang]) {
            counter[lang] += 1;
          } else {
            counter[lang] = 1;
          }
        });
      });
      setLanguages(counter);
    };

    caller();
  }, [repositories]);

  useEffect(() => {
    if (languages) {
      const _languages = Object.keys(languages);
      const maxLang = _languages.reduce((acc, lang) => {
        return acc === null || languages[lang] > acc ? languages[lang] : acc;
      }, null);
      const minLang = _languages.reduce((acc, lang) => {
        return acc === null || languages[lang] < acc ? languages[lang] : acc;
      }, null);
      // _languages.map((lang) => {
      //   languages[lang] = normalize(languages[lang], maxLang, minLang);
      // });
      setNormCounter(languages);
    }
  }, [languages]);

  useEffect(() => {
    if (Object.keys(normCounter).length > 0) {
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
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                  return `In ${value} projects`;
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
                  return ` In ${context.formattedValue} projects`
                },
              },
            },
          },
        },
        data: {
          labels: Object.keys(normCounter),
          datasets: [
            {
              data: Object.values(normCounter).map((val) =>
                parseFloat(val.toFixed(3))
              ),
              labels: Object.keys(normCounter),
              tension: 0.2,
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
    }
  }, [normCounter]);

  return (
    <div className="radar">
      <div className="radar__title">
        My public repostories
      </div>
      <div className="radar__chart">
        <canvas ref={ctx} width="400" height="400"></canvas>
      </div>
    </div>
  );
}

export default Language;
