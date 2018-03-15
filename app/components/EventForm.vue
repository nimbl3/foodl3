<template>
  <form class="form" action="/event" method="post">
    <input type="hidden" name="_csrf" :value="token">
    <div class="form__group">
      <label for="eventName" class="form__label">Name</label>
      <input type="text" class="form__control" id="eventName" name="name" placeholder="Event Name" required>
    </div>
    <div class="form__group">
      <label for="eventEndDate" class="form__label">Order time</label>
      <input type="datetime-local" class="form__control" id="eventEndDate" name="end_date" required>
    </div>
    <div class="form__group">
      <label for="eventDescription" class="form__label">Details</label>
      <textarea id="eventDescription" class="form__control form__control--textarea" name="description" placeholder="Event Details"></textarea>
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
