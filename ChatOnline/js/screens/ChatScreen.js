const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <h1>Welcome to chat screen</h1>
    </div>
`;

export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('chat-screen', ChatScreen);