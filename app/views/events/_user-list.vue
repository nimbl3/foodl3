<template>
  <ul>
    <li v-for="user in users">
      <img class="avatar" :src="`${user.avatar}`"/>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['users']
  };
</script>

<style lang="css">
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 20px;
    border-radius: 100%;
  }
</style>
