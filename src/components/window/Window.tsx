import type {
  MouseEvent,
  ReactElement,
  ReactNode
} from "react";
import {
  useVisibilityContext,
  type IVisibility,
} from "../../hooks/VisibilityProvider";
import "./window.css";

export const Window = ({
  children,
  type,
  title,
  _className,
}: {
  children: ReactElement;
  type: string;
  title: string;
  _className: keyof IVisibility;
}): ReactNode => {
  const { visibilityState, setVisibilityState, latestClick, setLatestClick } =
    useVisibilityContext();
  const _class = _className ? `window--${_className}` : "";

  const changeVisibility = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (_className !== "terminal")
      setVisibilityState({
        ...visibilityState,
        [_className]: false,
      });
  };

  const bringFront = (name: string) => {
    setLatestClick(name);
  }

  return (
    <article
      className={`window ${_class}`}
      onClick={() => bringFront(_className)}
      style={{
        display: visibilityState[_className] ? "block" : "none",
        zIndex: latestClick === _className ? 99 : 1,
      }}
    >
      <div className="window__toolbar">
        <div className="window__toolbar__buttons">
          <div
            className="window__toolbar__button"
            onClick={(e) => changeVisibility(e)}
          ></div>
          <div className="window__toolbar__button"></div>
          <div className="window__toolbar__button"></div>
        </div>
        <div className="window__toolbar__title">
          <p>{title}</p>
        </div>
      </div>
      <div className={`window__body--${type}`}>{children}</div>
    </article>
  );
};
