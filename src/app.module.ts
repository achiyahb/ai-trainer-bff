import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './utils/configs/app.config';
import { TrainersModule } from './modules/trainers/trainers.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MysqlModule } from './utils/databases/mysql/mysql.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [appConfig],
		}),
		MysqlModule,
		TrainersModule,
		UsersModule,
		AuthModule,
		ImagesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
