<template>
  <div>
    <h3>Novo Leitor</h3>

    <div class="form">
      <form @submit="postData" method="post" enctype="multipart/form-data">
        <input
          type="text"
          name="nome"
          v-model="leitors.nome"
          placeholder="Nome"
        /><br />
        <input
          type="text"
          name="genero"
          v-model="leitors.genero"
          placeholder="Genero"
        /><br />
        <input
          type="text"
          name="bairro"
          v-model="leitors.bairro"
          placeholder="Bairro"
        /><br />
        <input
          type="text"
          name="telefone"
          v-model="leitors.telefone"
          placeholder="Telefone"
        /><br />
        <input type="file" @change="onFileSelected" /><br />
        <input type="submit" value="Salvar" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      leitors: {
        nome: null,
        genero: null,
        bairro: null,
        telefone: null,
        foto: null,
        estado: "on",
      },
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();
      axios
        .post("http://localhost:8000/api/leitors/store", this.leitors)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
    },
    onFileSelected(e) {
      this.foto = e.target.files[0]
      console.log(e)
    },
  },
};
</script>

<style>
</style>