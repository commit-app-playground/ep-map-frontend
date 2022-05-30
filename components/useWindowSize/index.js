import React, { useEffect, useState, useRef } from "react";


/*
Simple hook to get the size of the window and change the state based resize events
*/
export function useWindowSize() {
  const [size, setSize] = useState(null);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size ? { width: size[0], height: size[1]}: null;
}
