<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header q-py-lg" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          size="large"
        />

        <q-toolbar-title class="q-pl-xl">
          <strong>News Portal</strong>
          <div style="margin-top: 18px;">{{ todaysDate  }}</div>
        </q-toolbar-title>

        <div class="q-mr-xl"><strong>renowned</strong> for <strong>daily</strong> authentic <strong>news</strong></div>
      </q-toolbar>

      <q-img src="src/assets/news.jpg" class="header-img absolute-top" style=""/>
    </q-header>

    
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable to="/news" v-ripple>
              <q-item-section avatar>
                <q-icon name="book" />
              </q-item-section>

              <q-item-section>
                News
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="stars" />
              </q-item-section>

              <q-item-section>
                Highlights
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="cloud" />
              </q-item-section>

              <q-item-section>
                Weather
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="sports" />
              </q-item-section>

              <q-item-section>
                Sports News
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="sidebarImg absolute-top" src="src/assets/news.jpg" style="height: 125px; ">
          <div class="absolute-bottom bg-transparent" style="background-color: red;">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="src/assets/jeevan.jpg">
            </q-avatar>
            <div class="text-weight-bold">News Nepal</div>
            <div>newsnepal@gmail.com</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import{date} from 'quasar'
//import { apiCallstore } from 'src/stores/newsApi'

export default defineComponent({
  name: 'MainLayout',

  components: {
   // EssentialLink
  },

  
  setup () {
    const leftDrawerOpen = ref(false)
    //const apicall= apiCallstore();
    
    const timeStamp =Date.now();
    const todaysDate= computed(()=> date.formatDate(timeStamp, 'dddd D MMMM'));

  //   onBeforeMount(()=>{
  //   apicall.fetchNews();
  // });
    
    return {
     
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      todaysDate,
      //apicall
    }
  }
})
</script>

<style lang="scss" scoped>

.header{
 height: 125px;
 .header-img{
  z-index: -1; 
  height: 100%; 
  object-fit:cover; 
  top: 0; 
  left: 0;
  opacity: 0.6;
  filter: grayscale(100%);
 }
}

.sidebarImg{
  
}
</style>

