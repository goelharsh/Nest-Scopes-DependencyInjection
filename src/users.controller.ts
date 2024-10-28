import { Controller, Get } from "@nestjs/common"
import { UsersStore } from "./users.store";

// Here we are going to see that -
// -  injection scope kya hota hai kisi dependency ka  , ie 
// - jo bhi hmari dependency hoti hai uska scope kya hota hai 

// - kab us dependecy ka ek hi instance banta hai or kab 1 se jyada bnte hain 

// - kab us Dependency ke baar baar hi instance bnte hain 

// NOW :

// Hmne as a depency inject krlia hai yha pe UsersStrore ko 

// kISI BHI DEPENDENCY KE 3 TRH KE INJECTION SCOPE HOTE HAIN 

// 1. DEFAULT SCOPE
//  EK MODULE EK ANDER EK HI SCOPE BNEGA HMARI DEPENDENCY KA 

// 2. REQUEST SCOPE
//  ISME JAB BHI SERVER PR REQUEST AYEGI TAB TAB IS DEPENDECY KA EK NYA INSTACE BNEGA 
//  AND JAB RESPONSE JAYEGA TO BO INSTACEN DELETE HO JAAYEGA 

// (Now to achive this scope we need to do 2 changes )

//  first -> in user store we have writeen this [ scope: Scope.REQUEST] in the injectable decorator 

//  second -> hme ek get handler bnana pdega in UsersController 

// 3. TRANSIENT SCOPE 
// JO BHI IS DEPENDENCY KO APNE PASS USE ME LEKE AYEGA , USKE LIYE USKO EK NYA INSTANCE MILEGA 
// for ex - agr 3 controller dependency use krre hain to 3 instance bnenge  -  ise smjhne ke liye hmne album controller bna lia hai 


@Controller('/users')
export class UsersController{
    constructor(private store: UsersStore){
        console.log('Controller initialized');
    }

    // now whenever we make a new request tab-tab ek instacnce bnega  UserStore class ka

    // Note : Jab bhi hum dependency ko as a request scope bna dete hai to automatically hmata contrller bhi requets scope ka ban jata hai 

    // therefore, isme jaise hi hum getUsers request krenge then, 2 instance bnenge, ek to UserStore class ka and ek UserController ka 
    @Get()
    getUsers(){
        return 'Route called'
    }
}
