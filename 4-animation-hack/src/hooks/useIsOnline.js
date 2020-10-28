import { useState, useEffect } from "react";

const UseIsOnline = () => {
  const [isOnline, setStatus] = useState(true);
  useEffect(() => {
    if (navigator.onLine) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [isOnline]);
  return isOnline;
};

export default UseIsOnline;
