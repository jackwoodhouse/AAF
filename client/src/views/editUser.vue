<template>
  <div class="users"> 
    <md-card>
     <md-toolbar class="md-accent" md-elevation="1">
      <h3 align="left" class="md-title" style="flex: 1"> User Information </h3> 
      </md-toolbar>
      <form id="form" novalidate @submit.prevent>
        <md-content>
          <md-field>
            <label>Username</label>
            <md-input type="text" enabled v-model="user.username"></md-input>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input type="text" enabled v-model="user.password"></md-input>
          </md-field>
          <md-field>
            <label>First Name</label>
            <md-input type="text" enabled v-model="user.firstName"></md-input>
          </md-field>
          <md-field>
            <label>Last Name</label>
            <md-input type="text" enabled v-model="user.lastName"></md-input>
          </md-field>
          <md-field>
            <label>Email</label>
            <md-input input="text" enabled v-model="user.email"></md-input>
          </md-field>
          <md-field>
            <label>Phone</label>
            <md-input type="number" enabled v-model="user.phone"></md-input>
          </md-field>
        </md-content>
          <md-button class="md-raised md-accent" @click="del(user._id)">Delete File</md-button>
          <md-button class="md-raised md-accent" @click="cancel()">Cancel</md-button>
      </form>
  </md-card>
  </div>
</template>

<script>
export default {
  name: "users",

  data() {
    return {
      user: {}
    };
  },
  mounted() {
    const currentUrl = window.location.pathname.split("/");
    const userId = currentUrl[2];
    this.$axios.get(`http://localhost:3000/User/${userId}`).then(response => {
      this.user = response.data;
      // gets the user information using the id passed in the url from the dashboard
    });
  },
    methods: { // simple redirects through buttons
        cancel(user) {
          window.location.href = '/users';
      },
        del(userId) { // deletes the selected user 
          this.$axios
                .delete(`http://localhost:3000/User/${userId}`, {})
                .then(response => {
          window.location.href = '/users';
        });
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
