<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Estoque</h3>
        </div>
        
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Local</th>
          <th></th>
          <th>Tipo</th>
          <th></th>
          <th>Produtos armazenados</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">{{ row.local }}</th>
          <th></th>
          <th>{{ row.tipo }}</th>
          <th></th>
          <td>{{ row.quantidade }}</td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>

  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: [
          {
            local: 'Local 1',
            tipo: 'Armazem',
            quantidade: '340',
          },
          {
            local: 'Local 2',
            tipo: 'Galpão',
            quantidade: '319',
           
          },
          {
            local: 'Local 3',
            tipo: 'Armazem',
            quantidade: '294',
            
          },
          {
            local: 'Local 4',
            tipo: 'Armazem',
            quantidade: '147',
            
          }
        ]
      }
    }
  }
</script>
<style>
</style>
