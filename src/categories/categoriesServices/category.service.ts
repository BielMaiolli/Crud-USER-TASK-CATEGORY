import categoryModel from '../categoriesSchemas/category.schema';
import { categoryType } from '../categoriesTypes/category.type';

class categoryService {

    async create(category: categoryType){
        const createdCategory = await categoryModel.create(category)
        return createdCategory
    }

    async findAll() {
        const foundCategories = await categoryModel.find()
        return foundCategories
      }
  
  
     async findById(id: string) {
        const foundCategory = await categoryModel.findById(id)
        return foundCategory
      }
  
      async update(id: string, category: categoryType) {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            idCategory: category.idCategory,
            nameCategory: category.nameCategory,
            colorCategory: category.colorCategory
        }, {new: true} )
    
        return updatedCategory
      }
  
  
      async delete(id: string) {
        try {
              await categoryModel.findByIdAndDelete(id)
              return "Categoria removida com sucesso"
       
            } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o usuário: ${error}`)    
       } 
       
    
    
      }
}

export default new categoryService()