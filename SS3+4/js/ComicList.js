import ComicContainer from "./ComicContainer.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="comic-list"></div>
`;

export default class ComicList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$list = this.querySelector(".comic-list");
    }

    static get observedAttributes() {
        return ['comics'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'comics') {
            let data = JSON.parse(newValue);

            for (let comic of data) {
                let $comicContainer = new ComicContainer();
                $comicContainer.setAttribute('name', comic.name);
                $comicContainer.setAttribute('description', comic.description);
                $comicContainer.setAttribute('author', comic.author);
                $comicContainer.setAttribute('lastest-release', comic.lastestRelease);
                $comicContainer.setAttribute('chapters', comic.chapters);
                $comicContainer.setAttribute('comments', comic.comments);
                $comicContainer.setAttribute('category', comic.category);
                $comicContainer.setAttribute('image', comic.image);

                this.$list.appendChild($comicContainer);
            }
        }
    }
}

window.customElements.define('comic-list', ComicList);