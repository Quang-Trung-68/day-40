import { useSelector } from "react-redux";

export function usePosts() {
  const posts = useSelector((state) => state.post.items);
  return posts;
}
