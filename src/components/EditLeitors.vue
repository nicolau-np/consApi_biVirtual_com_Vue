<template>
  <div>
    <h3>Editar Leitor</h3>

    <div class="form">
      <form @submit="send" method="POST" enctype="multipart/form-data">
        <input
          type="text"
          name="nome"
          v-model="nome"
          placeholder="Nome"
        /><br />
        <select name="genero" v-model="genero">
          <option value="M">M</option>
          <option value="F">F</option></select
        ><br />
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
      id: this.$route.params.id,
      nome: null,
      genero: null,
      bairro: null,
      telefone: null,
      estado: "on",
      file: null,
      leitor: [],
    };
  },
  created() {
    this.getLeitor(this.id);
  },
  methods: {
    getLeitor(id) {
      axios
        .get("http://localhost:8000/api/leitors/show/" + id)
        .then((response) => {
            this.leitor = response.data.data;
            //console.log(response.data.data);
            this.nome = this.leitor.pessoa.nome
            this.genero = this.leitor.pessoa.genero
            this.telefone = this.leitor.telefone
            this.bairro = this.leitor.bairro
        })
        .catch((e) => console.log(e));
    },
    setFile(e) {
      var files = e.target.files;
      this.file = files[0];
    },

    send(e) {
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>