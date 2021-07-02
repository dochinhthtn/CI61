import { createConversation, getConversationById } from "../models/conversation.js";
import { getFlirtingUsers, updateCurrentUser, updateUser } from "../models/user.js";

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

        this.$statusFree = this.querySelector('.status-free');
        this.$statusFlirting = this.querySelector('.status-flirting');
        this.$statusChatting = this.querySelector('.status-chatting');

        this.$flirtBtn = this.querySelector('.flirt-btn');
        this.$biteBtn = this.querySelector('.bite-btn');
        this.$stopFlirtingBtn = this.querySelector('.stop-flirting-btn');
        this.$endConversationBtn = this.querySelector('.end-conversation-btn');

        this.randomUser = null;
    }

    static get observedAttributes() {
        return ['status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'status') {
            this.$statusFree.style.display = 'none';
            this.$statusFlirting.style.display = 'none';
            this.$statusChatting.style.display = 'none';

            if(newValue == 'free') {
                this.$statusFree.style.display = 'block';
            } else if(newValue == 'flirting') {
                this.$statusFlirting.style.display = 'block';
            } else if(newValue == 'chatting') {
                this.$statusChatting.style.display = 'block';
            }
        }
    }

    connectedCallback() {
        this.$flirtBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'flirting' });
        });

        this.$biteBtn.addEventListener('click', async () => {
            // lấy toàn bộ flirting users
            let flirtingUsers = await getFlirtingUsers();
            
            if(flirtingUsers.length == 0) {
                alert("There are no flirting users");
                return;
            }

            // chọn ngẫu nhiên
            // random 1 số: lớn hơn hoặc bằng 0 và bé hơn chiều dài của mảng
            let randomIndex = Math.floor(Math.random() * flirtingUsers.length);
            let randomUser = flirtingUsers[randomIndex];

            this.saveRandomUser(randomUser.id);

            let currentUser = firebase.auth().currentUser;
            // ghép đôi

            // tạo 1 conversation
            let newConversation = await createConversation([currentUser.uid, randomUser.id]);
            // console.log(newConversation);

            updateCurrentUser({ status: 'chatting', currentConversation: newConversation.id });
            updateUser(randomUser.id, { status: 'chatting', currentConversation: newConversation.id });
        });

        this.$stopFlirtingBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'free' });
        });

        this.$endConversationBtn.addEventListener('click', () => {
            updateCurrentUser({ status: 'free', currentConversation: '' });
            let randomUserId = this.getRandomUser();
            updateUser(randomUserId, { status: 'free', currentConversation: '' });
            
            // let conversation = await getConversationById();

        });

    }

    saveRandomUser(userId) {
        localStorage.setItem('random-user-id', userId);
    }

    getRandomUser() {
        return localStorage.getItem('random-user-id');
    }
}

window.customElements.define('user-actions', UserActions);