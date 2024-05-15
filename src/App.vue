<template>
  <HeaderComponent></HeaderComponent>
  <router-view/>
  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import './App.css'

@Options({
  components: {
    HeaderComponent,
    FooterComponent
  },
})
export default class App extends Vue {
}
</script>
