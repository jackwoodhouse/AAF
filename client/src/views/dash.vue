<template>
<div class="files">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">All Files</h1>
      </md-table-toolbar>
        
     <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Original Creator</md-table-head>
        <md-table-head>Creation Date</md-table-head>
        <md-table-head>File Type</md-table-head>
      </md-table-row> 


      <md-table-row md-selectable="single" class="files" v-for="file in files" :key="file._id" @click="onSelect(file._id)"> 
        <md-table-cell>{{ file._id }}</md-table-cell> 
        <md-table-cell>{{ file.name }}</md-table-cell>
        <md-table-cell>{{ file.creator }}</md-table-cell>
        <md-table-cell>{{ file.creation_date }}</md-table-cell>
        <md-table-cell>{{ file.mime_type }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>


<script>

export default {
    name: 'dash',

    data() {
        return {
            files: null,
            selected: {},
        };
    },
    mounted() {
        this.$axios
            .get('http://localhost:3000/Files')
            .then((response) => {
                this.files = response.data;
            });
    },
    methods: {
      onSelect(file) {
        
        this.selected = file;
        window.location.href = `/edit/${file}`;
        
      },
    },
};

</script>
