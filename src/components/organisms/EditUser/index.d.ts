import React from 'react';
import UserModel, { UserModelUpdate } from "model/UserModel";

export interface EditUserProps {
  user: UserModel;
  onSubmit: (id: string, data: UserModelUpdate) => any;
  onCancel: (any?) => any;
}

declare const EditUser: React.SFC<EditUserProps>;

export default EditUser;
