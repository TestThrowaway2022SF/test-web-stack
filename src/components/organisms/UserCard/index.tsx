import React, { useContext } from "react";
import dayjs from "dayjs";

import { UserCardProps } from "./index.d";

import EditUser from "components/organisms/EditUser";
import IconEdit from "components/icons/Edit";

import ModalContext from "contexts/ModalContext";

import { UserModelUpdate } from "model/UserModel";

import {
  StyledUserCard,
  StyledUserCardAvatar,
  StyledUserCardInfo,
  StyledUserCardDesc,
  StyledUserCardContent,
  StyledUserCardEdit
} from "./style";


const generateRandom = () => {
  return Math.floor(Math.random()*100);
};


const UserCard = (props: UserCardProps) => {
  const { user, onUpdate } = props;

  const modalContext = useContext(ModalContext);

  console.log(user.createdAt);

  const createdAtFormatted = dayjs(user.createdAt).format('DD MMM YYYY');

  const handleSaveUser = (id: string, data: UserModelUpdate) => {
    onUpdate(user.id, data);
    modalContext?.close();
  };

  const handleEdit = async () => {
    modalContext?.show(
      <EditUser
        key={user.id}
        user={user}
        onSubmit={handleSaveUser}
        onCancel={modalContext?.close}
      />
    );
  }

  return (
    <StyledUserCard allowHover={true}>
      <StyledUserCardContent>
        <StyledUserCardAvatar>
          <img
            src={`https://source.unsplash.com/random/300x300?sig=${generateRandom()}`}
            alt={`Avatar for ${user.name}`}
          />
        </StyledUserCardAvatar>
        <StyledUserCardInfo>
          <h2>{ user.name }</h2>
          <p>
            created <span>{ createdAtFormatted }</span>
          </p>
        </StyledUserCardInfo>
        <StyledUserCardDesc>
          <p title={user.description}>
            { user.description }
          </p>
        </StyledUserCardDesc>
      </StyledUserCardContent>
      <StyledUserCardEdit
        onClick={handleEdit}
      >
        <IconEdit />
      </StyledUserCardEdit>
    </StyledUserCard>
  );
};


export default UserCard;
