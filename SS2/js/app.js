// Viết chương trình quản lý thành viên trong gia đình
// Dữ liệu: thành viên trong gia đình: tên, tuổi, giới tính, vị trí trong gia đình, ăn, ngủ, đi chơi

// class Person {
//     name;
//     age;
//     sex;
//     role;

//     constructor(_name, _age, _sex, _role) {
//         this.name = _name;
//         this.age = _age;
//         this.sex = _sex;
//         this.role = _role;
//     }

//     eat() {
//         console.log("ăn gì đó");
//     }

//     sleep() {
//         console.log("ngủ quá giờ trưa 😂");
//     }

//     play(game) {
//         console.log("chơi " + game + " quá 180 phút 😑");
//     }

//     introduce() {
//         console.log(`
//             Xin chào, tên tôi là ${this.name}
//             Năm nay tôi ${this.age} tuổi
//             Tôi là ${this.role} trong gia đình
//         `);
//     }
// }



// let mother = new Person("Móm mì", 45, "Female", "mother");

// hãy tạo 1 class và cho ví dụ 3 object tương ứng
// Pet: name, age, species, furColor, legs, sleep(), play()

// class Boy extends Person {
//     handsome;

//     constructor(name, age, role, handsome) {
//         super(name, age, 'male', role);
//         this.handsome = handsome;
//     }

//     racing(speed) {
//         console.log("Đi với tốc độ " + speed);
//     }
// }

// let badboi = new Boy("bét boi", 20, 'very bad boy', 11);
// console.log(badboi);
// badboi.play("Far cry 4 😂");

// let father = new Person("Đát đì", 50, "Male", "father");

class Person {
    name;
    age;
    favorites;

    constructor(name, age, favorites) {
        this.name = name;
        this.age = age;
        this.favorites = favorites;
    }

    eat() {

    }

    sleep() {

    }
}

class Boy extends Person {
    handsome;
    girlFriend;

    constructor(name, age, favorites, handsome, girlFriend) {
        super(name, age, favorites);
        this.handsome = handsome;
        this.girlFriend = girlFriend;
    }

    cook() { }
    work() { }

    setGirlFriend(girlFriend) {
        if(girlFriend instanceof Girl) {
            this.girlFriend = girlFriend;
        } else {
            console.log("Truyền tham số điêu");
        }
    }
}

class Girl extends Person {
    beauty;
    boyFriend;
    constructor(name, age, favorites, beauty, boyFriend) {
        super(name, age, favorites);
        this.beauty = beauty;
        this.boyFriend = boyFriend;
    }

    cook() { }
    shopping() { }

    setBoyFriend(boyFriend) {
        if(boyFriend instanceof Boy) {
            this.boyFriend = boyFriend;
        } else {
            console.log("Truyền tham số điêu");
        }
    }
}

class GoodBoy extends Boy {
    good;
    constructor(name, age, favorites, handsome, girlFriend, good) {
        super(name, age, favorites, handsome, girlFriend);
        this.good = good;
    }

    doSomething() { }
}

class BadBoy extends Boy {
    bad;
    constructor(name, age, favorites, handsome, girlFriend, bad) {
        super(name, age, favorites, handsome, girlFriend);
        this.bad = bad;
    }

    racing(speed) { }
}

class GoodGirl extends Girl {
    timeAtHome;
    constructor(name, age, favorites, beauty, boyFriend, timeAtHome) {
        super(name, age, favorites, beauty, boyFriend);
        this.timeAtHome = timeAtHome;
    }
}

class PlayGirl extends Girl {
    playWhat;
    constructor(name, age, favorites, beauty, boyFriend, playWhat) {
        super(name, age, favorites, beauty, boyFriend);
        this.playWhat = playWhat;
    }    
}

// let gb1 = new GoodBoy("Gút boi 1", 20, ['em ăn cơm chưa'], 10, null, 11);
// let pg1 = new PlayGirl("Pờ lây gơn", 21, ['chơi quá 180 phút'], 8, null, 'PUBG');

// gb1.setGirlFriend(pg1);

// pg1.setBoyFriend(gb1);

// console.log(gb1);

// getter và setter

class Human {
    firstName;
    lastName;
    age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set Age(age, blabla) {
        if(age > 0 && age < 100) {
            this.age = age;
        } else {
            console.log("Điêu");
        }
    }
}

let hooman = new Human('Để', 'Mai Tính', 25);
console.log(hooman.fullName);
hooman.Age = -1;

console.log(hooman.age);



