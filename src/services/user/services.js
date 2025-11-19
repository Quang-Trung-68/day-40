import httpRequest from "@/utils/httpRequest";

export async function getUsers() {
  const response = await httpRequest.get("/users");
  console.log(response);
  return response;
}
