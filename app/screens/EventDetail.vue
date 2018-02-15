<template>
  <div>
    <h2>{{event.name}}</h2>
    <dl>
      <dt>Detail</dt>
      <dd>{{event.description}}</dd>
      <dt>Event Ends At</dt>
      <dd>{{event.endDate}}</dd>
    </dl>
    <button type="button">Edit</button>
    <button type="button">Delete</button>

    <order-list :token="csrfToken" :event="event" :orders="orders"></order-list>

    <form method="post" :action="`/event/${eventId}/order/new`">
      <input type="hidden" name="_csrf" :value="csrfToken">
      <div>
        <label>Order Name</label>
        <input type="text" name="name" required>
      </div>
      <div>
        <label>Price</label>
        <input type="number" name="price">
      </div>
      <div>
        <label>Link</label>
        <input type="text" name="link">
      </div>
      <button type="submit">Add menu</button>
    </form>
  </div>
</template>

<script>
  import orderList from './OrderList.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      orderList: orderList
    }
  };
</script>
