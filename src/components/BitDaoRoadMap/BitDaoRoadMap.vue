<template>
  <div id="roadMap" class="bitDao-roadmap-container">
    <h1 class="bitDao-highlight-text">BITDAO Roadmap</h1>
    <div class="timeline">
      <div
        class="timeline__event animated fadeInUp delay-3s timeline__event--type1"
      >
        <div class="timeline__event__icon">
          <i class="fa fa-birthday-cake"></i>
        </div>
        <div class="timeline__event__date">Q2'21</div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">BITDAO 0.1</div>
          <div class="timeline__event__description">
            <p>Pegged BTC with basic features</p>
          </div>
        </div>
      </div>
      <div
        class="timeline__event animated fadeInUp delay-2s timeline__event--type2"
      >
        <div class="timeline__event__icon">
          <i class="fa fa-tachometer"></i>
        </div>
        <div class="timeline__event__date">Q3'21</div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">BITDAO 0.5</div>
          <div class="timeline__event__description">
            <p>Pegged BTC with stress testing and go to market</p>
          </div>
        </div>
      </div>
      <div
        class="timeline__event animated fadeInUp delay-1s timeline__event--type3"
      >
        <div class="timeline__event__icon">
          <i class="fa fa-space-shuttle"></i>
        </div>
        <div class="timeline__event__date">Q4'21</div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">BITDAO 1.0</div>
          <div class="timeline__event__description">
            <p>
              Pegged BTC plus Pegged ETH / Euro / Yen / Naira with stress
              testing
            </p>
          </div>
        </div>
      </div>
      <div class="timeline__event animated fadeInUp timeline__event--type1">
        <div class="timeline__event__icon">
          <i class="fa fa-graduation-cap"></i>
        </div>
        <div class="timeline__event__date">Q2'22</div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">BITCOIN DAO 2.0</div>
          <div class="timeline__event__description">
            <p>Multichain - Polkadot / EOS / TELOS / BSC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BitDaoRoadMap extends Vue {}
</script>

<style scoped lang="less" src="./BitDaoRoadMap.less"></style>
