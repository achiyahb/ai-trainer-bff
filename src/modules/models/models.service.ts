import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModelEntity } from './entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelsService {
	constructor(@InjectRepository(ModelEntity) private readonly modelRepository: Repository<ModelEntity>) {}

	async create(restModel: Omit<any, 'epochs'>) {
		return await this.modelRepository.save(restModel);
	}
}
