<template>
  <div class="bitDao-landing-container">
    <!-- <vue-particles
      color="#dedede"
      :particleOpacity="0.4"
      :particlesNumber="200"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
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
    </vue-particles> -->
    <div class="bitDao-landing-info-container">
      <h1>DeFi + Decentralised <br />pegged tokens on EOS</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as THREE from "three";
import * as dat from "dat.gui";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import VueParticles from "vue-particles";
// Vue.use(VueParticles);

@Component
export default class BitDaoLandingSection extends Vue {
  // $refs!: {
  //   bitDaoCanvas: HTMLCanvasElement;
  // };
  // private loader = new THREE.TextureLoader();
  // private images = require.context("@/assets/", false, /\.(jpg|png)$/);
  // private textureImg = this.images("./texture.jpg");
  // private heightImg = this.images("./cloud.png");
  // private aplhaImg = this.images("./alpha_texture.png");
  // private texture = this.loader.load(this.textureImg);
  // private height = this.loader.load(this.heightImg);
  // private alpha = this.loader.load(this.aplhaImg);

  // public async mounted(): Promise<void> {
  //   // Debug
  //   // const gui = new dat.GUI();

  //   // Canvas
  //   const canvas = this.$refs.bitDaoCanvas;

  //   // Scene
  //   const scene = new THREE.Scene();

  //   const sizes = {
  //     width:
  //       window.screen.width > 900
  //         ? window.screen.width * 0.5
  //         : window.screen.width,
  //     height: 500,
  //   };

  //   // Objects

  //   // const planeTextureGeometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);
  //   const polygonGeometry = new THREE.IcosahedronGeometry(1, 0);

  //   // Materials

  //   // const planeTextureMaterial = new THREE.MeshStandardMaterial({
  //   //   color: "gray",
  //   //   map: this.texture,
  //   //   displacementMap: this.height,
  //   //   displacementScale: 0.3,
  //   //   alphaMap: this.alpha,
  //   //   transparent: true,
  //   //   depthTest: false,
  //   // });

  //   const polygonMaterial = new THREE.MeshBasicMaterial({
  //     wireframe: true,
  //     color: "#dedede",
  //   });

  //   // Mesh
  //   // const planeTexture = new THREE.Mesh(
  //   //   planeTextureGeometry,
  //   //   planeTextureMaterial
  //   // );
  //   const polygon = new THREE.Mesh(polygonGeometry, polygonMaterial);
  //   scene.add(polygon);
  //   // planeTexture.rotation.x = 181;

  //   // Lights

  //   const pointLight = new THREE.PointLight(0xffffff, 0.1);
  //   pointLight.position.x = 2;
  //   pointLight.position.y = 3;
  //   pointLight.position.z = 4;
  //   scene.add(pointLight);

  //   /**
  //    * Sizes
  //    */
  //   window.addEventListener("resize", () => {
  //     // Update sizes
  //     sizes.width =
  //       window.screen.width > 900
  //         ? window.screen.width * 0.5
  //         : window.screen.width;
  //     sizes.height = 500;

  //     // Update camera
  //     camera.aspect = sizes.width / sizes.height;
  //     camera.updateProjectionMatrix();

  //     // Update renderer
  //     renderer.setSize(sizes.width, sizes.height);
  //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //     // renderer.setClearColor(0x000000, 0);
  //   });

  //   /**
  //    * Camera
  //    */
  //   // Base camera
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     sizes.width / sizes.height,
  //     0.1,
  //     100
  //   );
  //   camera.position.x = 0;
  //   camera.position.y = 0;
  //   camera.position.z = 2;
  //   scene.add(camera);

  //   // Controls
  //   // const controls = new OrbitControls(camera, canvas)
  //   // controls.enableDamping = true

  //   /**
  //    * Renderer
  //    */
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: canvas,
  //     alpha: true,
  //   });
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   // renderer.setClearColor(0x000000, 0);

  //   //Mosue Tracking
  //   document.addEventListener("mousemove", animateParticles);

  //   let mouseX = 0;
  //   let mouseY = 0;

  //   function animateParticles(event: MouseEvent) {
  //     mouseX = event.clientX;
  //     mouseY = event.clientY;
  //   }
  //   /**
  //    * Animate
  //    */

  //   const clock = new THREE.Clock();

  //   const tick = () => {
  //     const elapsedTime = clock.getElapsedTime();
  //     polygon.rotation.y = 0.5 * elapsedTime;
  //     // Update objects
  //     // planeTexture.rotation.z = 0.5 * elapsedTime;
  //     // planeTexture.material.displacementScale = 0.2 + mouseY * 0.0006;
  //     // Update Orbital Controls
  //     // controls.update()
  //     if (mouseX > 0) {
  //       polygon.rotation.x = -mouseY * (elapsedTime * 0.0008);
  //       polygon.rotation.y = -mouseX * (elapsedTime * 0.0008);
  //     }

  //     // Render
  //     renderer.render(scene, camera);

  //     // Call tick again on the next frame
  //     window.requestAnimationFrame(tick);
  //   };

  //   tick();
  //   // gsap.registerPlugin(CSSRulePlugin);
  // }
}
</script>

<style scoped lang="less" src="./BitDaoLandingSection.less"></style>
