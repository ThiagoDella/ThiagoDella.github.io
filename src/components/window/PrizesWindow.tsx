import type { ReactElement } from "react";
import { Window } from "./Window";

export const PrizesWindow = (): ReactElement => {

  const prizes = [
    {
      title: 'Stylight Open Friday',
      text: 'As a new business idea, I developed a Chrome extension that automatically applied available discount coupons on e-commerce websites, enhancing user savings and shopping convenience.',
    },
    {
      title: 'Fullstack Intern',
      text: 'Led a team to victory in a fun, competitive hackathon where robots had to navigate a maze. Developed the winning  trategy and solution, showcasing problem-solving, leadership, and technical skills.',
    },
    {
      title: 'IBM Bluehack',
      text: 'Winner of the first IBM Bluehack edition in the category Blockchain.\n\n The winning project was a proof of concept for a platform that aimed to prevent forgery, failures and modern slavery in the textile industry.',
    },
  ];

  return (
    <Window type="doc" title="./Prizes.txt" _className="prizes">
      <>
        <div className="window__body__text__block">
          <h1 className="window__body__header">
            Company Prizes
          </h1>
        </div>
        {prizes.map(block => (
          <div className="window__body__text__block" key={block.title}>
            <h2 className="window__body__title">
              {block.title}
            </h2>
            <div className="window__body__text">
              {block.text}
            </div>
          </div>
        ))}
      </>
    </Window>
  )
} 