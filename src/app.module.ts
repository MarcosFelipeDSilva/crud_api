import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://user:user01@cluster0.wsvup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
