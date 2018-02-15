<template>
  <ul>
    <li v-for="event in events">
      <a :href="`/detail/${event.id}`">
        {{ event.name }}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['events']
  };
</script>
