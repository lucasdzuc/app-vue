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
                                    <h3 class="mb-0">Cadastro de produto</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            
                            <form @submit.prevent="salvar">
                                <h6 class="heading-small text-muted mb-4">Informações do produto</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        type="tet"
                                                        label="Código"
                                                        placeholder="Código"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.codigo"
                                            />
                                        </div>

                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Data de Validade"
                                                        placeholder="00/00/0000"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.data_validade"
                                            />
                                        </div>

                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Nome"
                                                        placeholder="Nome do produto"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.nome_produto"
                                            />
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="Preço de custo"
                                                        placeholder="0,00"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.valor"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="Lucro"
                                                        placeholder="0,00"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.lucro"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="Preço de venda"
                                                        placeholder="0,00"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.valor_venda"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="ICMS %"
                                                        placeholder="0,00"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.icms"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Subst. Tributário"
                                                        placeholder="Tributário"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.sub_tributario"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="CST - NFE"
                                                        placeholder="123456789"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.cst_nfe"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="NCM - NFE"
                                                        placeholder="123456789"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.ncm_nfe"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Unidade Medida"
                                                        placeholder="UN"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.unidade_medida"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Marca"
                                                        placeholder="Marca"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.id_marca_produto_fk"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Categoria"
                                                        placeholder="Eletrônicos/Material de construção/Vestuário"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.id_categoria_produto_fk"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Origem do produto"
                                                        placeholder="Nacional"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.origem"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Código de barras"
                                                        placeholder="0000000000000"
                                                        input-classes="form-control-alternative"
                                                        v-model="produto.codigo_barras"
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
                                <!-- fim -->

                            </form>
                        </template>
                    </card>
                </div>
            </div>

            <br/><br/><br/>
            
            <div class="container-fluid mt--4">
            <!--Tables-->
            <div class="card">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0">Lista de produtos</h3>
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(erro, index) of errors" :key="index">
                    campo <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
                    </li>
                </ul>
                <div class="table-responsive">
                    <base-table thead-classes="thead-light" :data="tableData">
                        <template slot="columns">
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Data de Validade</th>
                        <th>VALOR</th>
                        <th>EDITAR/EXCLUIR</th>
                        </template>

                        <template>
                        <tbody>
                        <tr v-for="produto of produtos" :key="produto.id">
                            <td>{{ produto.codigo }}</td>
                            <td>{{ produto.quantidade }}</td>
                            <td>{{ produto.valor | currencydecimal }}</td>
                            <td>
                                <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                                <button @click="remover(produto)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                            </td>
                        </tr>
                        </tbody>
                        </template>

                    </base-table>
                </div>

                
            </div>
            <!--End tables-->
            </div>
            
        </div>


    </div>
</template>

<script>

    import Produto from '../services/produtos';

    export default {
        name: 'register-produto',
        data() {
            return {
                produto: {
                    codigo: '',
                    data_validade: '',
                    nome_produto: '',
                    valor: '',
                    lucro: '',
                    valor_venda: '',
                    icms: '',
                    sub_tributario: '',
                    cst_nfe: '',
                    ncm_nfe: '',
                    unidade_medida: '',
                    id_marca_produto_fk: '',
                    id_categoria_produto_fk: '',
                    origem: '',
                    codigo_barras: ''
                },
                    produtos: [],
                    errors: []
            }
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },

        mounted(){
            this.listar()
        },

        methods:{
            listar(){
                Produto.listar().then(resposta => {
                this.produtos = resposta.data
                })
            },

            salvar(){

                if(!this.produto.id){
                
                Produto.salvar(this.produto).then(resposta => {
                    this.produto = {}
                    alert('Salvo com sucesso!')
                    this.produto = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })

                }else{
                Produto.atualizar(this.produto).then(resposta => {
                    this.produto = {}
                alert('Atualizado com sucesso!')
                    this.produto = resposta
                    this.listar()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
                }


            },
            editar(produto){
                this.produto = produto
            },

            remover(produto){
                if(confirm('Deseja excluir o produto?')){
                    Produto.deletar(produto).then(resposta => {
                        this.produto = resposta
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