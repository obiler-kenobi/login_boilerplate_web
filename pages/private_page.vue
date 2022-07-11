<template>
  <div>This is a private page. Welcome {{ $auth.user.full_name }}</div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
