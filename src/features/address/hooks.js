import { useSelector } from "react-redux";

export function useProvinces() {
  const provinces = useSelector((state) => state.address.items);
  return provinces;
}
