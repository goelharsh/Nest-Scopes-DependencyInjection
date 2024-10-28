import { Module } from '@nestjs/common';
import { UsersStore } from './users.store';
import { UsersController } from './users.controller';
import { AlbumController } from './album.controller';


@Module({
  controllers: [UsersController, AlbumController],

  // So yha pe hmne ye 1. Default scope ka example dekhkia , ie usse hme ek module me ek hi instance mileg 
  providers: [UsersStore],
})
export class AppModule {}
