import { dbRef } from '../firebase';

import { GET_USERS, REGISTER_USER } from "./types";

const userRef = dbRef.ref().child("users");


export const getUsers = () => async dispatch => {
    userRef.on('value', snapshot => {

        let newUsers = [];
        let users = snapshot.val();
        for (let user in users) {
            newUsers.push({
                id: user,
                firstName: users[user].firstName,
                lastName: users[user].lastName,
                age: users[user].age,
                birthDate: users[user].birthDate,
                hobby: users[user].hobby
                  
            });
        }

        var result = {
            type: GET_USERS,
            payload: newUsers
        };
        dispatch(result);
    });
}

export const registerUser = newUser => async dispatch => {
     userRef.push().set(newUser);
};