
<template>
<div class="users">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">All Users</h1>
      </md-table-toolbar>
      <md-table-toolbar>
      <div>
          <md-button
            class="md-raised md-primary"
            @click="dash()"
          >Dash Board</md-button>
        </div>
      </md-table-toolbar>
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
    mounted() {
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
        onSelect(user) {
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
