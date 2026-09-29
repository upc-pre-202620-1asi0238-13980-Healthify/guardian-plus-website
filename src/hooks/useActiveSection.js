import { useEffect, useState } from "react";

/*
 * Returns the id of the section currently crossing the middle band of the viewport,
 * so the header can highlight the matching navigation link.
 */
function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof window.IntersectionObserver !== "function") {
      return undefined;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default useActiveSection;
