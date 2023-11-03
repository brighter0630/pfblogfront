import React from "react";
import Link from "next/link";

function TagList({ list }) {
  return (
    <div className="float-left">
      <ul>
        {list.map((tag, i) => (
          <span key={i} className="mx-1">
            <Link href={`/postlist/tag/${tag}/1`} replace={false}>
              #{tag}
            </Link>
          </span>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
