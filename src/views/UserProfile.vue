<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 300px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Perfil</h1>
                    </div>
                </div>
            </div>
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Meus dados</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent="salvar">
                                <h6 class="heading-small text-muted mb-4">Informações do usuário</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Usuário"
                                                        placeholder="Usuário"
                                                        input-classes="form-control-alternative"
                                                        v-model="usuario.usuario"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="E-mail"
                                                        placeholder="seu@email.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="usuario.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Senha"
                                                        type="password"
                                                        placeholder="Senha"
                                                        input-classes="form-control-alternative"
                                                        v-model="usuario.senha"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-button type="primary">Salvar</base-button>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Usuario from '../services/usuario';

    export default {
    name: 'user-profile',
    data() {
        return {
            usuario: {
                usuario: '',
                email: '',
                senha: ''
            },
                usuarios: [],
                errors: []
        }
    },
    mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Usuario.listar().then(resposta => {
                this.usuario = resposta.data
                })
            },

            salvar(){

                if(!this.usuario.id){
                
                Usuario.salvar(this.usuario).then(resposta => {
                    this.usuario = {}
                    alert('Salvo com sucesso!')
                    this.usuario = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Usuario.atualizar(this.usuario).then(resposta => {
                    this.usuario = {}
                alert('Atualizado com sucesso!')
                    this.usuario = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(usuario){
                this.usuario = usuario
            },

            remover(usuario){
                if(confirm('Deseja excluir esse usuario?')){
                    Usuario.deletar(usuario).then(resposta => {
                        this.usuario = resposta
                        this.listar();
                        this.errors = []
                    }).catch(e => {
                        this.errors = e.response.data.errors
                    })
                }
            }
        }


  };
</script>
<style></style>
