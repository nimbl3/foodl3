<template>
  <nav class="top-bar">
    <div class="top-bar__container">
      <a class="top-bar__brand" href="/">Foodl3</a>
      <ul class="top-bar__user">
        <li>
          <strong class="top-bar__greeting">Hello, {{ currentUser.name }}</strong>
        </li>
        <li>
          <user-avatar :user="currentUser"></user-avatar>
        </li>
        <li>
          <a href="/logout" class="top-bar__logout">Log out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import userAvatar from '../UserAvatar.vue';

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

