import UserModel from "model/UserModel";

class FauxAPI {
  static getUsers() {
    const rawUserData = window.localStorage.getItem('usersData');

    if (rawUserData) {
      return JSON.parse(rawUserData);
    }

    return [];
  }

  static setUsers(users: UserModel[]) {
    console.log(users);
    const serializedUsers = JSON.stringify(users);
    console.log(serializedUsers);
    window.localStorage.setItem('usersData', serializedUsers);
  }
}

export default FauxAPI;
