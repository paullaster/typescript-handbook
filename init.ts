function greeter(person: string, date: Date)
{
    console.log(`Hello ${person}, today is ${date.getFullYear()}`);
}

let myName = "james";

greeter("myName", new Date());

let myList: number[] = [1,2,3,4 ];