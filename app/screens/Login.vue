<template>
  <div class="screen login">
    <section class="authentication">
      <h1 class="authentication__logo">Foodl3</h1>
      <p class="authentication__taglines">Let’s eat together!</p>

      <a v-bind:href="loginUrl">
        <img class="authentication__with-slack"
             src="/assets/images/login@1x.png"
             srcset="/assets/images/login@2x.png"
             alt="Login with Slack">
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {};
    }
  };
</script>
