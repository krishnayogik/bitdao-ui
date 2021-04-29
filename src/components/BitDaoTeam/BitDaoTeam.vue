<template>
  <section id="team">
    <h1 class="bitDao-highlight-text">Meet The Team</h1>
    <div class="team-container">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        :class="`box animated delay-${member.id - 1}_5s zoomIn`"
      >
        <div class="user-icon">
          <img :src="getImageUrl(member.image)" alt="" />
        </div>
        <div class="user-name">{{ member.name }}</div>
        <div class="designation">{{ member.position }}</div>

        <div class="user-info">
          <a :href="member.linkedInUrl" target="_blank">
            <img src="@/assets/linkedin.svg" width="75" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BITDAOTeam from "@/constants/BITDAOTeam";

@Component
export default class BitDaoTeam extends Vue {
  private teamMembers = BITDAOTeam.teamMembers;

  getImageUrl(imageName: string): string {
    var images = require.context("@/assets/team/", false, /\.(png|jpg|jpeg)$/);
    return images("./" + imageName);
  }
}
</script>

<style scoped lang="less" src="./BitDaoTeam.less"></style>
