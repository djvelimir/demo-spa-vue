<template>
  <HeaderView></HeaderView>
  <router-view/>
  <FooterView></FooterView>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderView from '@/views/HeaderView.vue';
import FooterView from '@/views/FooterView.vue';
import './App.css'

@Options({
  components: {
    HeaderView,
    FooterView
  },
})
export default class App extends Vue {
}
</script>
