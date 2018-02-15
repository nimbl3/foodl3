<template>
  <div>
    <a href="/logout">Logout</a>
    <h2>Events</h2>
    <form action="/event" method="post">
      <input type="hidden" name="_csrf" :value="csrfToken">
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Event Name" required>
      </div>
      <div>
        <label>Order time</label>
        <input type="datetime-local" name="end_date" required>
      </div>
      <div>
        <label>Details</label>
        <textarea name="description" placeholder="Event Details"></textarea>
      </div>
      <button type="submit">Add</button>
    </form>
    <event-list :events="events"></event-list>
  </div>
</template>

<script>
  import eventList from './events/_event-list.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      eventList: eventList
    }
  };
</script>
