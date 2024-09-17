"use client";

import Link from "next/link";
import clsx from "clsx";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import UserIcon from "@heroicons/react/24/outline/esm/UserIcon";
import users from './userdetails.json';

interface SideNavProps {
  onSelectUser: (user: string | null) => void;
}

export default function Sidenav({ onSelectUser }: SideNavProps) {
  const searchParams = useSearchParams();
  const currentUser = searchParams.get('user'); // Get the 'user' query parameter

  useEffect(() => {
    onSelectUser(currentUser); // Notify the parent component of the selected user
  }, [currentUser]);

  return (
    <>
      {users.map((user) => {
        const userNameParam = encodeURIComponent(user.Name); // Encode the user name for the URL
        const isActive = currentUser === user.Name; // Compare actual names

        return (
          <Link
            key={user.Name}
            href={`/?user=${userNameParam}`} // Use actual user name in the href
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-row md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': isActive,
              },
            )}
          >
            <UserIcon className="w-6 h-6" />
            <span className="hidden md:block">{user.Name}</span>
          </Link>
        );
      })}
    </>
  );
}
