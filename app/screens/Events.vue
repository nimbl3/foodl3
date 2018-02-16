<template>
  <div class="screen-event">
    <app-header :current-user="currentUser"></app-header>
    <main>
      <form style="display: none" action="/event" method="post">
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

      <section class="event">
        <header class="event__header">
          <h1 class="event__header-title">Event</h1>
          <a href="/" class="btn btn--primary btn--large">&plus; Add event</a>
        </header>
        <event-list :events="events"></event-list>
      </section>
    </main>
  </div>
</template>

<script>
  import appHeader from './layouts/AppHeader.vue';
  import eventList from './EventList.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      appHeader,
      eventList
    }
  };
</script>
