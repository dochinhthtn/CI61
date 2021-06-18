import { register } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <form class="register-form">
        <h2>Create an account</h2>
        <div class="register-text">Em ăn cơm chưa 😁</div>
        <input-wrapper class="name" placeholder="Name" type="text" error=""></input-wrapper>
        <input-wrapper class="email" placeholder="Email" type="email" error=""></input-wrapper>
        <input-wrapper class="password" placeholder="Password" type="password" error=""></input-wrapper>
        <input-wrapper class="password-confirmation" placeholder="Password confirmation" type="password" error=""></input-wrapper>
        <button class="register-btn">Register</button>
    </form>
`;

export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$form = this.querySelector('.register-form');

        this.$name = this.querySelector('.name');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
        this.$passwordConfirmation = this.querySelector('.password-confirmation');
    }

    connectedCallback() {
        this.$form.onsubmit = async (event) => {
            event.preventDefault();
            // console.log("Register 😎");
            let name = this.$name.value;
            let email = this.$email.value;
            let password = this.$password.value;
            let passwordConfirmation = this.$passwordConfirmation.value;

            // callback
            let isPassed = this.$name.validate((value) => {
                return value != '';
            }, "Invalid name") &

                this.$email.validate((value) => {
                    return value != ''
                }, "Invalid email") &

                this.$password.validate((value) => {
                    return value != ''
                }, "Invalid password") &

                this.$passwordConfirmation.validate((value) => {
                    return value != '' && value == password;
                }, "Invalid passsword confirmation");

            if (isPassed) {

                try {
                    await register(name, email, password); // khả năng sinh lỗi
                    alert('Register successfully');
                } catch(error) {
                    // xử lý lỗi
                    alert(error.message);
                }
                // console.log(res);
                console.log("This code must be executed");
            }
        }
    }

}

window.customElements.define('register-form', RegisterForm);