<template>
  <div class= "addFile">
    <md-card>
      <md-table-toolbar>
        <h1 class="md-title">Add New File</h1>
      </md-table-toolbar>

      <md-field>
        <label>Name</label>
        <md-input name="name" type="text" v-model="file.name" v-validate="'required'"></md-input>
          <span>{{ errors.first('name') }} </span>
      </md-field>

      <md-field>
        <label>Creator</label>
        <md-input v-validate="'required'" name="creator" type="text" v-model="file.creator"></md-input>
          <span>{{ errors.first('creator') }} </span>
</md-field>
      <md-field>
        <label>File Type</label>
        <md-input v-validate="'required'" name="mime_type" type="text" v-model="file.mime_type"></md-input>
          <span>{{ errors.first('file type') }} </span>
</md-field>
      <md-field>
        <label>Title</label>
        <md-input v-validate="'required'" name="title" type="text" v-model="file.title"></md-input>
          <span>{{ errors.first('title') }} </span>
          </md-field>

      <md-field>
        <label>Version Number</label>
       <md-input v-validate="'required'"  name="version_number" type="number" v-model="version_number"></md-input>
          <span>{{ errors.first('version number') }}</span>
        </md-field>

      <md-field>
        <label>Version Author</label>
       <md-input v-validate="'required'" name="version_author" type="text" v-model="file.version_author"></md-input>
          <span>{{ errors.first('version author') }}</span>
        </md-field>
      <md-field>
        <label>Version Date</label>
       <md-input v-model="file.version_date"></md-input>
      </md-field>

      <md-field>
        <label>Keywords Tags</label>
         <md-input v-validate="'required'" name="keywords_tags" type="text" v-model="file.keywords_tags"></md-input>
          <span>{{ errors.first('keywords') }}</span>
        </md-field>

      <md-field>
        <label>File Size</label>
         <md-input v-validate="'required'" name="file_size" type="text" v-model="file.file_size"></md-input>
          <span>{{ errors.first('file size') }}</span>
          </md-field>
    </md-card>
    <div>
      <md-button :disabled="errors.any() || !isComplete" class="md-raised md-primary" @click="submit(file)">Submit</md-button>
      <md-button class="md-raised md-accent" @click="cancel()">Cancel</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addFile',
  data() {
    return {
      file: {
            name: "",
            creator: "",
            creation_date: new Date(),
            mime_type: "",
            title: "",
            version_number: "1",
            version_author: "",
            version_date: new Date(),
            keywords_tags: "",
            file_size: "",
      }
    };
  },
  methods: {
    submit(newFile) {
      this.$axios
        .post("http://localhost:3000/Files", {
              name: newFile.name,
              creator: newFile.creator,
              creation_date: newFile.creation_date,
              mime_type: newFile.mime_type,
              title: newFile.title,
              version_number: newFile.version_number,
              version_author: newFile.version_author,
              version_date: newFile.version_date,
              keywords_tags: newFile.keywords_tags,
              file_size: newFile.file_size,
            })
            .then(response => {
              window.location.href = '/dash/';
            })
    },
    cancel() {
            window.location.href = '/dash';
        },
    isComplete() {
            return this.name
            && this.creator
            && this.mime_type
            && this.title
            && this.version_number
            && this.version_author
            && this.keywords_tags
            && this.file_size;
        },
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