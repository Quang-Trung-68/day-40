import httpRequest from "@/utils/httpRequest";

export async function getPosts() {
  const response = await httpRequest.get("/posts");
  console.log(response);
  return response;
}
