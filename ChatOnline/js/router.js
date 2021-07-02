var root = null;
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router.on('/home', function () {
    document.getElementById('app').innerHTML = ("Bạn đang ở trang homepage");
}).resolve();

router.on('/about', function () {
    document.getElementById('app').innerHTML = ("Bạn đang ở trang about");
}).resolve();

router.on('/contact', function () {
    document.getElementById('app').innerHTML = ("Bạn đang ở trang contact");
}).resolve();

router.on('/auth', function () {
    document.getElementById('app').innerHTML = '<auth-screen></auth-screen>';
}).resolve();

router.on('/chat', function () {
    let currentUser = firebase.auth().currentUser;
    if(currentUser == null) {
        router.navigate('/auth');
        return;
    }

    document.getElementById('app').innerHTML = '<chat-screen></chat-screen>';
}).resolve();


window.router = router;

