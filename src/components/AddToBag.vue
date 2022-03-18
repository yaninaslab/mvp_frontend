<template>
  <div>
    <div class="buttons">
      <button class="button">ADD TO BAG</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-to-bag",
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.button {
  width: 120px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  height: 30px;
  border: black solid;
}
</style>
