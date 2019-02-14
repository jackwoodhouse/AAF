<template>
    <div id="files">
    <div class="files" v-for="file in files" :key="file._id">
      <div>
        <h3 class="headline mb-0">{{ file.name }}</h3>
          <div>
            <table>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  {{ file.name }}
                </td>
              </tr>
              <tr>
                <td>
                  Creator:
                </td>
                <td>
                  {{ file.creator }}
                </td>
              </tr>
              <tr>
                <td>
                  Creation date:
                </td>
                <td>
                  {{ file.creation_date }}
                </td>
              </tr>
              <tr>
                <td>
                  Version:
                </td>
                <td>
                  {{ file.version_number }}
                </td>
              </tr>
            </table>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'dash',
    data() {
        return {
            files: null,
        };
    },
    mounted() {
        this.$axios
            .get('http://localhost:3000/Files')
            .then((response) => {
                this.files = response.data;
            });
    },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
