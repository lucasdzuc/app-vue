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
                                    <h3 class="mb-0">Cadastro de marca</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Configurações</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações da marca</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Marca"
                                                        placeholder="Marca do produto"
                                                        input-classes="form-control-alternative"
                                                        v-model="marca.nome_marca"
                                            />
                                        </div>
                                    </div>
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

    import Marca from '../services/marca';

    export default {
        name: 'register-marca',
        data() {
            return {
                marca: {
                    nome_marca: ''
                },
                    marcas: [],
                    errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Marca.listar().then(resposta => {
                this.marca = resposta.data
                })
            },

            salvar(){

                if(!this.marca.id){
                
                Marca.salvar(this.marca).then(resposta => {
                    this.marca = {}
                    alert('Salvo com sucesso!')
                    this.marca = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Marca.atualizar(this.marca).then(resposta => {
                    this.marca = {}
                alert('Atualizado com sucesso!')
                    this.marca = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(marca){
                this.marca = marca
            },

            remover(marca){
                if(confirm('Deseja excluir essa marca?')){
                    Marca.deletar(marca).then(resposta => {
                        this.marca = resposta
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