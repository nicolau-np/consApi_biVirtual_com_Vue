<template>
  <div>
    <h3>Leitores Angolanos</h3>

    <div class="card" v-for="leitor in leitors" :key="leitor.id">
      <img v-if="leitor.pessoa.foto== null" src="http://localhost:8000/assets/img/photo_none.png" width="100px" height="100px">
      <img v-else :scr="'http://localhost:8000/'+leitor.pessoa.foto" width="100px" height="100px"/>
        
        
        <div class="description">
         <span class="field">Nome: </span> {{leitor.pessoa.nome}}<br/>
         <span class="field">Gênero: </span> {{leitor.pessoa.genero}}<br/> 
         <span class="field">Telefone: </span> {{leitor.telefone}}<br/> 
         <span class="field">Bairro: </span> {{leitor.bairro}}<br/>
         <div class="operators"> 
             <router-link :to="'/editleitors/'+leitor.id" class="link primary">Editar</router-link>&nbsp;&nbsp;&nbsp;<router-link to="" class="link danger">Eliminar</router-link>
        </div>
         </div>
         
    </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Leitors",
  data() {
    return {
      leitors: [],
    };
  },
  created: function () {
    this.getLeitors();
  },
  methods: {
    getLeitors() {
      axios
        .get("http://localhost:8000/api/leitors")
        .then((response) => {
          console.log("pegou a lista dos leitors...");
          this.leitors = response.data.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.operators{
    padding-top:10px;
}
.img_profile{
    height: 5em;
    width: 40%;
}
.description{
    font-size: 14px;
    float: right;
}
.field{
    font-weight: bold;
    color: #42b983;
    float: left;
}
.card{
    padding:10px;
    border: 1px solid #ccc;
    display: block;
    margin-bottom: 10px;
}
.link{
    font-weight: bold;
    padding: 5px;
    text-decoration: none;
    color: #fff;
    border-radius: 4px;
}
.primary{
    background-color: blue;
}

.danger{
    background-color: red;
}
</style>

