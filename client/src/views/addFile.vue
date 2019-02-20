<template>
  <div>
    <md-card>

      <md-table-toolbar>
        <h1 class="md-title">Add New File</h1>
      </md-table-toolbar>

    <md-field>
      <label>Name</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Creator</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>File Type</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Title</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field md-inline>
      <label>Version Number</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Version Author</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Version Date</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Keywords Tags</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>File Size</label>
      <md-input v-model="initial"></md-input>
    </md-field>
    </md-card>

    <div>
          <md-button
            class="md-raised md-primary"
            @click="submit(file._id, file.data[file.data.length - 1])"
          >Submit</md-button>
      </div>

  </div>
</template>

<script>
export default {
  name: "addFile",
  data() {
    return {
      file: {}
    };
  },
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