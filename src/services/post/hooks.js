import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { actions, usePosts } from "@/features/post";
import { getPosts } from "./services";

export function useFetchPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const posts = usePosts();

  useEffect(() => {
    (async () => {
      const response = await getPosts();
      dispatch(actions.setItems(response));
      setIsLoading(false);
    })();
  }, [dispatch, setIsLoading]);

  return { isLoading, posts };
}
