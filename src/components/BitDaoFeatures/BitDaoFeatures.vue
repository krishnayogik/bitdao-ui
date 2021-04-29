<template>
  <div class="bitDao-features-container-with-header">
    <h2>BITDAO Features</h2>
    <div class="bitDao-features-container">
      <div class="bitDao-market animated slow zoomIn">
        <p>
          The demand for a decentralised Bitcoin n the side-chain is in the
          order of $50 billion, our aim is to capture 10% of that.
        </p>
      </div>
      <div class="bitDao-features">
        <div class="bitDao-features-images">
          <div class="animated delay-1s zoomIn">
            <img src="@/assets/decent.png" />
          </div>
          <div class="animated delay-2s zoomIn">
            <img src="@/assets/fast.png" />
          </div>
          <div class="animated delay-3s zoomIn">
            <img src="@/assets/low_fees.png" />
          </div>
          <div class="animated delay-4s zoomIn">
            <img src="@/assets/12.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BitDaoFeatures extends Vue {}
</script>

<style scoped lang="less" src="./BitDaoFeatures.less"></style>
