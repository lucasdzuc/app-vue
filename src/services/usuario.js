import { http } from './usuarioConfig'

export default {                          

    listar:() => {
        return http.get('usuario')
    },

    salvar:(usuario) => {
        return http.post('usuario', usuario)
    },

    atualizar:(usuario) => {
      return http.put('usuario', usuario)
    },

    deletar:(usuario) => {
        return http.delete('usuario', { data: usuario })
    }

}