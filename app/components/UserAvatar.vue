<template>
  <figure class="avatar avatar--large">
    <img class="avatar__image" :src=user.imageUrl alt="User profile picture">
  </figure>
</template>

<script>
  export default {
    props: ['user'],
  };
</script>

