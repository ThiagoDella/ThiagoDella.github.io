
import { useVisibilityContext, type IVisibility } from "../../hooks/VisibilityProvider";
import "./window.css";
import type { ReactElement, ReactNode } from "react";

export const Window = ({ children, type, title, _className }: { children: ReactElement; type: string; title: string, _className: keyof IVisibility }): ReactNode => {
  const { visibilityState, setVisibilityState } = useVisibilityContext();
  const _class = _className ? `window--${_className}` : ""

  const changeVisibility = () => {
    if (_className !== "terminal")
      setVisibilityState({
        ...visibilityState,
        [_className]: false,
      });
  }

  return (
    <article className={`window ${_class}`} style={{ display: visibilityState[_className] ? "block" : "none" }} >
      <div className="window__toolbar">
        <div className="window__toolbar__buttons">
          <div className="window__toolbar__button" onClick={changeVisibility}></div>
          <div className="window__toolbar__button"></div>
          <div className="window__toolbar__button"></div>
        </div>
        <div className="window__toolbar__title">
          <p>{title}</p>
        </div>
      </div>
      <div className={`window__body--${type}`}>
        {children}
      </div>
    </article >
  )
}