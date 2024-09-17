import React, { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';

interface EditUserDetailsProps {
  userDetails: any;
  showProfile: boolean;
  onSave: (updatedDetails: any) => void;
}

export default function EditUserDetails({
  userDetails,
  showProfile,
  onSave,
}: EditUserDetailsProps) {
  const [editableDetails, setEditableDetails] = useState(userDetails);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableDetails((prevDetails: any) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      {showProfile ? (
        <>
          <p>
            <strong>Name:</strong> 
            <input
              type="text"
              name="Name"
              value={editableDetails.Name}
              onChange={handleInputChange}
              className="border p-1 ml-2"
            />
          </p><br/>
          <p>
            <strong>DOB:</strong> 
            <input
              type="text"
              name="DOB"
              value={editableDetails.DOB}
              onChange={handleInputChange}
              className="border p-1 ml-2"
            />
          </p><br/>
          <p>
            <strong>Address:</strong> 
            <input
              type="text"
              name="Address"
              value={editableDetails.Address}
              onChange={handleInputChange}
              className="border p-1 ml-2"
            />
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Email:</strong> 
            <input
              type="text"
              name="Email"
              value={editableDetails.Email}
              onChange={handleInputChange}
              className="border p-1 ml-2"
            />
          </p><br/>
          <p>
            <strong>Number:</strong> 
            <input
              type="text"
              name="Number"
              value={editableDetails.Number}
              onChange={handleInputChange}
              className="border p-1 ml-2"
            />
          </p>
        </>
      )}

      <Button
        className="flex h-[36px] w-[100px] grow items-center justify-center gap-2 rounded-md bg-green-500 text-white p-3 text-sm font-bold hover:bg-green-600 md:flex-none md:justify-center md:p-2 md:px-3 my-4"
        onClick={() => onSave(editableDetails)}
      >
        Save
      </Button>
    </div>
  );
}
