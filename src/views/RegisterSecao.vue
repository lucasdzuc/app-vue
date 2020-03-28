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
                                    <h3 class="mb-0">Cadastro de Seção de Produtos</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Configurações</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent="salvar">
                                <h6 class="heading-small text-muted mb-4">Informações de seções de produto</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nome da Seção"
                                                        placeholder="Nome da Seção"
                                                        input-classes="form-control-alternative"
                                                        v-model="secao.nome_secao"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-button type="primary">Salvar</base-button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <hr class="my-4" />
                                
                                <!-- FIM -->

                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>





    </div>
</template>

<script>

    import Secao from '../services/secao';

    export default {
        name: 'register-secao',
        data() {
            return {
                secao: {
                    nome_secao: ''
                },
                    secaos: [],
                    errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Secao.listar().then(resposta => {
                this.secao = resposta.data
                })
            },

            salvar(){

                if(!this.secao.id){
                
                Secao.salvar(this.secao).then(resposta => {
                    this.secao = {}
                    alert('Salvo com sucesso!')
                    this.secao = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Secao.atualizar(this.secao).then(resposta => {
                    this.secao = {}
                alert('Atualizado com sucesso!')
                    this.secao = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(secao){
                this.secao = secao
            },

            remover(secao){
                if(confirm('Deseja excluir essa secao?')){
                    Secao.deletar(secao).then(resposta => {
                        this.secao = resposta
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