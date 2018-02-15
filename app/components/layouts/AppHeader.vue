<template>
  <header class="app-header">
    <a class="logo" href="/">
      <span class="text-hide">Foodl3</span>
    </a>
    <div>
      <span>Hello {{ currentUser.name }}</span>
      <img class="avatar" :src=currentUser.avatar />
    <a href="/logout">Logout</a>
  </header>
</template>

<script>
  export default {
    data: function () {
      return {};
    },
    props: ['currentUser'],
  };
</script>

<!-- TODO: Remove this temporary styling -->
<style lang="scss">
  .avatar {
    width: 4rem;
    height: 4rem;
  }
</style>

