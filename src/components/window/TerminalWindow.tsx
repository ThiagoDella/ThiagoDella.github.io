import type { ReactElement } from "react";
import { Window } from "./Window";

import { AsciiText } from "../AsciiText";
import { AllSingleUnderlineText, InvertedColorsText } from "../text/TextVariations";

export const TerminalWindow = (): ReactElement => {
  return (
    <Window type="terminal" title="bash" _className="terminal">
      <>
        <div className="window__body__command">
          <span className="window__body__pwd">
            ~/Thiago
          </span>
          <span className="window__body__text">
            . ./welcome.sh
          </span>
        </div>
        <div className="window__body__command">
          <span className="window__body__text">
            <AsciiText />
          </span>
          <span className="window__body__title">
            <h1>
              Hi, I'm Thiago!
            </h1>
          </span>
        </div>
        <div className="window__body__command">
          <span className="window__body__text">
            I'm a Brazilian <AllSingleUnderlineText text={"Fullstack Software Engineer"} />, based in <InvertedColorsText text={"Frankfurt - Germany"} />!
          </span>
        </div>
        <div className="window__body__command">
          <span className="window__body__text">
            <br />
            With 8+ years of experience building software that people genuinely enjoy using — from distributed, high-throughput data processing systems handling over 16 billion product records per year, to dynamic, intuitive web and mobile applications. I specialize in TypeScript, Node.js, React, and Python, and have production-grade experience with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB, Redis) databases.
            <br />
            <br />
            I'm familiar with designing scalable backend systems, event-driven microservices, and serverless architectures using the AWS ecosystem (Lambda, S3, API Gateway, SQS, CloudWatch, etc.). I build with a focus on clean architecture, TDD, and domain-driven design, and I enjoy tackling complex engineering challenges — from real-time data flows to user-friendly frontends.
            <br />
            <br />
            I care about code that’s readable, maintainable, and tested — and about building products that deliver real value.
          </span>
        </div>
      </>
    </Window>
  )
} 