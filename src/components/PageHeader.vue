<template>
  <div class="mx-auto overflow-hidden">
    <v-system-bar></v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer>
        <div class="nav_menu">
          <router-link class="links" to="/">Home</router-link>
          <router-link class="links" to="/deals">Deals</router-link>
          <router-link class="links" to="/newarrivals"
            >New Arrivals</router-link
          >
          <router-link class="links" to="/login">Login</router-link>
        </div>
      </v-spacer>

      <img class="logo" src="../assets/logo_mvp.png" alt="" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile_links" to="/"
                >Home</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile_links" to="/deals"
                >Deals</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile_links" to="/newarrivals"
                >New Arrivals</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile_links" to="/login"
                >Login</router-link
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "page-header",
  methods: {},
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.logo {
  max-width: 250px;
  height: 50px;
}
.nav_menu {
  display: grid;
  justify-self: end;
  grid-auto-flow: column;
  padding-right: 10px;
  column-gap: 10px;
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
@media only screen and (max-width: 768px) {
  .nav_menu {
    display: none;
  }
}
</style>
