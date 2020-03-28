import { http } from './secaoConfig'

export default {                          

    listar:() => {
        return http.get('secao')
    },

    salvar:(secao) => {
        return http.post('secao', secao)
    },

    atualizar:(secao) => {
      return http.put('secao', secao)
    },

    deletar:(secao) => {
        return http.delete('secao', { data: secao })
    }

}