type Add1 = (num1:number,num2:number)=>number

function add(num1:number,num2:number = 0):number{
    return num1+num2
}
add(2,3)

const add1 :Add1 =(num1,num2)=>num1+num2

