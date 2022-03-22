<template>
  <div>
    <h1>Your Best Deals Here</h1>
    <logout-button></logout-button>
    <item-catalog :number_of_bags="6"></item-catalog>
  </div>
</template>

<script>
import ItemCatalog from "@/components/ItemCatalog.vue";
import LogoutButton from "@/components/LogoutButton.vue";
export default {
  name: "Deals",
  components: {
    ItemCatalog,
    LogoutButton,
  },
  methods: {
    get_bags() {
      this.$store.dispatch("get_bags");
    },
  },
  mounted() {
    this.get_bags();
  },
};
</script>
