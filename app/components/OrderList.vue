<template>
  <table class="order-list">
    <thead>
    <tr>
      <th class="order-list__header">Order List</th>
      <th class="order-list__header">Amount</th>
      <th class="order-list__header">Link</th>
      <th class="order-list__header">Joiner</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="order in orders" class="order-list__divider">
      <td>
        <span class="order-list__order-name">{{ order.name }}</span>
        <span class="order-list__order-price">THB {{ order.price }}</span>
      </td>
      <td>
      <!--TODO: Implement the amount component interaction -->
      <span class="amount">
        <button type="button" class="amount__minus">
          <i class="icon icon--minus"></i>
        </button>
        <span class="amount__value">1</span>
        <button type="button" class="amount__plus">
          <i class="icon icon--plus"></i>
        </button>
      </span>
      </td>
      <td>
        <a :href="order.link">{{ order.link }}</a>
      </td>
      <td>
        <user-list :users="order.users"></user-list>
      </td>
    </tr>
    </tbody>
  </table>
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
