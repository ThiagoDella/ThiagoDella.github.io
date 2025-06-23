import type { ReactElement } from "react";
import { Window } from "./Window";
import type { IVisibility } from "../../hooks/VisibilityProvider";

export const ImageWindow = ({ source, alt, title, _className }: { source: string; alt: string; title: string; _className: keyof IVisibility }): ReactElement => {

  return (
    <Window type="image" title={title} _className={_className}>
      <>
        <img src={source} alt={alt} />
      </>
    </Window>
  )
} 