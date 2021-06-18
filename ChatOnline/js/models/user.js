export async function register(name, email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password); // có khả năng sinh lỗi -> email đã được sử dụng
    await firebase.auth().currentUser.updateProfile({
        displayName: name
    });

    // lưu document với id là uid của user

    // await firebase.firestore().collection('users').add({ // tự sinh id cho document: auto generate id
    //     name: name,
    //     status: 'free',
    //     currentConversation: ''
    // });
    // lấy ra uid của người dùng và gán cho document
    let docId = firebase.auth().currentUser.uid;
    // set = add || update
    await firebase.firestore().collection('users').doc(docId).set({ // manual generate id
        name: name,
        status: 'free',
        currentConversation: ''
    });

}

export async function login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
}

export function authStateChanged(callback) {
    // đăng kí, đăng nhập, đăng xuất
    firebase.auth().onAuthStateChanged((user) => {
        callback(user);
    });
}