import InputWrapper from "./components/InputWrapper.js";
import RegisterForm from "./components/RegisterForm.js";
import LoginForm from "./components/LoginForm.js";

import AuthScreen from "./screens/AuthScreen.js";
import ChatScreen from "./screens/ChatScreen.js";

import "./router.js";

import { authStateChanged } from "./models/user.js";

authStateChanged((user) => {
    if(user != null) {
        router.navigate('/chat');
    } else {
        router.navigate('/auth');
    }
});