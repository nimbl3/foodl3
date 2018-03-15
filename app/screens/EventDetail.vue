<template>
  <div class="screen-event-detail">
    <app-header :current-user="currentUser"></app-header>
    <main>
      <section class="event">
        <header class="event__header">
          <h1 class="event__header-title">{{ event.name }}</h1>
        </header>
        <section class="event__body">
          <p>{{ event.description }}</p>
          <div class="event__action-bar">
            <p>{{ event.endDate }}</p>
            <ul class="action-list">
              <li class="action-list__item">
                <a href="/" class="action-list__action">
                  <i class="icon icon--edit"></i>
                  <span class="action-list__label">Edit</span>
                </a>
              </li>
              <li class="action-list__item">
                <a href="/" class="action-list__action">
                  <i class="icon icon--delete"></i>
                  <span class="action-list__label">Delete</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <order-list :token="csrfToken" :event="event" :orders="orders"></order-list>
      </section>
      <aside></aside>
    </main>

    <footer>
      <form class="form form--inline" method="post" :action="`/event/${eventId}/order/new`">
        <input type="hidden" name="_csrf" :value="csrfToken">
        <div class="form__group">
          <label for="orderName" class="form__sr">Order Name</label>
          <input id="orderName" type="text" name="name" placeholder="Name" required>
        </div>
        <div class="form__group">
          <label for="orderPrice" class="form__sr">Price</label>
          <input id="orderPrice" type="number" name="price" placeholder="Price">
        </div>
        <div class="form__group">
          <span class="amount">
            <button type="button" class="amount__minus">
              <i class="icon icon--minus"></i>
            </button>
            <span class="amount__value">1</span>
            <button type="button" class="amount__plus">
              <i class="icon icon--plus"></i>
            </button>
          </span>
        </div>
        <div class="form__group">
          <label for="orderLink" class="form__sr">Link</label>
          <input id="orderLink" type="text" name="link" placeholder="Link">
        </div>
        <button type="submit" class="btn btn--primary">&plus; Add Menu</button>
      </form>
    </footer>
  </div>
</template>

<script>
  import appHeader from './layouts/AppHeader.vue';
  import orderList from './OrderList.vue';

  export default {
    data: function () {
      return {};
    },
    components: {
      appHeader,
      orderList
    }
  };
</script>
