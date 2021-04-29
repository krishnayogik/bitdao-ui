<template>
  <div class="bitDao-solutions-container">
    <div class="bitDao-solutions-image">
      <img class="animated fadeIn" src="@/assets/15.png" />
    </div>
    <div class="bitDao-solutions animated delay-1s zoomIn">
      <h2 class="bitDao-highlight-text">Solution BITDAO Offers</h2>
      <p>
        BITCOIN chain is clogged as we speak with 500k transactins struck in
        mempool and this number is raising steadily.
        <br />
        DeFi Users love Ethereum but transaction charges are prohibitive
        <br />
        <br />
        <strong>
          EOS solves these problems. It is fast, cheap and decentralised (800+
          block producing validators)
        </strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BitDaosolutions extends Vue {}
</script>

<style scoped lang="less" src="./BitDaoSolutions.less"></style>