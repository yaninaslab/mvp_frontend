<template>
  <div>
    <h1>New Arrivals Here</h1>
    <logout-button></logout-button>
    <item-catalog :number_of_items="10"></item-catalog>
  </div>
</template>

<script>
import ItemCatalog from "@/components/ItemCatalog.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "NewArrivals",
  components: {
    ItemCatalog,
    LogoutButton,
  },
};
</script>
