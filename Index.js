const student = require('./StudentInfo');
const Person = require('./Person');
const os = require('os');
const util = require('util');

console.log("Student Name: " + student.getName());
console.log(student.location());
console.log(student.dob);
console.log("Grade: " + student.studentGrade(55));

const person1 = new Person("Jim", 30, "myemail@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo());

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + ", Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Memory: " + (os.totalmem() / 1e9) + " GB");
console.log("Free: " + (os.freemem() / 1e9) + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
