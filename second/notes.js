
const obj = {
    fn: function(){
        console.log(this) //calling 
    },
    fn2 : () => {
        console.log(this)  //calling 
    }
}
obj.fn()  //will give fn1 function --refers obj object  --as called normally
obj.fn2() //will give window object  --refers as window due to arrow function -- called in arrow function 

const person1 = {
    name: "akshay",
    print: function(){
        console.log(this)
    }
}

const person2 = {
    name: "Simran"
}

// function x () {
//     console.log(this)
// }
// x(); //gives window 
// x.call(this)  //gives window
// x.call(person1)  //gives akshay
// x.call(person2)  //gives simran

person1.print()  //gives akshay normal fucntion output 
person1.print.call()   //gives window object
person1.print.call(this) //window object id returned -- tells what a this should be 
person1.print.call(person2) //gives simran as an answer

Function.prototype.call()

const obj2 = {
    name: "Akshay",
    print: ( ) => {
        console.log(this.name)  //refers to a window object as it is an arrow function 
    },
    print2 : function ()  {
        console.log(this.name)
    }
}
//when we have arrow function it takes the this of it's parent where it is loacted basically
//when we have nor,a
obj2.print() //gives window object
obj2.print2() //gives akshay as it is a normal function 

obj2.print.call() //UNDEFINED
obj2.print2.call() //undefined 

// interviews questions

