<template>
  <div>
    <h3>Novo Leitor</h3>

    <div class="form">
      <form @submit="send" method="POST" enctype="multipart/form-data">
        <input
          type="text"
          name="nome"
          v-model="nome"
          placeholder="Nome"
        /><br />
        <input
          type="text"
          name="genero"
          v-model="genero"
          placeholder="Genero"
        /><br />
        <input
          type="text"
          name="bairro"
          v-model="bairro"
          placeholder="Bairro"
        /><br />
        <input
          type="text"
          name="telefone"
          v-model="telefone"
          placeholder="Telefone"
        /><br />
        <input type="file" @change="setFile" /><br />
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
      nome: null,
      genero: null,
      bairro: null,
      telefone: null,
      estado: "on",
      file: null,
    };
  },
  methods: {
    setFile(e) {
      var files = e.target.files;
      this.file = files[0];
    },
    send(e) {
      e.preventDefault();
      let data = new FormData();
      data.append("foto", this.file);
      data.append("nome", this.nome);
      data.append("genero", this.genero);
      data.append("telefone", this.telefone);
      data.append("bairro", this.bairro);
      data.append("estado", "on");

      axios
        .post("http://localhost:8000/api/leitors/store", data, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>