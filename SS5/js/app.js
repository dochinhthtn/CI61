// Firebase authentication
/* 
    - Đăng kí: firebase.auth().createUserWithEmailAndPassword('email', 'password');
    - Đăng nhập: firebase.auth().signInWithEmailAndPassword('email', 'password');
    - Đăng xuất: firebase.auth().signOut();
    - Lấy ra người dùng hiện tại: firebase.auth().currentUser
    - Cập nhật thông tin cho người dùng hiện tại: firebase.auth().currentUser.updateProfile({...});
    - Thay đổi trạng thái người dùng: onAuthStateChanged
*/

// Firebase Cloud Firestore

// Create: chỉ tạo 1 document
function addUser(_name, _age, _address) {
    firebase.firestore().collection('users').add({
        name: _name,
        age: _age,
        address: _address
    });
}

// Read:
// Read 1 document by id
async function getUserById(_id) {
    // chỗ nào có promise -> có await -> function có async
    let response = await firebase.firestore().collection('users').doc(_id).get();
    console.log(response.data());
    return response.data();
}

// Read all documents in 1 collection
async function getAllUsers() {
    let response = await firebase.firestore().collection('users').get();

    for (let doc of response.docs) {
        let data = doc.data();
        data.id = doc.id;
        console.log(data);
    }
}

// Read documents in 1 collection with conditions
async function getUsersWithCondition() {
    // lấy ra users có age >= 30
    let response = await firebase.firestore().collection('users').where('age', '>=', 40).get();
    console.log(response.docs);
    for (let doc of response.docs) {
        let data = doc.data();
        data.id = doc.id;
        console.log(data);
    }
}