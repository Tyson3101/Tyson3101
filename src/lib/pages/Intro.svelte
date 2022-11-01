<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import TypescriptIcon from "../../assets/icons/tools/Typescript.svelte";
  import JavascriptIcon from "../../assets/icons/tools/Javascript.svelte";
  import HTMLIcon from "../../assets/icons/tools/HTML.svelte";
  import CSSIcon from "../../assets/icons/tools/CSS.svelte";
  import NodeJsIcon from "../../assets/icons/tools/NodeJs.svelte";
  import ReactIcon from "../../assets/icons/tools/React.svelte";
  import SvelteIcon from "../../assets/icons/tools/Svelte.svelte";
</script>

<section class="index" name="about" id="about" data-scrollId="1">
  <p class="info">
    Hi, I am Tyson.<br /><span transition:fade={{ duration: 1500, delay: 300 }}
      >Rocket League GC, Typescript Main.</span
    >
  </p>
  <div class="links">
    <p>{"< "}Links{" />"}</p>
    <ul>
      <li transition:fly={{ x: -1000, duration: 2000 }}>
        <a target="_blank" href="https://www.youtube.com/@Tyson3101">Youtube</a>
      </li>
      <li transition:fly={{ x: 1000, duration: 2000 }}>
        <a target="_blank" href="https://github.com/Tyson3101">Github</a>
      </li>
      <li transition:fly={{ x: -1000, duration: 2000 }}>
        <a target="_blank" href="https://twitter.com/tysonf3101">Twitter</a>
      </li>
      <li transition:fly={{ x: 1000, duration: 2000 }}>
        <a target="_blank" href="https://discord.com/users/397737988915724310"
          >Discord</a
        >
      </li>
      <li transition:fly={{ x: -1000, duration: 2000 }}>
        <a target="_blank" href="https://twitch.tv/xTyson3101">Twitch</a>
      </li>
    </ul>
  </div>

  <div class="tools">
    <p>Tools I am familer with:</p>
    <div style="display: flex;">
      <p transition:fly={{ x: -1000, duration: 1100, delay: 300 }}>
        <TypescriptIcon />
      </p>
      <p transition:fly={{ x: -1000, duration: 1100, delay: 200 }}>
        <JavascriptIcon />
      </p>
      <p transition:fly={{ x: -1000, duration: 1100, delay: 100 }}>
        <HTMLIcon />
      </p>
      <p transition:fade={{ delay: 1100, duration: 1000 }}>
        <CSSIcon />
      </p>
      <p transition:fly={{ x: 1000, duration: 1100, delay: 100 }}>
        <NodeJsIcon />
      </p>
      <p transition:fly={{ x: 1000, duration: 1100, delay: 200 }}>
        <ReactIcon />
      </p>
      <p transition:fly={{ x: 1000, duration: 1100, delay: 300 }}>
        <SvelteIcon />
      </p>
    </div>
  </div>
</section>

<style>
  .info {
    margin-bottom: 0.5em;
  }
  .tools *:not(p) {
    cursor: pointer;
  }
  .links p {
    font-size: 1.5em;
  }
  .links {
    position: relative;
    top: -25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .links ul {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    list-style: none;
  }

  .links ul li {
    width: 100%;
  }

  .links a {
    display: block;
    border-radius: 12px;
    transition: background-color ease-in 0.2s;
    background-color: gainsboro;
    color: black;
    font-family: Inter;
    text-decoration: none;
    padding: 0.1em;
  }

  .links a:hover {
    transition: background-color ease-in 0.2s;
    background-color: rgb(156, 152, 152);
  }

  @media (max-width: 800px) {
    .info > span {
      top: -20px;
    }
    .links ul {
      width: 80%;
    }
  }
</style>
