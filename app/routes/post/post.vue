<template>
    <div>
        <h3>{{message}}-request</h3>
        <p v-if="message === 'POST'">Request body: {{body}}</p>
        <form method="post">
            <input type="hidden" name="_csrf" :value="csrfToken">
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" type="text" name="username"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password"/>
            </div>
            <input type="submit"/>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style lang="css">
    div.form-group {
        padding: 5px;
    }

    div.form-group > * {
        padding: 5px;
    }

    div.form-group input {
        display: inline-block;
    }

</style>