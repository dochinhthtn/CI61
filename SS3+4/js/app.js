import MainMenu from "./MainMenu.js";
import ComicContainer from "./ComicContainer.js";
import ComicList from "./ComicList.js";

import data from "./fakeData.js";

console.log(data);

let $app = document.querySelector("#app");

// Tạo object - ComicList
let $comicList = new ComicList();
// Truyền data vào ComicList?
// Kiểu dữ liệu của thuộc tính -> string
$comicList.setAttribute('comics', JSON.stringify(data));

$app.appendChild($comicList);

// for (let comic of data) {
//     let $comicContainer = new ComicContainer();
//     $comicContainer.setAttribute('name', comic.name);   
//     $comicContainer.setAttribute('description', comic.description);   
//     $comicContainer.setAttribute('author', comic.author);   
//     $comicContainer.setAttribute('lastest-release', comic.lastestRelease);   
//     $comicContainer.setAttribute('chapters', comic.chapters);   
//     $comicContainer.setAttribute('comments', comic.comments);   
//     $comicContainer.setAttribute('category', comic.category);   
//     $comicContainer.setAttribute('image', comic.image);  

//     $app.appendChild($comicContainer);
// }