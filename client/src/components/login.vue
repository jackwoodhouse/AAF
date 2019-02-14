<template>
    <div>    
        <h2>Welcome</h2>    
        <form v-on:submit="login">    
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />  
            <router-link to="/dash"> <button type="button" v-on:click="login()">Login
        </button></router-link>  
        </form>    
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
