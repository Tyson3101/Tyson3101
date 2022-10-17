<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import TypescriptIcon from "./assets/icons/tools/Typescript.svelte";
  import JavascriptIcon from "./assets/icons/tools/Javascript.svelte";
  import HTMLIcon from "./assets/icons/tools/HTML.svelte";
  import CSSIcon from "./assets/icons/tools/CSS.svelte";
  import NodeJsIcon from "./assets/icons/tools/NodeJs.svelte";
  import Navbar from "./lib/Navbar.svelte";
  console.log("Tyson3101");
</script>

<main>
  <Navbar />
  <section class="index">
    <p class="info">
      Hi, I am Tyson.<br /><span
        transition:fade={{ duration: 1500, delay: 300 }}
        >Rocket League GC, Typescript Main.</span
      >
    </p>
    <div class="links">
      <h3>{"< "}Links{" />"}</h3>
      <ul>
        <li transition:fly={{ x: -1000, duration: 2000 }}>
          <a href="https://www.youtube.com/channel/UCDhbvtFFtYvv9kH-kcdVsWg"
            >Youtube</a
          >
        </li>
        <li transition:fly={{ x: 1000, duration: 2000 }}>
          <a href="https://github.com/Tyson3101">Github</a>
        </li>
        <li transition:fly={{ x: -1000, duration: 2000 }}>
          <a href="https://twitter.com/tysonf3101">Twitter</a>
        </li>
      </ul>
    </div>
    <div>
      <h5>Tools I am familer with:</h5>
      <div style="display: flex;">
        <p transition:fly={{ x: -1000, duration: 1000 }}><TypescriptIcon /></p>
        <p transition:fly={{ x: -1000, duration: 1000, delay: 300 }}>
          <JavascriptIcon />
        </p>
        <p transition:fade={{ delay: 1200 }}><HTMLIcon /></p>
        <p transition:fly={{ x: 1000, duration: 1000, delay: 300 }}>
          <CSSIcon />
        </p>
        <p transition:fly={{ x: 1000, duration: 1000 }}><NodeJsIcon /></p>
      </div>
    </div>
  </section>
</main>
