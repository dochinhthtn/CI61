import { listenCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-stat></app-stat>
            <user-actions></user-actions>
        </div>

        <div class="chat-container">
        
        </div>
    </div>
`;

export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$userActions = this.querySelector('user-actions');
    }

    connectedCallback() {
        listenCurrentUser((user) => {
            this.$userActions.setAttribute('status', user.status);
        });
    }
}

window.customElements.define('chat-screen', ChatScreen);