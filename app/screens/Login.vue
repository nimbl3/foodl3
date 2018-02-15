<template>
  <div class="login">
    <h1>Foodl3</h1>
    <a v-bind:href="loginUrl">
      <img alt="Sign in with Slack" height="40" width="172"
           src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
           srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"/>
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {};
    }
  };
</script>
