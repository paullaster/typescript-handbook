function greeter(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.getFullYear()));
}
var myName = "james";
greeter("myName", new Date());
var myList = [1, 2, 3, 4];
