import { createContext, useContext, useState, type ReactNode } from "react";

export interface IVisibility {
  terminal: boolean;
  cv: boolean;
  prizes: boolean;
  portfolio: boolean;
  contact: boolean;
  "image-1": boolean;
  "image-2": boolean;
  "image-3": boolean;
}

const visibility = {
  terminal: true,
  cv: false,
  prizes: false,
  portfolio: false,
  contact: false,
  "image-1": false,
  "image-2": false,
  "image-3": false,
};

interface IVisibilityCtx {
  visibilityState: typeof visibility;
  setVisibilityState: (_state: typeof visibility) => void;
  latestClick: string | null;
  setLatestClick: (_state: string) => void;
}

const VisibilityContext = createContext<IVisibilityCtx | null>(null);

export const VisibilityProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [visibilityState, setVisibilityState] = useState(visibility);
  const [latestClick, setLatestClick] = useState<null | string>(null);

  return (
    <VisibilityContext.Provider value={{ visibilityState, setVisibilityState, latestClick, setLatestClick }}>
      {children}
    </VisibilityContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useVisibilityContext = (): IVisibilityCtx => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useVisibilityContext must be used within a VisibilityProvider");
  }
  return context;
};
