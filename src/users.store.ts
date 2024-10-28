// 1 . this is for default scope example 

// import { Injectable } from "@nestjs/common";

// interface User{
//     name: string;
//     age: number;
//     id: number;
// }

// @Injectable()
// export class UsersStore{
//     private store = new Map<number, User>();
    
//     // jab bhi jab UsersStore class ka instance bnega to ye constructor call ho jayega 
//     constructor(){
//         console.log('User store init');
//     }

//     addUser(user: User){
//         this.store.set(user.id, user);
//     }

//     getUser(id: number){
//         return this.store.get(id);
//     }

//     getUsers(){
//         return Array.from(this.store).map((_,user)=> user);
//     }

//     updateUser(id:number, user: User){
//         this.store.set(id,user);
//     }

//     deleteUser(id: number){
//         this.store.delete(id);
//     }
// }





//____________________________________



// 2. this is for request scope example


// import { Injectable, Scope } from "@nestjs/common";

// interface User{
//     name: string;
//     age: number;
//     id: number;
// }

// // this is how we have implemented the request scope injectable class 
// // ab nest js smjh jayegi ki jab bhi ek new request ayegi to ek new instance bnana hai 
// @Injectable({ scope: Scope.REQUEST})
// export class UsersStore{
//     private store = new Map<number, User>();
    
//     // jab bhi jab UsersStore class ka instance bnega to ye constructor call ho jayega 
//     constructor(){
//         console.log('User store init');
//     }

//     addUser(user: User){
//         this.store.set(user.id, user);
//     }

//     getUser(id: number){
//         return this.store.get(id);
//     }

//     getUsers(){
//         return Array.from(this.store).map((_,user)=> user);
//     }

//     updateUser(id:number, user: User){
//         this.store.set(id,user);
//     }

//     deleteUser(id: number){
//         this.store.delete(id);
//     }
// }

//_________________________________________


// 3. transient scope example 


import { Injectable, Scope } from "@nestjs/common";

interface User{
    name: string;
    age: number;
    id: number;
}

 
@Injectable({ scope: Scope.TRANSIENT})
export class UsersStore{
    private store = new Map<number, User>();
    
    constructor(){
        console.log('User store init');
    }

    addUser(user: User){
        this.store.set(user.id, user);
    }

    getUser(id: number){
        return this.store.get(id);
    }

    getUsers(){
        return Array.from(this.store).map((_,user)=> user);
    }

    updateUser(id:number, user: User){
        this.store.set(id,user);
    }

    deleteUser(id: number){
        this.store.delete(id);
    }
}