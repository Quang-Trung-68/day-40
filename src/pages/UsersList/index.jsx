import { useFetchUsers } from "@/services/user";
import React from "react";
import "./user.css";

function UsersList() {
  const { isLoading, users } = useFetchUsers();

  return (
    <div className="user-container">
      <h1 className="user-title">Users List</h1>

      {isLoading ? (
        <div className="user-spinner-wrapper">
          <div className="user-spinner"></div>
        </div>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <h2 className="user-name">{user.name}</h2>

              <div className="user-username">Username: {user.username}</div>
              <div className="user-body">Email: {user.email}</div>
              <div className="user-body">Phone: {user.phone}</div>
              <div className="user-body">Website: {user.website}</div>

              <hr className="user-divider" />

              <div className="user-body">
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.suite}, {user.address.city} (
                {user.address.zipcode})
              </div>

              <div className="user-body">
                <strong>Geo:</strong> lat {user.address.geo.lat}, lng{" "}
                {user.address.geo.lng}
              </div>

              <hr className="user-divider" />

              <div className="user-body">
                <strong>Company:</strong> {user.company.name}
              </div>

              <div className="user-body">
                <em>{user.company.catchPhrase}</em>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
