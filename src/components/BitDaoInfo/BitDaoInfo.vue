<template>
  <div class="bitDao-info-container">
    <div class="bitDao-info-image">
      <img class="animated slower fadeIn" src="@/assets/14.png" />
    </div>
    <div class="bitDao-info animated zoomIn delay-1s">
      <h2 class="bitDao-highlight-text">Why BITDAO ?</h2>
      <p>
        Decentralized Apps are making huge progress but the current blockchain
        ecosystem is not prepared to scale as per the demand.
        <br />
        <br />
        Lighting has failed to take off even after a decade.
        <br />
        The only options are centralised exchange transfers and pegged tokens
        but centralisation has huge counterparty and censorship risks
        <br />
        <br />
        BitDAO(BDAO) proposes a decentralised bitcoin pegged token that will
        track bitcoin closely.
        <br />
        BDAO token acts a governance and Defi token with APY of 15-50%. Any EOS
        token can act as collateral which actes ensures table within the pegged
        token.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BitDaoInfo extends Vue {}
</script>

<style scoped lang="less" src="./BitDaoInfo.less"></style>
