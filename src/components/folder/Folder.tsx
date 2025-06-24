import type { ReactElement } from "react";

import './folder.css';
import { useVisibilityContext, type IVisibility } from "../../hooks/VisibilityProvider";

export const Folder = ({ title, type = "html", _className }: { title: string; type: string; _className: keyof IVisibility }): ReactElement => {
  const { visibilityState, setVisibilityState, setLatestClick } = useVisibilityContext();
  const _title = `${title}.${type}`;

  const changeVisibility = () => {
    setLatestClick(_className);
    setVisibilityState({
      ...visibilityState,
      [_className]: true,
    });
  }

  return (
    <div className="folder__container" onClick={changeVisibility}>
      <div className="folder__icon">
        <img src={`./images/${type}.png`} alt="A folder icon" />
      </div>
      <div className="folder__title">{_title}</div>
    </div>
  );
}