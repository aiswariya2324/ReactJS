var a = 120
console.log("This is the value declared in var type after altering:"+a)
{
    var a = 7
    console.log("This is the value declared in var type after altering:"+""+a)
}
let b = 20
console.log("This is the value declared in var type before altering:"+""+b)
{
    let b = 7
    console.log("This is the value declared in var type after altering:"+""+b)
}
console.log("This is the value declared in var type after block altering:"+""+b)

const c = 30
console.log("This is the value declared in const type:"+""+c)

a = 0
if (a==0){
    console.log("The number is 0 and adding 1 to it make it positive "+""+a)
    a = a +1
    console.log(a)
}
else if(a>0){
    console.log("the number is positive")
}
else{
    console.log("the number is negative")
}
for(i = 0;i<a;i++){
    console.log(i)
}
i=0
while(i<=a){
    console.log(i)
    i++
}
array = [10,20]//one liner function arrow op
array.forEach(element =>  console.log(element))//arrow op will fetch the elements

const array =["thrishna",23,2,10.00,Date()]
for(var ele in array){
    console.log(array[ele])
}
console.log("after change")
array.push("Sanjay")

for (var ele in array){
    console.log(array[ele])
}

console.log("After poping")
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
for (var ele in array){
    console.log(array[ele])
}

if(array.length>0){
    console.log("elements are present")
    for (var ele in array){
        console.log(array[ele])

        const array =["thrishna",23,2,10.00,Date()]
        for(var ele in array){
            console.log(array[ele])
        }
        console.log("after change")
        array.push("Sanjay")
        
        for (var ele in array){
            console.log(array[ele])
        }
        
        console.log("After poping")
        array.pop()
        array.pop()
        array.pop()
        array.pop()
        array.pop()
        array.pop()
        console.log(array)
        for (var ele in array){
            console.log(array[ele])
        }
        
        if(array.length>0){
            console.log("elements are present")
            for (var ele in array){
                console.log(array[ele])
        

a = {
    car:"Audi",
    model:"AB",
    airbags: 8,
    wheels: 5,
    color:"blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)  
a.sunroof = "Yes"
console.log(a)
a.sunroof = {isPresent: "Yes", Shape: "Rectangle"}
console.log(a.sunroof .isPresent) 
for (var ele in a)
{
    console.log(ele +":"+ a[ele])
    if(typeof a[ele]==="object")
    {
        for (var val in a[ele]){
            console.log(val +":" +a[ele][val])
        }
    }
}
function fun_names(a,b){
    console.log(a + b +"iceeeeh"+ 5+ 5)
    return a + b +"hello"+ 5+ 5
}
console.log(fun_names(5,5))