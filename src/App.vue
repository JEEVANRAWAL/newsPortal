<template>
  <router-view />
</template>

<script setup>
import { defineComponent, onBeforeMount } from 'vue'
import { apiCallstore } from './stores/newsApi';

    const apicall= apiCallstore();
  
    onBeforeMount(()=>{
      apicall.fetchNews();
    });

</script>
