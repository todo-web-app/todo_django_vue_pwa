<template>
  <div id="app">
    <Navbar />
    <b-container fluid class="py-3 app-container">
      <router-view />
      <b-alert
        :show="updateExists"
        class="position-fixed fixed-bottom m-0 rounded-0"
        style="z-index: 2000;"
        variant="primary"
        dismissible
      >
        New update available!
        <a href="javascript:void(0);" @click="refreshApp" class="alert-link">Click to update!</a>
      </b-alert>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false
    };
  },
  name: "navbar",
  components: {
    Navbar
  },
  created() {
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

/* Trick */
body {
  display: flex;
  flex-direction: column;
}

footer {
  text-align: center;
  margin-top: auto;
}
</style>
