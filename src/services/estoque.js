import { http } from './estoqueConfig'

export default {                          

    listar:() => {
        return http.get('estoque')
    },

    salvar:(estoque) => {
        return http.post('estoque', estoque)
    },

    atualizar:(estoque) => {
      return http.put('estoque', estoque)
    },

    deletar:(estoque) => {
        return http.delete('estoque', { data: estoque })
    }

}