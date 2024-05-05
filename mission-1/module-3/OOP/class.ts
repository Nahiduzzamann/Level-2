{
    class Animal {
        constructor(public name:string,public sound:string){}
        makeSound(){
            console.log(`${this.name} do ${this.sound}`);
            
        }
    }

    const dog = new Animal('Dog','ghew ghew')
    dog.makeSound()
    
}