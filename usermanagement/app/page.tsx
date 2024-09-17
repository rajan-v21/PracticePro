"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import users from './userdetails.json';
import UserDetails from './users';
import EditUserDetails from './edituser';

interface HomeProps {
  selectedUser: string | null;
}

export default function Home({ selectedUser }: HomeProps) {
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [showProfile, setShowProfile] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      const userDetail = users.find((user) => user.ID === selectedUser);
      setUserDetails(userDetail);
    }
  }, [selectedUser]);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleToggleProfileView = () => {
    setShowProfile(true);
  };

  const handleToggleContactView = () => {
    setShowProfile(false);
  };

  const handleSave = (updatedDetails: any) => {
    setUserDetails(updatedDetails);
    setIsEditing(false);
    console.log('Updated user details:', updatedDetails);
    // Save the updated data to the server or state
  };

  if (!userDetails) {
    return <div>Select a user to see details.</div>;
  }

  return (
    <div className="p-1 md:p-12">
      <h3 className="text-2xl font-bold">{userDetails.Name} Details</h3><br/>      
      <div className="flex flex-col md:flex-row items-start gap-16">   
        <div className="flex flex-col space-y-4">
          <Button
            className="flex h-[48px] w-[200px] grow items-center justify-center gap-2 rounded-md bg-blue-500 text-white p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center md:p-2 md:px-3 my-4"
            onClick={handleToggleProfileView}
          >
            Profile
          </Button>
          <Button
            className="flex h-[48px] w-[200px] grow items-center justify-center gap-2 rounded-md bg-blue-500 text-white p-3 text-sm font-bold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center md:p-2 md:px-3 my-4"
            onClick={handleToggleContactView}
          >
            Contact
          </Button>
        </div>

        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            width: '60%',
          }}
        >
          {isEditing ? (
            <EditUserDetails
              userDetails={userDetails}
              showProfile={showProfile}
              onSave={handleSave}
            />
          ) : (
            <UserDetails
              userDetails={userDetails}
              showProfile={showProfile}
              onEditClick={handleToggleEdit}
            />
          )}
        </div>
      </div>
      </div>
  );
}
