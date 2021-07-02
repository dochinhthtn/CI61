const $template = document.createElement('template');
$template.innerHTML = `
    <div class="message-list">
        <message-container content="Ăn cơm chưa" owned="true"></message-container>
        <message-container content="Rồi" owned="false"></message-container>
        <message-container content="Ăn cơm với gì" owned="true"></message-container>
        <message-container content="Ăn cơm với rau muống :D" owned="false"></message-container>
    </div>
`;

export default class MessageList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['messages'];
    }
}

window.customElements.define('message-list', MessageList);