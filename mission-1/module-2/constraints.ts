{
    //constrain means which property must be included
     const addStudent =<T extends {id:number}>(obj:T)=>{
        const courseName='L2'
        return {
            ...obj,
            courseName
        }
     }

     addStudent<{id:number,name:string}>({name:'nahid',id:76})
}