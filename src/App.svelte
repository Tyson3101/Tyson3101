<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/pages/Projects.svelte";
  import Intro from "./lib/pages/Intro.svelte";
  let showLatestVideo = false;
  function toggleLatest() {
    showLatestVideo = !showLatestVideo;
    document.querySelector("body").style.overflowY = showLatestVideo
      ? "hidden"
      : "scroll";
  }
</script>

<Navbar />
<main>
  <Intro />
  <Projects />
  {#if showLatestVideo}
    <div id="overlay" on:click={toggleLatest} on:keydown={toggleLatest} />
    <div id="overlayContent">
      <h1>Latest Video</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SEwyQpfAZ54"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  {/if}
  <br />
  <div class="bottom">
    <p
      class="clickable showLatestVideo"
      on:keydown={toggleLatest}
      on:click={toggleLatest}
    >
      Show latest video
    </p>
    <p>Scroll to see more</p>
  </div>
</main>
