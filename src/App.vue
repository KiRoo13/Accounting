<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      >
      <v-btn
       to="/about"
       
      >
       About
      </v-btn>
      <v-btn
       to="/"
       class="ml-2"
      >
       Main
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
