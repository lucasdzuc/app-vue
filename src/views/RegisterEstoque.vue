<template>
    <div>
            
        <base-header class="pb-6 pb-8 pt-5 pt-md-8"></base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Cadastro de estoque</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Configurações</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações de estoque</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tipo de Estoque"
                                                        placeholder="Tipo de estoque"
                                                        input-classes="form-control-alternative"
                                                        v-model="local_estoque.tipo_etoque"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-button type="primary">Cadastrar</base-button>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                
                                <!-- fim -->

                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>





    </div>
</template>

<script>

    import Estoque from '../services/estoque';

    export default {
        name: 'register-estoque',
        data() {
            return {
                local_estoque: {
                    tipo: '',
                    empresa: ''
                    
                },
                local_estoques: [],
                errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Estoque.listar().then(resposta => {
                this.estoque = resposta.data
                })
            },

            salvar(){

                if(!this.estoque.id){
                
                Estoque.salvar(this.estoque).then(resposta => {
                    this.estoque = {}
                    alert('Salvo com sucesso!')
                    this.estoque = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Estoque.atualizar(this.estoque).then(resposta => {
                    this.estoque = {}
                alert('Atualizado com sucesso!')
                    this.estoque = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(estoque){
                this.estoque = estoque
            },

            remover(estoque){
                if(confirm('Deseja excluir esse estoque?')){
                    Estoque.deletar(estoque).then(resposta => {
                        this.estoque = resposta
                        this.listar();
                        this.errors = []
                    }).catch(e => {
                        this.errors = e.response.data.errors
                    })
                }
            }
        }
    }
</script>