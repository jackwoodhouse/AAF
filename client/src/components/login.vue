<template>
    <div>
        <form action="/login" method="onSubmit">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      login: {},
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/source/routes/auth/`, this.login)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token)
        this.$router.push({
          name: 'dash'
        })
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    }
  }
</script>