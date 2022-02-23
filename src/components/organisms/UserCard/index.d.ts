import UserModel, { UserModelUpdate } from "model/UserModel";


export interface UserCardProps {
  user: UserModel;
  onUpdate: (id: string, data: UserModelUpdate) => any;
}
