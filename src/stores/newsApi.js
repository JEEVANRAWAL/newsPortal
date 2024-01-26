import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const apiCallstore = defineStore('apicall', () => {
  const news=ref(null);
  const details=ref({});

  const getnews = computed(() => news.value);

  async function fetchNews() {
    try {
      const data = await axios.get('https://api.anyafacts.com/fetch-news?rowsPerPage=24')
      const content= data.data.data;
      this.news= content;
      }
      catch (error) {
        alert(error)
        console.log(error)
    }
  }

  function appendObject(content){
           
    details.value= content;
    // console.log(content);
  }

  return { news, details, getnews, fetchNews, appendObject}
})
