<template>
  <div class="screen-event-detail">
    <app-header :current-user="currentUser"></app-header>
    <main>
      <section class="event">
        <header class="event__header">
          <h1 class="event__header-title">{{ event.name }}</h1>
          <ul class="user-list">
            <li class="user-list__item">
              <figure class="avatar">
                <img class="avatar__image" src="/assets/images/icon-profile-yellow.svg" alt="User profile picture">
              </figure>
            </li>
            <li class="user-list__item">
              <figure class="avatar">
                <img class="avatar__image" src="/assets/images/icon-profile-yellow.svg" alt="User profile picture">
              </figure>
            </li>
            <li class="user-list__item">
              <figure class="avatar">
                <img class="avatar__image" src="/assets/images/icon-profile-yellow.svg" alt="User profile picture">
              </figure>
            </li>
            <li class="user-list__item">
              <figure class="avatar">
                <img class="avatar__image" src="/assets/images/icon-profile-yellow.svg" alt="User profile picture">
              </figure>
            </li>
            <li class="user-list__item">
              <figure class="avatar">
                <img class="avatar__image" src="/assets/images/icon-profile-yellow.svg" alt="User profile picture">
              </figure>
            </li>
          </ul>
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
      <aside>
        <section class="card">
          <table class="table-summary">
            <caption class="table-summary__title">Order Summary</caption>
            <tfoot class="table-summary__footer">
            <tr>
              <td class="table-summary__column">
                <strong class="table-summary__total">Total</strong>
                <small class="table-summary__fee">* Exclude vat and delivery fee</small>
              </td>
              <td class="table-summary__column">THB 990</td>
            </tr>
            </tfoot>
            <tbody>
            <tr class="table-summary__row">
              <td class="table-summary__column">Pepporoni x 1</td>
              <td class="table-summary__column">THB 210</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">Garlic Bread x 1</td>
              <td class="table-summary__column">THB 100</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">Hawaiian x 1</td>
              <td class="table-summary__column">THB 210</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">Chicken Wings x 1</td>
              <td class="table-summary__column">THB 100</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">CocaCola x 1</td>
              <td class="table-summary__column">THB 60</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">Cheese Pizza x 1</td>
              <td class="table-summary__column">THB 210</td>
            </tr>
            <tr class="table-summary__row">
              <td class="table-summary__column">Fries x 1</td>
              <td class="table-summary__column">THB 100</td>
            </tr>
            </tbody>
          </table>
        </section>

        <section class="card">
          <table class="table-summary">
            <tbody>
            <tr class="table-summary__row">
              <td class="table-summary__column table-summary__column--no-space">
                <strong class="table-summary__total">Price per person</strong>
                <small class="table-summary__fee">* Exclude vat and delivery fee</small>
              </td>
              <td class="table-summary__column">THB 165</td>
            </tr>
            </tbody>
          </table>
        </section>
      </aside>
    </main>

    <footer>
      <form class="form form--inline" method="post" :action="`/event/${eventId}/order/new`">
        <input type="hidden" name="_csrf" :value="csrfToken">
        <div class="form__group">
          <label for="order_name" class="form__sr">Order Name</label>
          <input type="text" id="order_name" value="Margarita Pizza">
        </div>
        <div class="form__group">
          <label for="order_price" class="form__sr">Order Price</label>
          <input type="number" id="order_price" placeholder="Price">
        </div>
        <div class="form__group">
          <label for="order_link" class="form__sr">Order Link</label>
          <input type="text" id="order_link" placeholder="Order Link">
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
