import { http } from './fornecedorConfig'

export default {                          

    listar:() => {
        return http.get('fornecedor')
    },

    salvar:(fornecedor) => {
        return http.post('fornecedor', fornecedor)
    },

    atualizar:(fornecedor) => {
      return http.put('fornecedor', fornecedor)
    },

    deletar:(fornecedor) => {
        return http.delete('fornecedor', { data: fornecedor })
    }

}