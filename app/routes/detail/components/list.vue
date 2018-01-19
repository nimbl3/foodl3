<template>
  <ul>
    <li v-for="order in orders">
      <div class="order-container">
        <div class="text-container">
          <p>Order Name : {{ order.name }}</p>
          <p>Link : {{ order.link }}</p>
          <userList :order="order" :users="order.users"></userList>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import userList from './detail/components/user-list.vue';

  export default {
    props: ['orders'],
    components: {
      userList: userList
    }
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
