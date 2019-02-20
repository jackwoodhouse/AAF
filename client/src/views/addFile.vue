<template>
  <div>
    <md-card>
      <md-table-toolbar>
        <h1 class="md-title">Add New File</h1>
      </md-table-toolbar>

      <md-field>
        <label>Name</label>
        <md-input v-model="file.name"></md-input>
      </md-field>

      <md-field>
        <label>Creator</label>
        <md-input v-model="file.creator"></md-input>
      </md-field>

      <md-field>
        <label>File Type</label>
        <md-input v-model="file.mime_type"></md-input>
      </md-field>

      <md-field>
        <label>Title</label>
        <md-input v-model="file.title"></md-input>
      </md-field>

      <md-field md-inline>
        <label>Version Number</label>
        <md-input v-model="version_number"></md-input>
      </md-field>

      <md-field>
        <label>Version Author</label>
        <md-input v-model="file.version_author"></md-input>
      </md-field>

      <md-field>
        <label>Version Date</label>
        <md-input v-model="file.version_date"></md-input>
      </md-field>

      <md-field>
        <label>Keywords Tags</label>
        <md-input v-model="file.key_words"></md-input>
      </md-field>

      <md-field>
        <label>File Size</label>
        <md-input v-model="file.file_size"></md-input>
      </md-field>
    </md-card>

    <div>
      <md-button class="md-raised md-primary" @click="submit(fileId, file)">Submit</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addFile',
  data() {
    return {
      file: {}
    };
  },
  methods: {
    submit(fileId, file) {
      this.$axios
        .post(`http://localhost:3000/files/${fileId}`, {
          name: FormData.name,
          creator: FormData.creator,
          mime_type: FormData.mime_type,
          version_number: FormData.version_number,
          version_author: FormData.version_author,
          keywords_tags: FormData.keywords_tags,
          file_size: FormData.file_size,
        })
        .then(response => {
          window.location.href = '/dash/';
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 750px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-button {
  align-items: right;
}
</style>