<template>
  <div>
    <a href="/logout">Logout</a>
    <h2>Events</h2>
    <form method="post">
      <input type="hidden" name="_csrf" :value="csrfToken">
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Event Name">
      </div>
      <div>
        <label>Order time</label>
        <input type="datetime-local" name="event_ends_at">
      </div>
      <div>
        <label>Details</label>
        <textarea name="description" placeholder="Event Details"></textarea>
      </div>
      <button type="submit" value="Submit">Create</button>
    </form>
    <list :list="events"></list>
  </div>
</template>

<script>
  import list from './main/components/list.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      list: list
    }
  };
</script>
