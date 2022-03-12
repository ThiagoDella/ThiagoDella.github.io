import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Skeleton from "../Skeleton";
import fetchData from "../../fetchData";

function Career(props) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData('experiences', (data) => {
      const newData = data?.map(job => ({...job.attributes})).sort((job1, job2) => {
        return new Date(job2.end_date) - new Date(job1.end_date);
      });

      setJobs(newData);
    })
  }, []);

  return (
    <div className="career">
      <div className="career__title">Career</div>
      <div className="jobs">
        {
           jobs.length > 0 && jobs.map(job => (
            <div className="job" key={job.title.split(' ').join('-')}>
              <div className="job__title">{job.title}</div>
              <div className="job__description">
                <ReactMarkdown>
                  {job.description}
                </ReactMarkdown>
              </div>
            </div>
          ))
        }
        {jobs.length === 0 &&
          <div className="career__skeleton">
            <Skeleton />
          </div>
        }
      </div>
    </div>
  );
}

export default Career;
