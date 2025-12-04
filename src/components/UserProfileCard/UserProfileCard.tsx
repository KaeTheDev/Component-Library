import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}) => {

  return (
    <div className="flex gap-4 p-4 border rounded-lg w-120 mt-6">
        <div className="flex justify-center"><img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex flex-col flex-1 text-center">
        <div>
            <p className="text-black-700 font-medium">{user.name}</p>
            {showEmail && <p className="text-gray-500 text-base">{user.email}</p>}
            {showRole && <p className="text-gray-500 text-base">{user.role}</p>}
        </div>
        {children}
        {onEdit && (
            <button
            onClick={() => onEdit(user.id)}
            className="full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Edit Profile
            </button>
        )}
      </div>
      </div>
  );
};