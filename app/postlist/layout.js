// 컴포턴트가 없으면 에러가 발생함... postlist 의 page 가 react components가 아니라고.
function PostListLayout({ children }) {
  return <div className=" text-gray-800 text-opacity-90">{children}</div>;
}
 
export default PostListLayout;
