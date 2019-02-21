<template>
  <div class="files">
     <md-card>
      <md-toolbar class="md-accent" md-elevation="1">
      <h3 align="left" class="md-title" style="flex: 1"> Version Information </h3> 
      <md-button class="md-raised md-primary" @click="dash()">DashBoard</md-button>
      </md-toolbar>
    </md-card>
    <md-table md-card>
      <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Original Creator</md-table-head>
        <md-table-head>Creation Date</md-table-head>
        <md-table-head>File Type</md-table-head>
      </md-table-row>

      <md-table-cell>{{ files._id }}</md-table-cell>
      <md-table-cell>{{ files.name }}</md-table-cell>
      <md-table-cell>{{ files.creator }}</md-table-cell>
      <md-table-cell>{{ new Date(files.creation_date).toLocaleString() }}</md-table-cell>
      <md-table-cell>{{ files.mime_type }}</md-table-cell>

      <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Version Number</md-table-head>
        <md-table-head>Version Author</md-table-head>
        <md-table-head>Keywords</md-table-head>
        <md-table-head>File size</md-table-head>
      </md-table-row>
      <!-- displays all the file information -->
      <md-table-row
        md-selectable="single"
        class="files"
        v-for="version in files.data"
        :key="version._id"
        @click="onSelect(files._id)" >
        <md-table-cell>{{ version.title }}</md-table-cell>
        <md-table-cell>{{ version.version_number }}</md-table-cell>
        <md-table-cell>{{ version.version_author }}</md-table-cell>
        <md-table-cell>{{ version.keywords_tags }}</md-table-cell>
        <md-table-cell>{{ version.file_size }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<script>
export default {
  name: 'version',
  data() {
    return {
      files: null,
      selected: {}
    };
  },
  mounted() {
    const currentUrl = window.location.pathname.split('/');
    const fileId = currentUrl[2];

    this.$axios.get(`http://localhost:3000/files/${fileId}`).then(response => {
      this.files = response.data; // gets the file selected by the user on the dashboard
    });
  },
  methods: {
    dash() {
      window.location.href = '/dash';
    },
    onSelect(file) { // redirects the file edit page using the id from the url
      this.selected = file;
      window.location.href = `/edit/${file}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-table + .md-table {
  position: absolute;
  padding: 50px;
}
.md-table-cell {
  align-items: center;

  padding-right: 80px;
}
.files {
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
}
.md-button {
  margin-right: 50px;
}
</style>
