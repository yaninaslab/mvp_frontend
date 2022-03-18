<template>
  <div>
    <item-catalog></item-catalog>
  </div>
</template>

<script>
import ItemCatalog from "@/components/ItemCatalog.vue";
export default {
  name: "Home",
  components: {
    ItemCatalog,
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
