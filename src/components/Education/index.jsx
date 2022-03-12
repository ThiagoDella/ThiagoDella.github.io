import React, { useEffect, useState } from "react";
import fetchData from "../../fetchData";
import Skeleton from "../Skeleton";

function Education(props) {
  const [degrees, setDegrees] = useState([]);
  
  useEffect(() => {
    fetchData('degrees', (data) => {
      const newData = data?.map(degree => ({...degree.attributes}));
      setDegrees(newData);
    });
  }, []);

  return (
    <div className="education">
      <div className="education__title">Education</div>
      <div className="degrees">
        {degrees.length > 0 && degrees.map((degree) => (
          <div className="degree" key={degree.title.split(" ").join("-")}>
            <div className="degree__title">{degree.title}</div>
            {degree.thesis && (
              <div className="degree__description">
                {degree.thesis}
                {degree.thesis_link && (
                  <span className="degree__paper">
                    (
                    <a
                      href="https://dl.acm.org/doi/10.1145/3243082.3267447"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ACM paper
                    </a>
                    )
                  </span>
                )}
              </div>
            )}
            <div className="degree__description">{degree.description}</div>
          </div>
        ))}
        {degrees.length === 0 &&
          <div className="degrees__skeleton">
            <Skeleton />
          </div>
        }
      </div>
    </div>
  );
}

export default Education;
