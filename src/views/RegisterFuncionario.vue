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
                                    <h3 class="mb-0">Cadastro de funcionário</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Configurações</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações do funcionário</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nome"
                                                        placeholder="Nome completo"
                                                        input-classes="form-control-alternative"
                                                        v-model="funcionario.nome"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="CPF"
                                                        placeholder="000.000.000-00"
                                                        input-classes="form-control-alternative"
                                                        v-model="funcionario.cpf"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cargo"
                                                        placeholder="Cargo"
                                                        input-classes="form-control-alternative"
                                                        v-model="funcionario.cargo"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Vínculo"
                                                        placeholder="Vínculo"
                                                        input-classes="form-control-alternative"
                                                        v-model="funcionario.vinculo"
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

    import Funcionario from '../services/funcionario';

    export default {
        name: 'register-funcionario',
        data() {
            return {
                funcionario: {
                    nome: '',
                    cpf: '',
                    cargo: '',
                    vinculo: ''
                    
                },
                funcionarios: [],
                    errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Funcionario.listar().then(resposta => {
                this.funcionario = resposta.data
                })
            },

            salvar(){

                if(!this.funcionario.id){
                
                Funcionario.salvar(this.funcionario).then(resposta => {
                    this.funcionario = {}
                    alert('Salvo com sucesso!')
                    this.funcionario = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Funcionario.atualizar(this.funcionario).then(resposta => {
                    this.funcionario = {}
                alert('Atualizado com sucesso!')
                    this.funcionario = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(funcionario){
                this.funcionario = funcionario
            },

            remover(funcionario){
                if(confirm('Deseja excluir e funcionario?')){
                    Funcionario.deletar(funcionario).then(resposta => {
                        this.funcionario = resposta
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