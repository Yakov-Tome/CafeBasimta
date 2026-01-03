"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids, { defaultId = ids?.[0], threshold = 0.6 } = {}) {
    const [activeId, setActiveId] = useState(defaultId);

    useEffect(() => {
        if (!ids?.length) return;

        const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
        if (!els.length) return;

        const initial = window.location.hash?.replace("#", "");
        if (initial) setActiveId(initial);

        const obs = new IntersectionObserver(
            (entries) => {
                const top = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (top?.target?.id) {
                    setActiveId(top.target.id);
                    window.history.replaceState(null, "", `#${top.target.id}`);
                }
            },
            { threshold: [threshold] }
        );

        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [ids, threshold]);

    return activeId;
}
