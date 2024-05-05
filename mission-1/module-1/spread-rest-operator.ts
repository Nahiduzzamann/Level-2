{
    //spread operator
    
    const a:string[]=['1','2','3']
    const b:string[]=['11','22','33']
    a.push(...b)

    

    const mentor1={
        name:'nahid',
        id:5676
    }
    const mentor2={
        name:'nahiduxxaman',
        id:5676544
    }

    const mentorList ={
        ...mentor1,
        ...mentor2
    }

    // rest operator

    const collectFriends =(...friends:string[])=>{
        return 'hi all'
    }
    collectFriends('frnd1','friend2')



}