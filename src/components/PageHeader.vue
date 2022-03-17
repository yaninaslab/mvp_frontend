<template>
  <div>
    <div class="mobile_header">
      <img class="logo_mobile" src="../assets/logo_mvp.png" alt="" />
      <div @click="showMobileMenu" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="menu_drop">
        <router-link class="mobile_links" to="/">Home</router-link>
        <router-link class="mobile_links" to="/deals">Deals</router-link>
        <router-link class="mobile_links" to="/newarrivals"
          >New Arrivals</router-link
        >
        <router-link class="mobile_links" to="/login">Login</router-link>
      </div>
    </div>
    <div class="nav_menu">
      <div class="pure-menu pure-menu-horizontal">
        <router-link class="links pure-menu-heading pure-menu-link" to="/"
          >Home</router-link
        >
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link class="links pure-menu-link" to="/deals"
              >Deals</router-link
            >
          </li>
          <li class="pure-menu-item">
            <router-link class="links pure-menu-link" to="/newarrivals"
              >New Arrivals</router-link
            >
          </li>
          <li class="pure-menu-item">
            <router-link class="links pure-menu-link" to="/login"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
      <img class="logo" src="../assets/logo_mvp.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  methods: {
    showMobileMenu() {
      this.classList.toggle("menu-drop");
    },
  },
  data() {
    return {
      isMobile: false,
    };
  },
};
</script>

<style scoped>
.mobile_header {
  max-width: 100%;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  min-height: 120px;
}
.mobile_header > .logo_mobile {
  justify-self: start;
  margin-left: 20px;
  width: 80px;
}
.nav_menu {
  display: flex;
  justify-content: start;
  grid-auto-flow: column;
  /* margin-left: 20px; */
}
.bar {
  width: 25px;
  height: 3px;
  background-color: #2c3e50;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  display: block;
}
.hamburger {
  display: block;
  justify-self: center;
  cursor: pointer;
}
.logo {
  margin-top: 10px;
  max-width: 250px;
  /* margin-left: 100px; */
}
.links {
  font-size: 1.5rem;
  color: #2c3e50;
  text-decoration: none;
}
.mobile_links {
  font-size: 1.2rem;
  color: #2c3e50;
  font-stretch: expanded;
  text-decoration: none;
}
.menu_drop {
  display: none;
  position: absolute;
  width: 100%;
  top: 70px;
  background-color: lightgrey;
  color: white;
  z-index: 99;
}
.hamburger:hover + .menu_drop {
  display: grid;
  place-content: center;
  row-gap: 10px;
  margin-top: 5%;
  z-index: 99;
}
@media only screen and (min-width: 300px) {
  .nav_menu {
    display: none;
  }
  .bar {
    display: grid;
  }
}
@media only screen and (min-width: 668px) {
  .bar {
    display: none;
  }
  .mobile_header {
    display: none;
  }
  .nav_menu {
    width: 90%;
    min-height: 5vh;
    display: grid;
    place-items: center;
    grid-auto-flow: column;
  }
  .nav_menu.active {
    left: 0;
  }
}
</style>
