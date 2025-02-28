import React from "react";

type TransitionContextType = {
  transitioning: boolean;
  setTransitioning: (value: boolean) => void;
};

const TransitionContext = React.createContext<TransitionContextType>({
  transitioning: false,
  setTransitioning: () => {},
});

interface TransitionContextProviderProps {
  children: React.ReactNode;
}

export const TransitionContextProvider: React.FC<
  TransitionContextProviderProps
> = ({ children }) => {
  const [transitioning, setTransitioning] = React.useState(false);

  return (
    <TransitionContext.Provider
      value={{
        transitioning: transitioning,
        setTransitioning: setTransitioning,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
