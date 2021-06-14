// callback: function truyền vào trong function khác thông qua tham số

function word() {
    return "Very lú";
}

function hello(cb) {
    // cb = "very lú"
    // cb() 
    console.log(cb());
}

hello(word); // Very lú

hello(function() {
    return true;
}); // 

hello(word()); // <=> hello("Very lú")

function secretCalculator(number) {
    return number ** 2;
}

function calculateSomething(calc) {
    // calc = function(n) {
    //     return 10 - n;
    // }
    let number = 10;
    // calc(10) <=> secretCalculator(10)
    console.log(calc(number));
}

// calculateSomething(secretCalculator);
calculateSomething(function(n) {
    return 10 - n;
});