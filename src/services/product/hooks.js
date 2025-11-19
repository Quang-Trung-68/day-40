import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useProducts, actions } from "@/features/product";
import { getProducts } from "./services";

export function useFetchProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useProducts();

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      dispatch(actions.setItems(response.data.items));
      setIsLoading(false);
    })();
  }, [dispatch, setIsLoading]);

  return { isLoading, products };
}
