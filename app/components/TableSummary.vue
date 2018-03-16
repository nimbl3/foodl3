<template>
  <table class="table-summary">
    <caption class="table-summary__title">Order Summary</caption>
    <tfoot class="table-summary__footer">
      <tr>
        <td class="table-summary__column">
          <strong class="table-summary__total">Total</strong>
          <small class="table-summary__fee">* Exclude vat and delivery fee</small>
        </td>
        <td class="table-summary__column">THB {{ totalPrice }}</td>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="order in orders" class="table-summary__row">
        <td class="table-summary__column">{{ order.name }} x 1</td>
        <td class="table-summary__column">THB {{ order.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data: function () {
      return {};
    },
    props: ['orders'],
    computed: {
      totalPrice() {
        let price = 0;

        this.orders.map(order => {
          price += order.price;
        });

        return price;
      }
    }
  };
</script>
