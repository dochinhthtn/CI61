import { getDataFromDoc } from "../utils.js";

export async function createConversation(users) {
    let response = await firebase.firestore().collection('conversations').add({
        users: users,
        messages: []
    });
    return response;
}

export async function getConversationById(id) {
    let response = await firebase.firestore().collection('conversations').doc(id).get();
    return getDataFromDoc(response);
}