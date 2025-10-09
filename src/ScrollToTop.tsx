import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const fixScroll = () => {
      if (hash && hash !== "#/" && hash !== "#") {
        console.log("it doesn't happen");
        const targetId = hash.replace(/^#\/?/, "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "instant" as ScrollBehavior });
          return;
        }
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
      console.log("should be");
    };

    // requestAnimationFrameを3回ネストして、「描画が安定した後」に実行
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(fixScroll);
      });
    });

    previousPathname.current = pathname;
  }, [pathname, hash]);

  return null;
}
