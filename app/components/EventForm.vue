<template>
  <form action="/event" method="post">
    <input type="hidden" name="_csrf" :value="token">
    <div>
      <label for="eventName">Name</label>
      <input id="eventName" type="text" name="name" placeholder="Event Name" required>
    </div>
    <div>
      <label for="eventEndDate">Order time</label>
      <input id="eventEndDate" type="datetime-local" name="end_date" required>
    </div>
    <div>
      <label for="eventDescription">Details</label>
      <textarea id="eventDescription" name="description" placeholder="Event Details"></textarea>
    </div>
    <button type="submit" class="btn btn--primary">Add</button>
  </form>
</template>

<script>
  export default {
    data: function () {
      return {};
    },
    props: ['token']
  };
</script>
