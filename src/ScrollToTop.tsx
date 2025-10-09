import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    const timeout = setTimeout(() => {
      if (pathname !== previousPathname.current) {
        window.scrollTo(0, 0);
        previousPathname.current = pathname;
      } else if (hash) {
        // アンカーの場合は、その要素へ移動
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
