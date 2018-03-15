<template>
  <table class="event-list">
    <thead>
      <tr>
        <th class="event-list__header">Order List</th>
        <th class="event-list__header">Amount</th>
        <th class="event-list__header">Link</th>
        <th class="event-list__header">Joiner</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" class="event-list__divider">
        <td>
          <span class="event-list__order-name">{{ order.name }}</span>
          <span class="event-list__order-price">THB {{ order.price }}</span>
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
