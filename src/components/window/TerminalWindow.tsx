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
            With 8+ years of experience building software people would like to use. May it be a distributed heavy load data processing pipeline for 16 Billion products yearly, to a dynamic & simple to use web app.
          </span>
        </div>
      </>
    </Window>
  )
} 