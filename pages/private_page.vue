<template>
  <div>This is a private page. Welcome {{ $auth.user.email }}</div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
