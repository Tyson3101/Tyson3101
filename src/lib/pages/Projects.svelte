<script lang="ts">
  import { fade } from "svelte/transition";
  import Project from "../components/Project.svelte";

  const projects = [
    {
      name: "Medal Bypass",
      description: "Bypasses Medal Paywall",
      link: "https://github.com/Tyson3101/Medal-Bypass",
      language: "Typescript",
    },
    {
      name: "Auto Youtube Shorts Scroller",
      description: "Adds Autoscroll to YT Shorts",
      link: "https://github.com/Tyson3101/Auto-Youtube-Shorts-Scroller",
      language: "Typescript",
    },
    {
      name: "Bookmarks",
      description: "A Safe Bookmark Manager",
      link: "https://github.com/Tyson3101/Bookmarks",
      language: "Typescript",
    },
    {
      name: "Tic-Tac-Toe",
      description: "A fun online game of Tic Tac Toe",
      link: "https://github.com/Tyson3101/Tic-Tac-Toe",
      language: "Typescript",
    },
    {
      name: "Guess the Item",
      description: "A Rocket League Item Guesser Game",
      link: "https://github.com/Tyson3101/Guess-the-Item",
      language: "Typescript",
    },
    {
      name: "Redirect Stopper",
      description: "A Chrome Extension that blocks redirects.",
      link: "https://github.com/Tyson3101/Redirect-Stopper",
      language: "Typescript",
    },
  ];
</script>

<section name="projects" class="index" id="projects" data-scrollId="2">
  <p class="info">
    <a href="https://github.com/Tyson3101" target="_blank">My Projects</a><br
    /><span transition:fade={{ duration: 1500, delay: 300 }}
      >Open Source and Free</span
    >
  </p>
  <div class="projects">
    <a
      href="https://github.com/Tyson3101?tab=repositories"
      target="_blank"
      class="viewAllMsg">View All</a
    >
    {#each projects as project}
      <Project {...project} />
    {/each}
  </div>
</section>

<style>
  .projects {
    padding-bottom: 1em;
    display: flex;
    justify-content: center;
    gap: 1.3em;
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    .projects {
      gap: 3vw;
    }
  }
</style>
