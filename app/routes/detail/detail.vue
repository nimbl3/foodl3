<template>
  <div>
    <h2>{{detail.name}}</h2>
    <div class="detail-container">
      <p>Detail : </p>
      <div>{{detail.description}}</div>
    </div>
    <form method="post" :action="`/order/${eventId}`">
      <input type="hidden" name="_csrf" :value="csrfToken">
      Order Name : <input type="text" name="order"><br>
      Link : <input type="text" name="link"><br>
      <button type="submit" value="Submit">Comment</button>
    </form>
    <list :list="orders"></list>
  </div>
</template>

<script>
  import list from './detail/components/list.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      list: list
    }
  };
</script>

<style lang="css">
  .detail-container {
    margin-bottom: 30px;
  }
</style>
