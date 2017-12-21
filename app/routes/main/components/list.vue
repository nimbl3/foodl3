<template>
    <ul>
        <li v-for="listName in list">
          {{ listName.name }}
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
