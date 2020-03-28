import { http } from './categoriaConfig'

export default {                          

    listar:() => {
        return http.get('categoria')
    },

    salvar:(categoria) => {
        return http.post('categoria', categoria)
    },

    atualizar:(categoria) => {
      return http.put('categoria', categoria)
    },

    deletar:(categoria) => {
        return http.delete('categoria', { data: categoria })
    }

}