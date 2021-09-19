import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    this.categoriesRepository.create({ name, description });

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }
  }
}

export { CreateCategoryService };
