<template>
  <ul>
    <li v-for="order in orders">
      <div class="order-container">
        <dl>
          <dt>Name</dt>
          <dd>{{order.name}}</dd>
          <dt>Price</dt>
          <dd>{{order.price}}</dd>
          <dt>Link</dt>
          <dd>{{order.link}}</dd>
          <user-list :users="order.users"></user-list>
          <form :action="`/order/${order.id}/join`" method="post">
            <input type="hidden" name="_csrf" :value="token">
            <input type="hidden" name="event_id" :value="event.id">
            <button type="submit">Join</button>
          </form>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
  import userList from './UserList.vue';

  export default {
    props: ['token', 'event', 'orders'],
    components: {
      userList
    }
  };
</script>

<style lang="css">
  ul {
    list-style: none;
  }

  ul li {
    display: inline-block;
    padding-right: 1rem;
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
