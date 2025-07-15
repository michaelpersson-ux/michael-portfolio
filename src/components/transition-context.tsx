import React from "react";

type TransitionContextType = {
  transitioning: boolean;
  setTransitioning: (value: boolean) => void;
  container: React.RefObject<HTMLElement | null>;
  setContainer: (value: React.RefObject<HTMLElement | null>) => void;
};

const TransitionContext = React.createContext<TransitionContextType>({
  transitioning: false,
  setTransitioning: () => {},
  container: React.createRef<HTMLElement | null>(), // Default to a ref object
  // This can be set to null initially, but using a ref object is more flexible
  setContainer: () => {},
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
        container: React.createRef<HTMLElement>(), // Create a new ref object
        setContainer: (value: React.RefObject<HTMLElement | null>) => {
          // This can be used to set the transition container later
          // For example, you can set it in a useEffect when the component mounts
          console.warn(value + " setContainer is not implemented yet.");
        },
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
