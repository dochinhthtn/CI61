const $template = document.createElement('template');
$template.innerHTML = `
    <div class="main-menu">
        <div class="menu-item"><a href="./index.html">Home</a></div> 
        <div class="menu-item"><a href="./about.html">About</a></div>
        <div class="menu-item"><a href="./contact.html">Contact</a></div>
    </div>
`;

export default class MainMenu extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$menuItems = this.getElementsByClassName('menu-item'); // -> HTMLCollection ~ array
    }

    // khai báo thuộc tính cho thẻ
    static get observedAttributes() {
        return ['active'];
    }

    // chạy khi giá trị của thuộc tính thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        // console.log("Thuộc tính " + attrName + " có giá trị là: " + newValue);
        if(attrName == 'active') {
            // xóa class highlight ở tất cả phần tử menu-item
            for(let $menuItem of this.$menuItems) {
                $menuItem.classList.remove('highlight');
            }

            // thêm class highlight vào phần tử menu-item chỉ định
            this.$menuItems[newValue]?.classList.add('highlight');

        }
    }
}

window.customElements.define('main-menu', MainMenu);