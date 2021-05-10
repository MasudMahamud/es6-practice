class Student {
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.college = "Dhaka college"
    }
}

const student1 = new Student(1, "Rahim");
const student2 = new Student(2, "Rohima");
console.log(student1,student2);