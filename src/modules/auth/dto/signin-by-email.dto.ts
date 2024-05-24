import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SigninByEmailDto {
	@ApiProperty()
	@IsEmail()
	@IsString()
	email: string;
}
