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
                                    <h3 class="mb-0">Cadastro de categoria de produtos</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Informações de categorias</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Categoria do produto"
                                                        placeholder="Categoria do produto"
                                                        input-classes="form-control-alternative"
                                                        v-model="categoria.nome_categoria"
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

    import Categoria from '../services/categoria';

    export default {
        name: 'register-categoria',
        data() {
            return {
                categoria: {
                    nome_categoria: ''
                    
                },
                    categorias: [],
                    errors: []
            }
        },
        mounted(){
            this.listar()
        },
        methods:{
            listar(){
                Categoria.listar().then(resposta => {
                this.categoria = resposta.data
                })
            },

            salvar(){

                if(!this.categoria.id){
                
                Categoria.salvar(this.categoria).then(resposta => {
                    this.categoria = {}
                    alert('Salvo com sucesso!')
                    this.categoria = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Categoria.atualizar(this.categoria).then(resposta => {
                    this.categoria = {}
                alert('Atualizado com sucesso!')
                    this.categoria = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(categoria){
                this.categoria = categoria
            },

            remover(categoria){
                if(confirm('Deseja excluir essa categoria?')){
                    Categoria.deletar(categoria).then(resposta => {
                        this.categoria = resposta
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