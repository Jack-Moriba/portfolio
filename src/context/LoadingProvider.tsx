import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-start loading progress
  useEffect(() => {
    if (!isLoading) return;

    let percent = 0;
    
    // Phase 1: Fast loading (0-50%)
    intervalRef.current = setInterval(() => {
      if (percent < 50) {
        const increment = Math.round(Math.random() * 5) + 1;
        percent = Math.min(50, percent + increment);
        setLoading(percent);
      } else {
        // Phase 2: Slow loading (50-90%)
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
          if (percent < 90) {
            percent = percent + Math.round(Math.random() * 2);
            setLoading(Math.min(90, percent));
          } else {
            // Hold at 90% until resources loaded
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }
        }, 800);
      }
    }, 100);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoading]);

  // Effect to finish loading when isLoading becomes false
  useEffect(() => {
    if (!isLoading && loading < 100 && loading > 0) {
      // Fast finish to 100%
      let percent = loading;
      const finishInterval = setInterval(() => {
        if (percent < 100) {
          percent = percent + 2;
          setLoading(Math.min(100, percent));
        } else {
          clearInterval(finishInterval);
        }
      }, 20);

      return () => clearInterval(finishInterval);
    }
  }, [isLoading, loading]);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className={`main-body ${!isLoading ? 'loaded' : ''}`}>{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
