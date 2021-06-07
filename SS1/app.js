let $no = document.getElementById('no');
let $answers = document.getElementById('answers');

let count = 0;

$no.addEventListener('mouseenter', function () {
    $answers.classList.toggle('reverse');
    count++;
    if (count > 5) {
        $answers.remove();
    }
});

import someFunction, { helloByVietnamese, helloByLaos } from "./hello.js";


