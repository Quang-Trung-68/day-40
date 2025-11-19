import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { actions, useUsers } from "@/features/user";
import { getUsers } from "./services";

export function useFetchUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useUsers();

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      dispatch(actions.setItems(response));
      setIsLoading(false);
    })();
  }, [dispatch, setIsLoading]);

  return { isLoading, users };
}
