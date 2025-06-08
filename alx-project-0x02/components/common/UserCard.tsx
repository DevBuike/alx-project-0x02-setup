import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Email: {email}</p>
        <p>Address: {address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
