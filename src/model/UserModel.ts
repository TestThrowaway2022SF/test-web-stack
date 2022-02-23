
interface UserModel {
  id: string; // user unique ID
  name: string; // user name
  dob: string; // date of birth
  address: string; // user address
  description?: string; // user description
  createdAt: string; // user created date
  updatedAt: string; // user updated date
  avatar?: string; // user avatar image url
}

export type UserModelUpdate = Pick<UserModel, 'name' | 'address' | 'description'>;

export default UserModel;
