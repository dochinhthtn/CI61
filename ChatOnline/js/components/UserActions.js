import { updateCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="user-actions">
        <div class="status-free">
            <button class="action-btn flirt-btn">Let's flirt</button>
            <button class="action-btn bite-btn">Bite</button>
        </div>

        <div class="status-flirting">
            <button class="action-btn stop-flirting-btn">Stop Flirting</button>
        </div>

        <div class="status-chatting">
            <button class="action-btn end-conversation-btn">End conversation</button>
        </div>
    </div>
`;

export default class UserActions extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$flirtBtn = this.querySelector('.flirt-btn');
        this.$biteBtn = this.querySelector('.bite-btn');
        this.$stopFlirtingBtn = this.querySelector('.stop-flirting-btn');
        this.$endConversationBtn = this.querySelector('.end-conversation-btn');
    }

    connectedCallback() {
        this.$flirtBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'flirting' });
        });

        this.$biteBtn.addEventListener('click', () => {
            // chỌn ngẫu nhiên

            // ghép đôi
            updateCurrentUser({ status: 'chatting' });
        });

        this.$stopFlirtingBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'free' });
        });

        this.$endConversationBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'free', currentConversation: '' });
        });

    }
}

window.customElements.define('user-actions', UserActions);