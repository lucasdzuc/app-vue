import { http } from './funcionarioConfig'

export default {                          

    listar:() => {
        return http.get('funcionario')
    },

    salvar:(funcionario) => {
        return http.post('funcionario', funcionario)
    },

    atualizar:(funcionario) => {
      return http.put('fornecedor', funcionario)
    },

    deletar:(funcionario) => {
        return http.delete('funcionario', { data: funcionario })
    }

}