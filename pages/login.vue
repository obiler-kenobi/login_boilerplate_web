<template>
  <div class="bg-blue-500 h-screen w-screen flex">
    <div class="bg-white m-auto w-3/12 p-5 rounded-lg">
      <h1>LOGIN </h1>
      <form @submit.prevent="userLogin">
        <input
          v-model="login.username"
          type="text"
          placeholder="username"
          class="border border-gray-300 p-2 block w-full my-2"
        >
        <input
          v-model="login.password"
          type="password"
          placeholder="password"
          class="border border-gray-300 p-2 block w-full my-2"
        >
        <button type="submit" class="bg-blue-500 text-white w-full p-3">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin () {
      const formData = new FormData()
      formData.append('username', this.login.username)
      formData.append('password', this.login.password)
      try {
        const response = await this.$auth.loginWith('local', { data: formData })
        if (response.status === 200) {
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
