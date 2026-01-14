"use client";

import { useEffect, useRef } from "react";

export function Comments() {
  const commentBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const commentBox = commentBoxRef.current;
    if (!commentBox) return;

    commentBox.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "devksingh4/web-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    commentBox.appendChild(script);
  }, []);

  return <div ref={commentBoxRef} className="mt-8 w-full text-left" />;
}
