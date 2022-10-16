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
    <p transition:fade={{ duration: 1000, delay: 100 }} class="info">
      Hi, I am Tyson. I live in Melbourne Australia!
    </p>
    <div>
      <h4 transition:fly={{ x: -1000, duration: 2000 }}>Latest Video</h4>
      <iframe
        transition:fly={{ x: 2000, duration: 2000, delay: 300 }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SEwyQpfAZ54"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div>
      <h5>Tools I am familer with:</h5>
      <TypescriptIcon />
      <JavascriptIcon />
      <HTMLIcon />
      <CSSIcon />
      <NodeJsIcon />
    </div>
  </section>
</main>
