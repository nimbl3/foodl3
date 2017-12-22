<template>
    <div>
        <a href="/logout">Logout</a>
        <h2>Events</h2>
        <form method="post">
          <input type="hidden" name="_csrf" :value="csrfToken">
          Name : <input type="text" name="name"><br>
          Details : <textarea name="description" placeholder="add multiple lines"></textarea><br>
          <button type="submit" value="Submit">Create</button>
        </form>
        <list :list="events"></list>
    </div>
</template>

<script>
import list from './main/components/list.vue';

export default {
    data: function () {
        return {
        }
    },
    components: {
      list: list
    }
}
</script>

<style lang="css">

</style>
