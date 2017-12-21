<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>Events</h2>
        <ul>
            <li v-for="event in events">
                {{ event.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    }
}
</script>

<style lang="css">

</style>
