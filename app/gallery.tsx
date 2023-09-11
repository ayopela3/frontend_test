"use client";

import { useState } from "react";
import Avatar from "boring-avatars";

import { User } from "./types/user";
import ControlledList from "./component/ControlledList";
import ModalDisplay from "./component/ModalDisplay";

export type GalleryProps = {
  users: User[];
};
const Gallery = ({ users }: GalleryProps) => {
  const [usersList, setUsersList] = useState(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (id: number) => {
    const user = usersList.find((item) => item.id === id) || null;

    if(user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="user-gallery">
      <ControlledList users={usersList} title={'Users'} 
        handleModalOpen={handleModalOpen} />
        <ModalDisplay 
          isModalOpen={isModalOpen} 
          handleModalClose={handleModalClose} 
          selectedUser={selectedUser} 
        />
    </div>
  );
};

export default Gallery;
