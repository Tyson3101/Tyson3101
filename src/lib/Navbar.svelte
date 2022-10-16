<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiFillYoutube from "svelte-icons-pack/ai/AiFillYoutube";
  import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
  console.log("Tyson3101");
</script>

<header>
  <h1>Tyson3101</h1>
  <div>
    <a
      target="_blank"
      href="https://www.youtube.com/channel/UCDhbvtFFtYvv9kH-kcdVsWg"
    >
      <Icon src={AiFillYoutube} color={"red"} /></a
    >
    {">"}
    <a target="_blank" href="https://github.com/Tyson3101">
      <Icon src={AiFillGithub} color={"white"} /></a
    >
  </div>
</header>
