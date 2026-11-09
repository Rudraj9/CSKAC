import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    const baseTitle = "CS Department, KAC";
    if (title) {
      document.title = `${title} | ${baseTitle}`;
    } else {
      document.title = "Department of Computer Science | Kendrapara Autonomous College";
    }
  }, [title]);
}

