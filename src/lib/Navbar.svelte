<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiFillYoutube from "svelte-icons-pack/ai/AiFillYoutube";
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  function getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${`${day}`.length >= 2 ? day : `0${day}`}:${
      `${month}`.length >= 2 ? month : `0${month}`
    }:${year}`;
  }
</script>

<header>
  <h1>Tyson3101</h1>
  <p style="font-size: 0.6em;">{getCurrentDate()}</p>
</header>
