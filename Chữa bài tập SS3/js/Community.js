import Person from "./Person.js";

export default class Community {
    people;
    f0;
    f1;

    constructor() {
        this.people = [];
        this.f0 = null;
        this.f1 = [];
    }

    addPerson(person) {
        if (person instanceof Person) {
            this.people.push(person);
        }
    }

    setInfected(phoneNumber) {
        let foundPerson = this.people.find(function (person) {
            return person.phoneNumber == phoneNumber;
        });

        if (foundPerson) {
            let result = this.getNearPeople(foundPerson);
            console.log(result);
        }
    }

    getNearPeople(person) {
        if (!(person instanceof Person)) return null;

        // C1
        // for (let p of this.people) {
        //     if (p.phoneNumber == person.phoneNumber) continue;
        //     let distance = person.distance(p);
        //     if(distance < 2) this.f1.push(p);
        // }

        // C2: filter
        this.f1 = this.people.filter(function (p) {
            let distance = person.distance(p);
            return distance < 2 && p.phoneNumber != person.phoneNumber;
        });

        return this.f1;
    }
}