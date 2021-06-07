export default class Person {
    name;
    phoneNumber;
    position = {
        x: 0,
        y: 0
    };

    constructor(name, phoneNumber, position) {
        this.name = name;
        this.phoneNumber = phoneNumber;

        // check position
        this.position = position;
    }

    distance(person) {
        if(person instanceof Person) {
            return Math.sqrt( (this.position.x - person.position.x) ** 2 + (this.position.y - person.position.y) ** 2);
        }
        
        throw new Error("Invalid person");
    }
}