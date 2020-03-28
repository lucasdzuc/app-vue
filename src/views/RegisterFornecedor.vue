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
                                    <h3 class="mb-0">Cadastro de fornecedor</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações do fornecedor</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Razão Social"
                                                        placeholder="Razão Social"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.razaosocial"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="E-mail"
                                                        placeholder="E-mail"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nome Fantasia"
                                                        placeholder="Nome Fantasia"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.nomefantasia"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="CNPJ"
                                                        placeholder="00.000.000./0000-00"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.cnpj"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Endereço -->
                                <h6 class="heading-small text-muted mb-4">Endereço</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <base-input alternative=""
                                                        label="Rua"
                                                        placeholder="Rua"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.rua"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Número"
                                                        placeholder="Número"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.numero"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Bairro"
                                                        placeholder="Bairro"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.bairro"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Cidade"
                                                        placeholder="Cidade"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.cidade"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Estado"
                                                        placeholder="Estado"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.estato"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="CEP"
                                                        placeholder="CEP"
                                                        input-classes="form-control-alternative"
                                                        v-model="fornecedor.cep"
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
                                <!-- fim do form -->

                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import Fornecedor from '../services/fornecedor';

    export default {
        name: 'register-fornecedor',
        data() {
            return {
                fornecedor: {
                    razaosocial: '',
                    email: '',
                    nomefantasia: '',
                    cnpj: ''
                },
                    fornecedors: [],
                    errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Fornecedor.listar().then(resposta => {
                this.fornecedor = resposta.data
                })
            },

            salvar(){

                if(!this.fornecedor.id){
                
                Fornecedor.salvar(this.fornecedor).then(resposta => {
                    this.fornecedor = {}
                    alert('Salvo com sucesso!')
                    this.fornecedor = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Fornecedor.atualizar(this.fornecedor).then(resposta => {
                    this.fornecedor = {}
                alert('Atualizado com sucesso!')
                    this.fornecedor = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(fornecedor){
                this.fornecedor = fornecedor
            },

            remover(fornecedor){
                if(confirm('Deseja excluir o fornecedor?')){
                    Fornecedor.deletar(fornecedor).then(resposta => {
                        this.fornecedor = resposta
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