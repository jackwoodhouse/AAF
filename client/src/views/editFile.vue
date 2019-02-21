<template>
  <div class="file">
     <md-card>
      <md-toolbar class="md-accent" md-elevation="1">
      <h3 align="left" class="md-title" style="flex: 1"> Version Information </h3> 
      </md-toolbar>
      <form id="form" novalidate @submit().prevent>
        <md-content>
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
        </md-content>
        <md-toolbar class="md-title" md-elevation="0">
      <h3 align="left" class="md-title" style="flex: 1"> New Information </h3> 
      
      </md-toolbar> <!-- veevalidation is used to ensure nothing is blank when submitting a file -->
        <md-field>
          <label>Title</label>
          <md-input type="text" v-model="file.data[file.data.length - 1].title"
          v-validate="'required'" name="title"></md-input>
          <span>{{ errors.first('title') }}</span>
        </md-field>
        <md-field>
          <label>Version Number</label>
          <md-input v-validate="'required'" name="version number" type="number"
          v-model="file.data[file.data.length - 1].version_number"></md-input>
          <span>{{ errors.first('version number') }}</span>
        </md-field>
        <md-field>
          <label>Version Author</label>
          <md-input v-validate="'required'" name="version author" type="text"
          v-model="file.data[file.data.length - 1].version_author"></md-input>
          <span>{{ errors.first('version author') }}</span>
        </md-field>
         <md-field>
           <label>Keywords</label>
          <md-input v-validate="'required'" name="keywords" type="text"
          v-model="file.data[file.data.length - 1].keywords_tags"></md-input>
          <span>{{ errors.first('keywords') }}</span>
        </md-field>
        <md-field>
          <label>File Size</label>
          <md-input v-validate="'required'" name="file size" type="text"
          v-model="file.data[file.data.length - 1].file_size"></md-input>
          <span>{{ errors.first('file size') }}</span>
        </md-field>
        <!-- validation of the form to ensure fields required in the database are blank -->
          <md-button :disabled="errors.any() || !isComplete" class="md-raised md-primary"
            @click="submit(file._id, file.data[file.data.length - 1])"
          >Submit</md-button>
        <md-button align="right" class="md-raised md-accent" @click="cancel()">Cancel</md-button>
        <md-button class="md-raised md-accent" @click="del(file._id)"
        >Delete File</md-button>

      </form>
    </md-card>
  </div>
</template>


<script>
export default {
    name: 'edit',
    data() {
        return {
            file: {},
        };
    },
    mounted() {
        const currentUrl = window.location.pathname.split('/');
        const fileId = currentUrl[2];
        this.$axios.get(`http://localhost:3000/files/${fileId}`).then(response => {
            this.file = response.data;
            // gets the selected file from the database using the id passed in the url from the dashboard
        });
    },
    methods: {
        isComplete() {
            return this.title && this.version_number && this.version_author
    && this.keywords_tags && this.file_size; 
    // basic validation for the submit buttons, checks to see if each row has information 
        },
        cancel() { // simple redirects
            window.location.href = '/dash';
        },
        del(fileId) { // deletes the given file that the user is editing 
            this.$axios.delete(`http://localhost:3000/files/${fileId}`, {
            })
                .then(response => {
                    window.location.href = '/dash';
                });
        },
        submit(fileId, edited) { // submits to the database the file and the new editied information
            this.$axios.put(`http://localhost:3000/files/${fileId}`, {
                title: edited.title,
                version_number: edited.version_number,
                version_author: edited.version_author,
                version_date: edited.version_date,
                keywords_tags: edited.keywords_tags,
                file_size: edited.file_size,
                
                })
                .then(response => {
                    window.location.href = '/dash/';
                })
                .catch(error => {
                    console.log('Error Updating');
                });
        },
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
