type NormalUser={
    name:string
}
type AdminUser={
    name:string
    role:"admin"
}
//type guard always work in object
const getUser=(user : NormalUser | AdminUser)=>{
    
    if('role' in user){ //type guard using in
        console.log('admin user');
        
    }
    else{
        console.log('normal user');
        
    }
}