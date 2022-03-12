import {
  faGithub,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import fetchData from "../../fetchData";

function Links(props) {
  const [links, setLinks] = useState([]);

  const icons = {
    github: faGithub,
    linkedin: faLinkedinIn,
    twitter: faTwitter,
    medium: faMediumM,
  };

  useEffect(() => {
    fetchData('links', (data) => {
      const newData = data?.map(link => ({...link.attributes}));
      setLinks(newData);
    });
  }, [])

  return (
    <div className="links">
      {links.length > 0
      && links.map(link => (
        <a href={link.address} key={link.address} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons[link.type]} />
        </a>
      ))
      }
    </div>
  );
}

export default Links;
