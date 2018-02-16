<template>
  <!--<ul>-->
    <!--<li v-for="event in events">-->
      <!--<a :href="`/detail/${event.id}`">-->
        <!--{{ event.name }}-->
      <!--</a>-->
    <!--</li>-->
  <!--</ul>-->

  <table class="event-list">
    <thead>
    <tr class="event-list__divider">
      <th class="event-list__header">Event Name</th>
      <th class="event-list__header">Order Time</th>
      <th class="event-list__header">Member</th>
      <th class="event-list__header"></th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="event in events">
        <!--<a :href="`/detail/${event.id}`">-->
          <!--{{ event.name }}-->
        <!--</a>-->

        <td>
          <a class="event-list__order" href="/">{{ event.name }}</a>
        </td>
        <td>
          <span class="event-list__date">{{ event.endDate }}</span>
        </td>
        <td>
          <ul class="user-list">
          </ul>
        </td>
        <td>
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
  export default {
    props: ['events']
  };
</script>
