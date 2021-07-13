<template>
  <div>
    <h1>Primeira Pagina</h1>
    <h4>Hello World</h4>

    <table border="1">
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>Genero</th>
                <th>Telefone</th>
                <th>Bairro</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="leitor in leitors" :key="leitor.id">
                <td></td>
                <td>{{ leitor.pessoa.nome }}</td>
                <td>{{ leitor.pessoa.genero }}</td>
                <td>{{ leitor.telefone }}</td>
                <td>{{ leitor.bairro }}</td>
            </tr>
        </tbody>
    </table>
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
</style>

