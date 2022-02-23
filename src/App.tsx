import React, { useEffect, useState } from "react";

import UserListView from "views/UserListView";
import Modal from "components/molecules/Modal";
import ModalContext from "contexts/ModalContext";
import useModal from "hooks/useModal";

import FauxAPI from "api/FauxAPI";
import defaultUsers from "data/users";


const App = () => {
  const modalConfig = useModal({
    isOpen: false,
    content: null
  });

  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const rawUsersData = window.localStorage.getItem('usersData');

    if (!rawUsersData) {
      FauxAPI.setUsers(defaultUsers);
    }

    setReady(true);
  }, [setReady]);

  return (
    <ModalContext.Provider value={modalConfig}>
      <div>
        {
          ready ? (
            <UserListView />
          ) : (
            <div>
              Initialing...
            </div>
          )
        }
        <Modal
          isOpen={modalConfig.isOpen}
          onClose={modalConfig.close}
        >
          { modalConfig.content }
        </Modal>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
