<template>
  <ul>
    <li v-for="order in list">
      <div class="order-container">
        <img class="avatar" :src="`${order.userAvatar}`"/>
        <div class="text-container">
          <p>Order Name : {{ order.name }}</p>
          <p>Link : {{ order.link }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['list']
  };
</script>

<style lang="css">
  ul {
    list-style: none;
  }

  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 20px;
    border-radius: 100%;
  }

  .order-container {
    display: inline-flex;
    margin-bottom: 10px;
    align-items: center;
    padding: 10px;
    border: 1px black solid;
    border-radius: 5px;
  }
</style>
