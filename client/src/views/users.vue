
<template>
<div class="users">
  <md-card>
      <md-toolbar class="md-accent" md-elevation="1">
      <h3 align="left" class="md-title" style="flex: 1"> User Information </h3> 
      <md-button class="md-raised md-primary" @click="dash()">DashBoard</md-button>
      </md-toolbar>
    </md-card>
    <md-table md-card>

     <md-table-row>
        <md-table-head>UserName</md-table-head>
        <md-table-head>Password</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Phone</md-table-head>
      </md-table-row>
      <md-table-row md-selectable="single" class="users"
      v-for="users in users" :key="users._id" @click="onSelect(users._id)">
        <md-table-cell>{{ users.username }}</md-table-cell>
        <md-table-cell>{{ users.password }}</md-table-cell>
        <md-table-cell>{{ users.firstName }}</md-table-cell>
        <md-table-cell>{{ users.email }}</md-table-cell>
        <md-table-cell>{{ users.phone }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

export default {
    name: 'users',
    data() {
        return {
            users: null,
            selected: {},
        };
    },
    mounted() { // simple display of all user information in the database
        this.$axios
            .get('http://localhost:3000/User')
            .then((response) => {
                this.users = response.data;
            });
    },
    methods: {
        dash() {
            window.location.href = '/dash';
        },
        onSelect(user) { // redirects the user edit page with the specific user 
            this.selected = user;
            window.location.href = `/editUser/${user}`;
        },
    },
};

</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    position: absolute;
    padding: 50px;
  }
  .md-table-cell {
    align-items:center;
    padding-right: 150px;
  }
  .users {
    align-items:center;
    padding-left: 70px;
    padding-right: 50px;
  }
</style>
