<template>
  <div>
   <Leitors/>
  </div>
</template>

<script>
import Leitors from './components/Leitors.vue'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      leitors : []
    }
  },
  components: {
    Leitors
  },
  created: function(){
    this.getLeitors();
  },
  methods: {
    getLeitors(){
      axios.get("http://localhost:8000/api/leitors").then((response)=>{
          console.log('pegou a lista dos leitors...')
          this.leitors = response.data.data;
      }).catch((e)=>console.log(e))
    }
  }

}
</script>

<style>

</style>
