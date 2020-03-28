import { http } from './marcaConfig'

export default {                          

    listar:() => {
        return http.get('marca')
    },

    salvar:(marca) => {
        return http.post('marca', marca)
    },

    atualizar:(marca) => {
      return http.put('marca', marca)
    },

    deletar:(marca) => {
        return http.delete('marca', { data: marca })
    }

}