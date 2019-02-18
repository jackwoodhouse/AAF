<template>
  <div class="users">
    <md-card>
      <form id="form" novalidate @submit.prevent>
        <md-content>
          <h1>User Information</h1>
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
        <div>
          <md-button class="md-raised md-accent" @click="del(user._id)">Delete File</md-button>
        </div>

        <div>
          <md-button class="md-raised md-primary" @click="submit(user._id, user.data)">Submit</md-button>
        </div>

        <div>
          <md-button class="md-raised md-accent" @click="cancel()">Cancel</md-button>
        </div>
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

    console.log(userId);
    this.$axios.get(`http://localhost:3000/User/${userId}`).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    cancel(user) {
      window.location.href = `/users`;
    },
    del(userId) {
      this.$axios
        .delete(`http://localhost:3000/User/${userId}`, {})
        .then(response => {
          window.location.href = `/users`;
        });
    },
    onSelect(user) {
      this.selected = user;
      window.location.href = `/editUser/${user}`;
    },
    submit(userId, edited) {
      console.log();
      this.$axios
        .put(`http://localhost:3000/User/${userId}`, {
          username: edited.username,
          password: edited.password,
          firstName: edited.firstName,
          lastName: edited.lastName,
          email: edited.email,
          phone: edited.phone
        })
        .then(response => {
          window.location.href = `/users/`;
        })
        .catch(error => {
          console.log("Error Updating");
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
