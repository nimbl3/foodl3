<template>
  <img class="avatar" :src=user.avatar />
</template>

<script>
  export default {
    props: ['user'],
  };
</script>

<!-- TODO: Remove this temporary styling -->
<style lang="scss">
  .avatar {
    width: 3rem;
    height: 3rem;
    margin-right: 20px;
    border-radius: 100%;
  }
</style>

