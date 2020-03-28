import { http } from './empresaConfig'

export default {                          

    listar:() => {
        return http.get('empresa')
    },

    salvar:(empresa) => {
        return http.post('empresa', empresa)
    },

    atualizar:(empresa) => {
      return http.put('empresa', empresa)
    },

    deletar:(empresa) => {
        return http.delete('empresa', { data: empresa })
    }

}