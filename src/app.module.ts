import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveModele } from './leave/leave.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('DB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    LeaveModele,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
