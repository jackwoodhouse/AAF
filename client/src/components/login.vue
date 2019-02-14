<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <router-link to="/dash"> <button type="button" v-on:click="login()">Login
        </button></router-link>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: '',
                password: '',
            },
        };
    },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
