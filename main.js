#!/usr/bin/env node
// Define a class for Student
class Student {
    // Properties
    name = "Humna sehar";
    age = 17;
    grade = "12";
    // Constructor
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    // Method to display student information
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
// Create a student object
let student1 = new Student("Humna Sehar", 17, "12"); // Changed the name to "Humna Sehar" and corrected the grade to "12"
// Call the displayInfo method to display student information
student1.displayInfo();
export {};
