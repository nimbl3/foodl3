<template>
  <table class="event-list">
    <thead>
    <tr class="event-list__divider">
      <th class="event-list__header">Event Name</th>
      <th class="event-list__header">Order Time</th>
      <th class="event-list__header">Member</th>
      <th class="event-list__header hidden"></th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="event in events" class="event-list__divider">
        <td>
          <a class="event-list__order" :href="`/detail/${event.id}`">{{ event.name }}</a>
        </td>
        <td>
          <span class="event-list__date">{{ event.endDate }}</span>
        </td>
        <td>
          <user-list :users=event.users></user-list>
        </td>
        <td class="hidden">
          <a href="/" class="event-list__action">
            <i class="icon icon--edit"></i>
            <span>Edit</span>
          </a>
          <a href="/" class="event-list__action">
            <i class="icon icon--delete"></i>
            <span>Delete</span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import userList from './UserList.vue';
  import eventForm from './EventForm.vue';

  export default {
    props: ['events'],
    components: {
      userList,
      eventForm
    },
    created() {
      console.log(this.events);
    }
  };
</script>
