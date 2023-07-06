const os =require("os")
const info=require("./nameinfo")
const ageCalucate=require("./age");


console.log(os.type());
console.log(os.version());
console.log(__dirname);
console.log(__filename);



console.log("My Name is "+info.name("Mohammad")+ " My Age : "+info.age("30"));
console.log(ageCalucate.age(1993,9,16));