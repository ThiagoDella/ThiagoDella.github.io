import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import fetchData from "../../fetchData";
import Skeleton from "../Skeleton";
function Readme(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetchData("readmes/1", (data) => setText(data?.attributes?.content));
  }, []);

  return (
    <div className="readme">
      <div className="readme__title">Readme</div>
      {text && (
        <div className="readme__text">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      )}
      {!text && (
        <div className="readme__skeleton">
          <Skeleton />
        </div>
      )}
    </div>
  );
}

export default Readme;
