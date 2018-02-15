<template>
  <header class="app-header">
    <a class="logo" href="/">
      <span class="text-hide">Foodl3</span>
    </a>
    <div>
      <span>Hello {{ currentUser.name }}</span>
      <user-avatar :user="currentUser"></user-avatar>
    <a href="/logout">Logout</a>
  </header>
</template>

<script>
  import userAvatar from './UserAvatar.vue';
  export default {
    data: function () {
      return {};
    },
    props: ['currentUser'],
    components: {
      userAvatar
    }
  };
</script>

