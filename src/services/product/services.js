import httpRequest from "@/utils/httpRequest";

export async function getProducts() {
  const response = await httpRequest.get("/products");
  console.log(response);
  return response;
}
