<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total de Produtos Armazenados"
                                type="gradient-info"
                                sub-title="100"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 0.00%</span>
                            <span class="text-nowrap">Na semana</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total de funcionários"
                                type="gradient-orange"
                                sub-title="30"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 0.00%</span>
                            <span class="text-nowrap">No semestre</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total de Estoques"
                                type="gradient-primary"
                                sub-title="4"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 0.00%</span>
                            <span class="text-nowrap">Depositos nos ultimos dias</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Arrecadações"
                                type="gradient-green"
                                sub-title="R$125.790,30"
                                icon=" ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 0.0%</span>
                            <span class="text-nowrap">No mês</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>
        
        <div class="container-fluid mt--7">
          <!--Tables-->
          <div class="row mt-5">
              <div class="col-xl-12 mb-5 mb-xl-0">
                  <page-visits-table></page-visits-table>
              </div>
          </div>
          <!--End tables--> 
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>
        

    </div>
</template>
<script>

  // Tabelas
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      PageVisitsTable
    },
    data() {
      return {
       
      };
    },
    
  };
</script>
<style></style>
