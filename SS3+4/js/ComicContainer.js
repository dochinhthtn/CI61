const $template = document.createElement('template');
$template.innerHTML = `
    <div class="comic-container">

        <div class="comic-info">
            <img class="comic-image" src="https://tuhoconline.net/wp-content/uploads/na-ni-la-gi.jpg" alt="">
            <div style="width: 100%;">
                <div class="comic-name">Ối dồi ôi</div>
                <div class="comic-description">"Ối dồi ôi" Huấn Rose said</div>
            </div>
        </div>
        
        <div class="comic-detail">
            <div class="comic-author">Ối dồi ôi</div>
            <div class="comic-lastest-release">2021/06/04</div>
            <div class="comic-chapters">10 chapters</div>
            <div class="comic-comments">50 comments</div>
            <div class="comic-category">Bất ngờ chưa 😁</div>
        </div>

    </div>
`;

export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$name = this.querySelector('.comic-name'); // trả về 1 Node
        this.$description = this.querySelector('.comic-description');
        this.$author = this.querySelector('.comic-author');
        this.$lastestRelease = this.querySelector('.comic-lastest-release');
        this.$chapters = this.querySelector('.comic-chapters');
        this.$comments = this.querySelector('.comic-comments');
        this.$category = this.querySelector('.comic-category');
        this.$image = this.querySelector('.comic-image');
        
        // khác nhau giữa NodeList, Node vs HTMLCollection, HTMLElement
    }

    // khai báo thuộc tính
    static get observedAttributes() {
        return ['image', 'name', 'description', 'author', 'lastest-release', 'chapters', 'comments', 'category'];
    }

    // chạy khi mà giá trị thuộc tính thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if (attrName == 'description') {
            this.$description.innerHTML = newValue;
        } else if (attrName == 'author') {
            this.$author.innerHTML = newValue;
        } else if (attrName == 'lastest-release') {
            this.$lastestRelease.innerHTML = newValue;
        } else if (attrName == 'chapters') {
            this.$chapters.innerHTML = newValue + " chapters";
        } else if (attrName == 'comments') {
            this.$comments.innerHTML = newValue + " comments";
        } else if (attrName == 'category') {
            this.$category.innerHTML = newValue;
        } else if (attrName == 'image') {
            this.$image.src = newValue;
        }
    }

    connectedCallback() {
        console.log("lần đầu xuất hiện");
    }

    disconnectedCallback() {
        console.log("bay màu 😐");
    }

    // component lifecycle 
}

window.customElements.define('comic-container', ComicContainer);