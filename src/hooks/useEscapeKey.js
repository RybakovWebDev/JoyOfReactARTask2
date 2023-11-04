import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    window.addEventListener("keydown", callback);

    return () => window.removeEventListener("keydown", callback);
  }, [callback]);
};

export default useEscapeKey;
