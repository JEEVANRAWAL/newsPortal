<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
        <q-page-container>
            <q-btn
            size="22px"
            class="q-px-xl q-py-xs q-my-lg"
            color="dark"
            icon="arrow_back"
            to="/news"
            />
          <q-page padding>
            <q-avatar rounded style="width: 1000px; height: 600px;">
                <img :src="apicall.details.image" alt="">
            </q-avatar>
            <div class="content" v-html="apicall.details.content">
                
            </div>
            
            <!-- place QPageScroller at end of page -->
            <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                <q-btn fab icon="keyboard_arrow_up" color="accent" />
            </q-page-scroller>
        </q-page>
    </q-page-container>
</q-layout>
</div>
</template>

<script setup>
import { apiCallstore } from 'src/stores/newsApi';

const apicall= apiCallstore();
</script>

<style>
.content{
    margin-top: 30px;
}

.content img{
    display: none !important;
}

.content{
    font-size: 25px;
    line-height: 70px;
}

</style>