import React, {
  useState,
  useEffect,
  SyntheticEvent
} from "react";
import { useState as useHookState } from "@hookstate/core";

import BasicLayout from "components/layouts/BasicLayout";

import UserCard from "components/organisms/UserCard";

import Button from "components/atoms/Button";
import TextInput from "components/atoms/TextInput";

import UserModel, { UserModelUpdate } from "model/UserModel";

import FauxAPI from "api/FauxAPI";

import {
  StyledUserListContainer,
  StyledLoadMoreWrapper,
  StyledUserList,
  StyledUserListItem
} from "./style";

const UserListView = () => {
  const userState = useHookState<UserModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  useEffect(() => {
    const userData = FauxAPI.getUsers();
    userState.set(userData);
  }, []);

  const handleSearch = (event: SyntheticEvent) => {
    const newValue = (event.target as HTMLInputElement).value;
    setSearchTerm(newValue);
  };

  const userListSearch = (
    <div>
      <TextInput
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );

  const header = {
    title: 'Users list',
    right: userListSearch
  };

  const handleLoadMore = () => {
    console.log('clicked!');
  };

  const users: UserModel[] = userState.get();

  const handleEditUser = (id: string, data: UserModelUpdate) => {
    const userIdx = users.findIndex(user => user.id === id);
    userState[userIdx].set(user => ({
      ...user,
      ...data,
      updatedAt: new Date().toISOString()
    }));
    const newUsers = userState.get();
    FauxAPI.setUsers(newUsers);
  };

  let displayedUsers = users;
  if (searchTerm) {
    displayedUsers = users.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div>
      <BasicLayout
        header={header}
      >
        <StyledUserListContainer>
          <StyledUserList>
            {
              displayedUsers.map((user) => {
                return (
                  <StyledUserListItem key={user.id}>
                    <UserCard
                      user={user}
                      onUpdate={handleEditUser}
                    />
                  </StyledUserListItem>
                );
              })
            }
          </StyledUserList>
        </StyledUserListContainer>
        <StyledLoadMoreWrapper>
          <Button onClick={handleLoadMore}>
            Load More
          </Button>
        </StyledLoadMoreWrapper>
      </BasicLayout>
    </div>
  );
};


export default UserListView;
