import type { ReactElement } from "react";
import { Window } from "./Window";
import { useVisibilityContext } from "../../hooks/VisibilityProvider";

export const DocWindow = (): ReactElement => {

  const experience = [
    {
      title: 'Fullstack Engineer',
      subtitle: 'Stylight Gmbh - Munich, Germany (2018-2025)',
      text: 'Designed and maintained high-throughput Python data pipelines (processing 40M+ events and 16B+ records annually), developed scalable systems for batch processing and billing, and improved B2B partner onboarding with React/TypeScript apps. Led the re-architecture of core software, replacing a legacy monolith with a clean service-based solution.',
    },
    {
      title: 'Fullstack Engineer',
      subtitle: 'IBM - Rio de Janeiro, Brazil (2017-2018)',
      text: 'Led the adoption of Vue.js across the team, serving as the internal expert and coach. Built company-wide apps using Node.js, AngularJS, and Vue.js within a microservices architecture. Provided global JavaScript coaching to developers.',
    },
    {
      title: 'Fullstack Intern',
      subtitle: 'IBM - Rio de Janeiro, Brazil (2016-2017)',
      text: 'During an internship at IBM, built and maintained internal applications with Node.js and React.js, developed a reusable object storage microservice, and created a task management tool used by 2,000+ employees.',
    },
  ];

  const education = [
    {
      title: 'Bachelor of Computer Science',
      subtitle: 'Federal Center for Technological Education of Rio de Janeiro - CEFET-RJ (2012-2018)',
      text: 'Teaching Assistant in Computational Algorithms with a degree focused on software development and data science, covering topics such as statistics with R, databases, distributed systems, artificial intelligence, web & mobile applications, and data structures.',
    },
    {
      title: 'DAAD Scholarship - Informatik',
      subtitle: 'Freie Universität Berlin (2015-2016)',
      text: 'DAAD-CAPES Science Without Borders Scholar at Freie Universität Berlin, including a certified B2 German language course.',
    },
    {
      title: 'DAAD Scholarship - Deutsch als Fremdsprachen',
      subtitle: 'Interkulturelle Bildung Hamburg (2014-2015)',
      text: 'DAAD-CAPES Scholarship for a preparatory course for academic studies in Germany. TELC Certified - German(B1).',
    },
  ];

  return (
    <Window type="doc" title="./Thiago_CV.txt" _className="cv">
      <>
        <div className="window__body__text__block">
          <h1 className="window__body__header">
            Experience
          </h1>
        </div>
        {experience.map(block => (
          <div className="window__body__text__block" key={block.subtitle}>
            <h2 className="window__body__title">
              {block.title}
            </h2>
            <h5 className="window__body__subtitle">
              {block.subtitle}
            </h5>
            <div className="window__body__text">
              {block.text}
            </div>
          </div>
        ))}
        <div className="window__body__text__block">
          <h1 className="window__body__header">
            Education
          </h1>
        </div>
        {education.map(block => (
          <div className="window__body__text__block" key={block.title}>
            <h2 className="window__body__title">
              {block.title}
            </h2>
            <h5 className="window__body__subtitle">
              {block.subtitle}
            </h5>
            <div className="window__body__text">
              {block.text}
            </div>
          </div>
        ))}
      </>
    </Window>
  )
} 