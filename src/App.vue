<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@fa_path: "../node_modules/font-awesome/less";
@import "@{fa_path}/variables.less";
@import "@{fa_path}/mixins.less";
@import "@{fa_path}/path.less";
@import "@{fa_path}/core.less";
@import "@{fa_path}/icons.less";

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./fonts/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./fonts/Poppins-Regular.ttf) format("truetype");
}

html,
body {
  margin: 0;
  scroll-behavior: smooth;
}
#app {
  font-family: "Poppins", sans-serif;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090a0f;
  font-size: 16px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bitDao-highlight-text {
  background: -webkit-linear-gradient(#145d52, #20846c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
