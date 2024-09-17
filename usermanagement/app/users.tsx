import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

interface UserDetailsProps {
  userDetails: any;
  showProfile: boolean;
  onEditClick: () => void;
}

export default function UserDetails({
  userDetails,
  showProfile,
  onEditClick,
}: UserDetailsProps) {
  return (
    <div>
      {showProfile ? (
        <>
          <p>
            <strong>Name:</strong> {userDetails.Name}
          </p><br/>
          <p>
            <strong>DOB:</strong> {userDetails.DOB}
          </p><br/>
          <p>
            <strong>Address:</strong> {userDetails.Address}
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Email:</strong> {userDetails.Email}
          </p><br/>
          <p>
            <strong>Number:</strong> {userDetails.Number}
          </p>
        </>
      )}

      <Button
        className="flex h-[36px] w-[100px] grow items-center justify-center gap-2 rounded-md bg-yellow-500 text-white p-3 text-sm font-bold hover:bg-yellow-600  md:flex-none md:justify-center md:p-2 md:px-3 my-4"
        onClick={onEditClick}
      >
        Edit
      </Button>
    </div>
  );
}
