import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { actions, useProvinces } from "@/features/address";
import { getProvinces } from "./services";

// import { useProducts, actions } from "@/features/product";
// import { getProducts } from "./services";

export function useFetchProvinces() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const provinces = useProvinces();
  console.log(provinces);
  useEffect(() => {
    (async () => {
      const response = await getProvinces();
      dispatch(actions.setItems(response.data));
      setIsLoading(false);
    })();
  }, [dispatch, setIsLoading]);

  return { isLoading, provinces };
}
