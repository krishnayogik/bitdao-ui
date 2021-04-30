<template>
  <div id="home" class="bitDao-landing-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.4"
      :particlesNumber="200"
      shapeType="circle"
      :particleSize="4"
      linesColor="#f8a507"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="100"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="bitDao-landing-info-container">
      <h1 class="animated slow zoomIn">
        DeFi + Decentralised <br />pegged tokens on multi chain
      </h1>
      <div>
        <a
          class="fa fa-telegram"
          href="https://t.me/bitdao_chat"
          target="_blank"
        />
        <a
          class="fa fa-telegram"
          href="https://t.me/bitdao_chat"
          target="_blank"
        />
        <a
          class="fa fa-twitter"
          href="https://twitter.com/BitdaoNetwork?s=09"
          target="_blank"
        />
      </div>
      <a href="./BITDAOWhitepaper.pdf" target="_blank" class="button instagram">
        <span class="gradient"></span>View Whitepaper
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueParticles from "@/components/particles/vue-particles.vue";
@Component({
  components: {
    VueParticles,
  },
})
export default class BitDaoLandingSectionParticles extends Vue {}
</script>

<style scoped lang="less" src="./BitDaoLandingSectionParticles.less"></style>
