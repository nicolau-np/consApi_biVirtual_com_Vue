<template>
  <div>
    <h3>Leitores Angolanos</h3>

    <div class="card" v-for="leitor in leitors" :key="leitor.id">
        <img v-if="leitor.pessoa.foto!=null" :scr="'http://localhost:8000/'+leitor.pessoa.foto"  alt="img_profile" class="img_profile"/>
        <img v-else-if="leitor.pessoa.foto==null" scr=""  alt="none_photo" class="img_profile"/>
        <div class="description">
         <span class="field">Nome: </span> {{leitor.pessoa.nome}}<br/>
         <span class="field">Gênero: </span> {{leitor.pessoa.genero}}<br/> 
         <span class="field">Telefone: </span> {{leitor.telefone}}<br/> 
         <span class="field">Bairro: </span> {{leitor.bairro}}<br/>
         <div class="operators"> 
             <a href="" class="link primary">Editar</a>&nbsp;&nbsp;&nbsp;<a href="" class="link danger">Eliminar</a>
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

