<template>
  <div>
    <logout-button></logout-button>
    <item-catalog></item-catalog>
  </div>
</template>

<script>
import ItemCatalog from "@/components/ItemCatalog.vue";
import LogoutButton from "@/components/LogoutButton.vue";
export default {
  name: "Home",
  components: {
    ItemCatalog,
    LogoutButton,
  },
  methods: {
    get_items() {
      this.$store.dispatch("get_items");
    },
  },
  mounted() {
    this.get_items();
  },
};
</script>

<style scoped></style>
