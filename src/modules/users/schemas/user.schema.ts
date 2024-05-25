import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
	@Prop({ type: String })
	username: string;

	@Prop({ type: String })
	email: string;

	@Prop({ type: String })
	firstName: string;

	@Prop({ type: String })
	lastName: string;

	@Prop({ type: String })
	phone: string;

	@Prop({ type: Boolean })
	isEmailVerified: boolean;

	@Prop({ type: Boolean })
	isPhoneVerified: boolean;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 });
UserSchema.index({ phone: 1 });

export { UserSchema };