import type { ReactElement } from "react";
import { Window } from "./Window";

export const ImageWindow = ({ source, alt, title, _className }: { source: string; alt: string; title: string; _className: string }): ReactElement => {

  return (
    <Window type="image" title={title} _className={_className}>
      <>
        <img src={source} alt={alt} />
      </>
    </Window>
  )
} 