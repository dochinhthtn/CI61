export async function register(name, email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
        displayName: name
    });

} 