<template>
  <div>
    <h1>Primeira Pagina</h1>
    <h4>Hello World</h4>

    <div class="card" v-for="leitor in leitors" :key="leitor.id">
        <img scr="" class="img_profile">
        <div class="description">
         <span class="field">Nome: </span> {{leitor.pessoa.nome}}<br/>
         <span class="field">Gênero: </span> {{leitor.pessoa.genero}}<br/> 
         <span class="field">Telefone: </span> {{leitor.telefone}}<br/> 
         <span class="field">Bairro: </span> {{leitor.bairro}}<br/>
         <a href="">Editar</a>&nbsp;&nbsp;<a href="">Eliminar</a>
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
}
</style>

