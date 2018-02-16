<template>
  <div class="screen-event">
    <app-header :current-user="currentUser"></app-header>
    <main>
      <section class="event">
        <header class="event__header">
          <h1 class="event__header-title">Event</h1>
          <button type="button" class="btn btn--primary btn--large" @click="showAddModal = true">&plus; Add event</button>
        </header>
        <event-list :events="events"></event-list>
      </section>

      <modal v-if="showAddModal" @close="showAddModal = false">
        <event-form slot="body" :token="csrfToken"></event-form>
      </modal>
    </main>
  </div>
</template>

<script>
  import appHeader from './layouts/AppHeader.vue';
  import eventList from './EventList.vue';
  import eventForm from './EventForm.vue';
  import modal from './Modal.vue';

  export default {
    data: function () {
      return { showAddModal: false };
    },
    components: {
      appHeader,
      eventList,
      eventForm,
      modal
    }
  };
</script>
