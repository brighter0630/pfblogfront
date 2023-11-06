import Link from "next/link";

function PostListing({ postsMeta }) {
  return (
    <div className="grid mx-auto my-1 sm:my-1 md:my-2 w-full md:p-0">
      {postsMeta
        ?.filter((post) => new Date(post.date) < new Date())
        .map((post, i) => (
          <div key={i} className="m-4 rounded-sm border-b-2 border-b-stone-300">
            <Link href={`/post/${encodeURI(post.slug)}`}>
              <h1 className="p-4 font-bold text-lg text-gray-900">
                {post.title}
              </h1>
              <div className="grid grid-rows-2">
                <span className="text-right mr-10  md:mr-10 font-light text-xs text-gray-800">
                  {post.date.substring(0, 4)}년 {post.date.substring(5, 7)}월{" "}
                  {post.date.substring(8, 10)}일
                </span>
                <span className="font-light text-xs text-gray-800 text-right mr-10 md:mr-10">
                  by {post.author}
                </span>
              </div>
              <h3 className="p-6 font-sm text-sm">&nbsp;&nbsp;{post.metaDesc}</h3>
            </Link>
            <div className="flex flex-row mb-1">
              {post.tags.slice(0, 3).map((tag, i) => (
                <Link key={i} href={`/postlist/tag/${tag}/1`} replace={false}>
                  <span className="p-1 text-xs md:text-sm text-gray-300 bg-slate-900 rounded-md m-1 break-keep">
                    #{tag}
                  </span>
                </Link>
              ))}
								<span className={`${post.tags.length > 3 ? "visible" : "collapse"}`}>...</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostListing;
