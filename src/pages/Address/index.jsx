import { useFetchProvinces } from "@/services/address";
import React from "react";

function Address() {
  const { isLoading, provinces } = useFetchProvinces();

  return (
    <>
      <h1>Address</h1>
      <ul>
        {!isLoading ? (
          provinces.map((province) => (
            <li key={province.province_id}>
              {province.province_id} - {province.name}
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  );
}

export default Address;
