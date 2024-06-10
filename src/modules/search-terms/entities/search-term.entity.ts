import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { SearchTermsImages } from '../../search-terms-images/entities/search-terms-images.entity';
import { CategoriesSearchTerms } from '../../categories-search-terms/entities/categories-search-terms.entity';

@Entity('search_terms')
export class SearchTerm {
	@PrimaryGeneratedColumn({ type: 'int' })
	id: number;

	@Column({ type: 'int', width: 11 })
	category_id: number;

	@OneToMany(() => SearchTermsImages, (searchTermsImages) => searchTermsImages.searchTerm)
	searchTermsImages: SearchTermsImages[];

	@ManyToOne(() => CategoriesSearchTerms, (categorySearchTerm) => categorySearchTerm.searchTerm)
	@JoinColumn({ name: 'category_id' })
	categorySearchTerm: CategoriesSearchTerms;
}
