<script lang="ts">
  import { onMount, afterUpdate } from "svelte";

  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/pages/Projects.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Contact from "./lib/pages/Contact.svelte";

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const pages = {
    home: {
      background: "#110a15",
      primary: "#8e91f6",
      accent: "#2f36ee",
      secondary: "#03052a",
    },
    projects: {
      background: "#0a40bf",
      primary: "#22374f",
      accent: "#0a0508",
      secondary: "#bdefda",
    },
    contact: {
      background: "#684a70",
      primary: "#9fcee9",
      secondary: "#1a191a",
      accent: "#9fa9e9",
    },
  };

  function changeCSSVariable(name: string, value: string) {
    document.documentElement.style.setProperty(name, value);
  }

  let changingPage = false;
  let activePage = window.location.hash
    ? window.location.hash.slice(1)
    : "home";
  window.onhashchange = () => {
    activePage = window.location.hash ? window.location.hash.slice(1) : "home";
  };

  let squares: number[] = [];

  function createGridBackground() {
    squares = Array(100).fill(0);
  }

  async function handlePages(page?: any) {
    if (changingPage) return;
    changingPage = true;

    const oldDOMEle = document.getElementById(activePage) as HTMLDivElement;
    if (oldDOMEle) oldDOMEle.style.display = "none";

    const nextPage =
      Object.keys(pages)[
        Object.keys(pages).findIndex((key) => key === activePage) + 1
      ] || "home";

    const newActivePage = typeof page === "string" ? page : null || nextPage;
    document.body.style.background = pages[newActivePage].background;

    const newBackground = pages[newActivePage].background;
    const allSquares = [...document.querySelectorAll(".square")].sort(
      () => Math.random() - 0.5
    ) as HTMLDivElement[];

    for (const square of allSquares) {
      square.style.backgroundColor = newBackground;
      await wait(Math.random() * 20);
    }

    Object.keys(pages[activePage]).forEach((key: string) => {
      changeCSSVariable(`--${key}`, pages[activePage][key]);
    });

    document.body.style.background = pages[newActivePage].background;

    await wait(400);
    window.location.hash = newActivePage;
    activePage = newActivePage;
    changingPage = false;
  }

  onMount(() => {
    createGridBackground();
    changeCSSVariable("--square-bg", pages[activePage].background);
    Object.keys(pages[activePage]).forEach((key: string) => {
      changeCSSVariable(`--${key}`, pages[activePage][key]);
    });
    document.body.style.background = pages[activePage].background;
  });

  afterUpdate(() => {
    createGridBackground();
  });
</script>

<Navbar pages={{ ...pages }} {handlePages} />
<div class="grid">
  {#each squares as _, index}
    <div class="square" on:click={handlePages} on:keydown={handlePages} />
  {/each}
</div>

<main>
  {#if activePage === "home"}
    <Home />
  {/if}
  {#if activePage === "projects"}
    <Projects />
  {/if}
  {#if activePage === "contact"}
    <Contact />
  {/if}
</main>

<style>
  :root {
    --square-bg: #110a15;
    --primary: #8e91f6;
    --secondary: #03052a;
    --accent: #2f36ee;
  }

  .grid {
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  .square {
    background-color: var(--square-bg);
    transition: background-color 0.5s ease-in-out;
  }
</style>
