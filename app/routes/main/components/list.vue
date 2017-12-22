<template>
    <ul>
        <li v-for="listName in list">
          <a :href="`/detail/${listName.id}`">
            {{ listName.name }}
          </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['list']
}
</script>

<style lang="css">

</style>
