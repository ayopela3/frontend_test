import Modal from "@/app/modal";
import { User } from "@/app/types/user";
import Avatar from "boring-avatars";
import { FC } from "react";
import { FaRegCircleXmark, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

interface ModalDisplayProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
  selectedUser: User | null;
}

const ModalDisplay: FC<ModalDisplayProps> = ({isModalOpen, handleModalClose, selectedUser}) => {
return (
  <>
     <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="user-panel">
          <div className="header">
            <div
              role="button"
              tabIndex={0}
              className="close"
              onClick={handleModalClose}
            >
              <FaRegCircleXmark size={32} />
            </div>
          </div>
          <div className="body">
            {selectedUser && (
              <div className="user-info info">
                <div className="avatar">
                  <Avatar
                    size={240}
                    name={selectedUser.name}
                    variant="marble"
                    colors={[
                      "#92A1C6",
                      "#146A7C",
                      "#F0AB3D",
                      "#C271B4",
                      "#C20D90",
                    ]}
                  />
                </div>
                <div className="name">
                  {selectedUser.name} ({selectedUser.username})
                </div>
                <div className="field">
                  <FaLocationDot className="icon" />
                  <div className="value">{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}`}</div>
                </div>
                <div className="field">
                  <FaPhone className="icon" />
                  <div className="value">{selectedUser.phone}</div>
                </div>
                <div className="field">
                  <FaEnvelope className="icon" />
                  <div className="value">{selectedUser.email}</div>
                </div>
                <div className="company">
                  <div className="name">{selectedUser.company.name}</div>
                  <div className="catchphrase">
                    {selectedUser.company.catchPhrase}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
  </>
  );
};

export default ModalDisplay;
