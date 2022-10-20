<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import Project from "../components/Project.svelte";

  const projects = [
    {
      name: "Medal Bypass",
      description: "Bypasses Medal Paywall",
      link: "https://github.com/Tyson3101/Medal-Bypass",
      language: "Javascript",
    },
    {
      name: "Auto Tiktok Scroller",
      description: "Adds Autoscroll to TikTok",
      link: "https://github.com/Tyson3101/Auto-TikTok-Scroller",
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
      name: "Book Read Planner",
      description: "A Tool That Plans Your Read Schedule",
      link: "https://github.com/Tyson3101/BookReadPlanner",
      language: "HTML/CSS/JS",
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
