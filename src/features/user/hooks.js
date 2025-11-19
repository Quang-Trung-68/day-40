import { useSelector } from "react-redux";

export function useUsers() {
  const users = useSelector((state) => state.user.items);
  return users;
}
