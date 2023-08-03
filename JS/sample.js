

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