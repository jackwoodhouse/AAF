<template>
  <div>
   <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <router-link to="/dash"> <button type="button" v-on:click="login()">Login
        </button></router-link>
    </div>
</template>>

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
    methods: {
        login() {
        },
    },
};

</script>