import { Controller, Get } from "@nestjs/common";
import { UsersStore } from "./users.store";

// isse ek nya instance bnega 
@Controller('/albums')
export class AlbumController{
    constructor(private store: UsersStore){
        console.log('Albums Controller initialized');
    }

    @Get()
    getUsers(){
        return 'Route called'
    }
}
