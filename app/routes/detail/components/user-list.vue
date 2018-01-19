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
