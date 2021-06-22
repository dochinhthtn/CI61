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
    }
}

window.customElements.define('chat-screen', ChatScreen);