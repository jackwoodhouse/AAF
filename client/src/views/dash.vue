
<template>
  <div class="files">
    <md-card>
      <md-toolbar class="md-accent" md-elevation="1">
      <h3 align="left" class="md-title" style="flex: 1"> DashBoard </h3>
      <input type="text" v-model="search" placeholder="Search title.."/>
      <md-button class="md-raised md-primary" @click="users()">Users </md-button>
      </md-toolbar>
    </md-card>

  <md-table md-card>
      <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Original Creator</md-table-head>
        <md-table-head>Creation Date</md-table-head>
        <md-table-head>File Type</md-table-head>
        <md-table-head>Version Number</md-table-head>
      </md-table-row>
      <!-- this displays all the files returned from the get in mounted and allows it to be searchable with filteredLists-->
      <md-table-row md-selectable="single" class="files" 
      v-for="file in filteredLists" :key="file._id" @click="onSelect(file._id)" >
        <md-table-cell>{{ file._id }}</md-table-cell>
        <md-table-cell>{{ file.name }}</md-table-cell>
        <md-table-cell>{{ file.creator }}</md-table-cell>
        <md-table-cell>{{ new Date(file.creation_date).toLocaleString() }}</md-table-cell>
        <md-table-cell>{{ file.mime_type }}</md-table-cell>
        <md-table-cell>{{ file.data[file.data.length - 1].version_number }}</md-table-cell>
      </md-table-row>
  </md-table>

    <md-card>
      <md-toolbar>
      <h3 class="md-title" style="flex: 1"></h3>
      <md-button class="md-raised md-primary" @click="addFile()">Add file </md-button>
      <md-button class="md-raised md-primary" @click="logout()">Logout </md-button>
      </md-toolbar>
    </md-card>

  </div>
</template>

<script>

export default {
    name: 'dash',
    data() {
        return {
            files: [],
            selected: {},
            search: '',
        };
    },
    mounted() {
        this.$axios.get("http://localhost:3000/Files") // return all files from database
            .then(response => {
                this.files = response.data;
            });
    },
    methods: { // simple navigation buttons
        users() {
            window.location.href = '/users';
        },
        logout() {
            window.location.href = '/'; 
        },
        addFile() {
            window.location.href = '/addFile';
        },
        onSelect(file) {
            this.selected = file;
            window.location.href = `/versionInfo/${file}`; 
            // when the users selects a file it redirects to the page user the fileId
        },

    },
    computed: {
      filteredLists() { // searches the list of files for user entered data
        return this.files.filter(file => {
          return ( // this function allows for search by file name, creator and file type
          (!file.name) && (!this.search.toLowerCase()) 
          || (file.name) && (file.name.toLowerCase().includes(this.search.toLowerCase()))
          || (!file.creator) && (!this.search.toLowerCase())
          || (file.creator) && (file.creator.toLowerCase().includes(this.search.toLowerCase()))
          || (!file.mime_type) && (!this.search.toLowerCase())
          || (file.mime_type) && (file.mime_type.toLowerCase().includes(this.search.toLowerCase())));
          });
        },
    },
};

</script>

<style lang="scss" scoped>
.md-table + .md-toolbar {
  width: 1200px;
  padding: 50px;

}
.md-card {
  width: 1200px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-table-cell {
  align-items: center;
  padding-right: 80px;
}
.md-button {
  margin-right: 50px;
}
</style>
