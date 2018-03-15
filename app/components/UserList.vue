<template>
  <ul class="user-list">
    <li class="user-list__item" v-for="user in users">
      <user-avatar :user=user></user-avatar>
    </li>
  </ul>
</template>

<script>
  import userAvatar from './UserAvatar.vue'

  export default {
    props: ['users'],
    components: {
      userAvatar
    }
  };
</script>
