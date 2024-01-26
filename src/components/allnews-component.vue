<template>
     <div class="q-pa-md">
      <q-table
      title="Todays News"
      :rows="rows"
      :columns="columns"
      row-key="name"
      >
  
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <div class="my-table-details">
            <q-avatar rounded size="90px">
              <img :src="props.row.image" />
            </q-avatar>
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn @click="apicall.appendObject(props.row.action)" to="/newsDetail" flat color="black" rounded icon="visibility" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { apiCallstore } from 'src/stores/newsApi';
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';




console.log('hello from news');

const apicall= apiCallstore();

const columns= [ { name: 'image', align: 'center', label: 'Image', field: 'image', sortable: true},
  { name: 'title', label: 'Title', field: 'title', align:'left', sortable: true, style:'text-align:justify; width:100px'},
  { name: 'publisher', label: 'Publisher', field: 'publisher', align:'left'},
  { name: 'action', label: 'Action', field: 'action' },]

  const rows= ref([]); 

  if(apicall.getnews !== null){

    apicall.getnews.forEach(element => {
      const rowdata={
          image: element.image,
          title: element.title,
          publisher: element.publisher_name,
          action: element
      }
     rows.value.push(rowdata);
    });
  }

</script>