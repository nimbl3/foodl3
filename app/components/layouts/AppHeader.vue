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
          <a href="/" class="top-bar__logout">Log out</a>
        </li>
      </ul>
    </div>


    <!--<a class="logo" href="/">-->
      <!--<span class="text-hide">Foodl3</span>-->
    <!--</a>-->
    <!--<div>-->
      <!--<span>Hello {{ currentUser.name }}</span>-->
      <!--<user-avatar :user="currentUser"></user-avatar>-->
    <!--<a href="/logout">Logout</a>-->
  </nav>
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

