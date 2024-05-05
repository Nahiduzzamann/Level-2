{
// generic type 

type GenericType<T> = Array<T>

const numbers : GenericType<number>=[1,2,3,4,5,55] //pass type like arguments

const users:GenericType<{name:string,id:number}> =[
    {
        name:'n',
        id:1
    },
    {
        name:'f',
        id:2
    },
]

//generic tuple
type GenericTuple<X,Y>=[X,Y]

const peoples :GenericTuple<string,number> =['name',65]


}