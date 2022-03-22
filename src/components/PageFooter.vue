<template>
  <div>
    <footer class="footer">
      <h3>COACH STORE &copy; 2022</h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: darkgrey;
  color: white;
  min-height: 10vh;
  display: grid;
  place-items: center;
}
</style>
