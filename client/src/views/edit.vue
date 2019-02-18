<template>
  <div class="file">
    <md-card>
      <div>
        <md-button class="md-raised md-primary" @click="cancel()">Cancel</md-button>
      </div>
      <form id="form" novalidate @submit.prevent>
        <h1>Version Date</h1>
        <md-field>
          <label>Name</label>
          <md-input type="text" disabled v-model="file.name"></md-input>
        </md-field>
        <md-field>
          <label>File Creator</label>
          <md-input type="text" disabled v-model="file.creator"></md-input>
        </md-field>
        <md-field>
          <label>Creation Date</label>
          <md-input input="text" disabled v-model="file.creation_date"></md-input>
        </md-field>
        <md-field>
          <label>File Type</label>
          <md-input type="text" disabled v-model="file.mime_type"></md-input>
        </md-field>

        <h1>New Information</h1>

        <md-field>
          <label>Title</label>
          <md-input type="text" v-model="file.data[file.data.length - 1].title"></md-input>
        </md-field>
        <md-field>
          <label>Version Number</label>
          <md-input type="number" v-model="file.data[file.data.length - 1].version_number"></md-input>
        </md-field>
        <md-field>
          <label>Version Author</label>
          <md-input type="text" v-model="file.data[file.data.length - 1].version_author"></md-input>
        </md-field>

        <div>
          <md-button 
          class="md-raised md-primary" @click="del(file._id)"
          >Delete File</md-button>
        </div>

        <div>
          <md-button
            class="md-raised md-primary"
            @click="submit(file._id, file.data[file.data.length - 1])"
          >Edit</md-button>
        </div>
      </form>
    </md-card>
  </div>
</template>


<script>
export default {
  name: "edit",
  data() {
    return {
      file: {}
    };
  },
  mounted() {
    const currentUrl = window.location.pathname.split("/");
    const fileId = currentUrl[2];

    console.log(fileId);
    this.$axios.get(`http://localhost:3000/files/${fileId}`).then(response => {
      console.log(response);
      this.file = response.data;
      console.log(this.file);
    });
  },
  methods: {
    cancel(file) {
      this.selected = file;
      window.location.href = `/dash`;
      console.log(this.selected);
      this.$router.go(0);
    },
  del(fileId) {
    this.$axios
      .delete(`http://localhost:3000/files/${fileId}`, {})
      .then(response => {

        
      });
  },
  submit(fileId, edited) {
    this.$axios
      .put(`http://localhost:3000/files/${fileId}`, {
        title: edited.title,
        version_number: edited.version_number,
        version_author: edited.version_author,
        version_date: edited.version_date
      })
      .then(response => {
        window.location.href = `/dash/`;
      });
    }
},
};

</script>
