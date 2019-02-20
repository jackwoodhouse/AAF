<template>
  <div class="file">
    <md-card>
      <form id="form" novalidate @submit().prevent>
        <md-content>
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
        </md-content>
        <h1>New Information</h1>
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
        <div>
          <md-button :disabled="errors.any() || !isComplete" class="md-raised md-primary"
            @click="submit(file._id, file.data[file.data.length - 1])"
          >Submit</md-button>
        <md-button class="md-raised md-accent" @click="cancel()">Cancel</md-button>
        <md-button class="md-raised md-accent" @click="del(file._id)"
        >Delete File</md-button>
        </div>
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
        });
    },
    methods: {
        isComplete() {
            return this.title && this.version_number && this.version_author
    && this.keywords_tags && this.file_size;
        },
        cancel() {
            window.location.href = '/dash';
        },
        del(fileId) {
            this.$axios.delete(`http://localhost:3000/files/${fileId}`, {
            })
                .then(response => {
                    window.location.href = '/dash';
                });
        },
        submit(fileId, edited) {
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
