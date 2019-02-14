<template>
    <div id="display">
    <div class="display" v-for="file in display" :key="file._id">
      <div>
        <h3 class="headline mb-0">{{ file.name }}</h3>
          <div>
            <table>
              <tr>
                <td>
                  name:
                </td>
                <td>
                  {{ file.data[file.data.length - 1]._id }}
                </td>
              </tr>
              <tr>
                <td>
                  Creator:
                </td>
                <td>
                  {{ file.data[file.data.length - 1].Creator }}
                </td>
              </tr>
              <tr>
                <td>
                  Creation date:
                </td>
                <td>
                  {{ file.data[file.data.length - 1].creation_date }}
                </td>
              </tr>
              <tr>
                <td>
                  Version:
                </td>
                <td>
                  {{ file.data[file.data.length - 1].version }}
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
                console.log('hello!');
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
