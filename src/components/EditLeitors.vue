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
    },
  },
};
</script>

<style>
</style>