import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | DM Travel Concierge`;
  }, [title]);
}

export default usePageTitle;
