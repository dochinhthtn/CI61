import { listenCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-stat></app-stat>
            <user-actions></user-actions>
        </div>

        <div class="chat-container">
            <message-list></message-list>
        </div>
    </div>
`;

let messages = [
    {content: 'hello', owned: true},
    {content: 'hi', owned: false},
    {content: 'what is your name?', owned: true},
    {content: 'My name is You', owned: false},
];

export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$userActions = this.querySelector('user-actions');
        this.$messageList = this.querySelector('message-list');
    }

    connectedCallback() {
        listenCurrentUser((user) => {
            console.log(user);
            this.$userActions.setAttribute('status', user.status);
            this.$userActions.setAttribute('conversation-id', user.currentConversation);
        });

        this.$messageList.setAttribute('messages', JSON.stringify(messages));
    }
}

window.customElements.define('chat-screen', ChatScreen);