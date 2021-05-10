class Parent {
    constructor(){
        this.fatherName = "Smith";
        this.motherName = "Luies";

    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
} 

const baby = new Child("Hery");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);