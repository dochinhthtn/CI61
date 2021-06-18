import { login } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <form class="login-form">
        <h2>Login to your account</h2>
        <div class="login-text">Em ăn cơm với rau gì đấy 😎</div>
        <input-wrapper class="email" placeholder="Email" type="email" error=""></input-wrapper>
        <input-wrapper class="password" placeholder="Password" type="password" error=""></input-wrapper>
        <button class="login-btn">Login</button>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$form = this.querySelector('.login-form');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
    }

    connectedCallback() {
        this.$form.onsubmit = async (event) => {
            event.preventDefault();

            let email = this.$email.value;
            let password = this.$password.value;

            let isPassed = this.$email.validate((value) => value != '', "Invalid email") 
                & this.$password.validate((value) => value != '', "Invalid password");

            if (isPassed) {
                // gọi login chỗ này
                try {
                    await login(email, password);
                    console.log("Login successfully");
                } catch(error) {
                    alert(error.message);
                }
            }
        }
    }
}

window.customElements.define('login-form', LoginForm);