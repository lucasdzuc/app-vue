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
                                    <h3 class="mb-0">Cadastro de empresa</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Configurações</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações da empresa</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nome"
                                                        placeholder="Nome da empresa"
                                                        input-classes="form-control-alternative"
                                                        v-model="empresa.nome_empresa"
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

    import Empresa from '../services/empresa';

    export default {
        name: 'register-empresa',
        data() {
            return {
                empresa: {
                    nome_empresa: ''
                    
                },
                empresas: [],
                errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Empresa.listar().then(resposta => {
                this.empresa = resposta.data
                })
            },

            salvar(){

                if(!this.empresa.id){
                
                Empresa.salvar(this.empresa).then(resposta => {
                    this.empresa = {}
                    alert('Salvo com sucesso!')
                    this.empresa = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Empresa.atualizar(this.empresa).then(resposta => {
                    this.empresa = {}
                alert('Atualizado com sucesso!')
                    this.empresa = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(empresa){
                this.empresa = empresa
            },

            remover(empresa){
                if(confirm('Deseja excluir essa empresa?')){
                    Empresa.deletar(empresa).then(resposta => {
                        this.empresa = resposta
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