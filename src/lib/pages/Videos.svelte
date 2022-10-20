<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import Video from "../components/Video.svelte";
  const videos = [
    {
      name: "[EASY] How to Download Medal Clips Without Watermarks for Free. (2022)",
      link: "https://www.youtube.com/watch?v=SEwyQpfAZ54",
      thumbnail:
        "https://i.ytimg.com/vi/SEwyQpfAZ54/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn-5NseoLxw_zofRpeMSAtfOO0rw",
      date: "Oct 2, 2022",
    },
    {
      name: "How to Auto Scroll/Play on TikTok! (plus YT Shorts)",
      link: "https://youtu.be/CF1yCAGoOLg",
      thumbnail:
        "https://i.ytimg.com/vi/CF1yCAGoOLg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXQjEj2eb1POVLmQg4bZ2AkjS-1A",
      date: "Aug 26, 2022",
    },
    {
      name: "Cool Yoru Outplays That Keep you Calm and Collected. #valorant",
      link: "https://youtu.be/vZl7HlMRWCM",
      thumbnail:
        "https://i.ytimg.com/vi/vZl7HlMRWCM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzwvSlxpEH99_MS2mjxdH6fZ0p0A",
      date: " Jul 23, 2022",
    },
    {
      name: "Epic Valorant Pranks That Always get a Good Laugh! 😂😂 Pt. 1",
      link: "https://youtu.be/lyNemFM4ZGs",
      thumbnail:
        "https://i.ytimg.com/vi/lyNemFM4ZGs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHnik7Y_pPjYtFZ0ijg_srpn8AJg",
      date: "Apr 22, 2022",
    },
    {
      name: "Epic Rocket League Montage #3",
      link: "https://youtu.be/paoIG5Uqv-A",
      thumbnail:
        "https://i.ytimg.com/vi/paoIG5Uqv-A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxr3B0lA3fGP3lRN4kLC1o5234Dw",
      date: "Jan 16, 2022",
    },
    {
      name: "Buzzing Bee with Perlin Noise | p5.js",
      link: "https://youtu.be/yeMV1xNY2og",
      thumbnail:
        "https://i.ytimg.com/vi/yeMV1xNY2og/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBL3PzqvzMnLuAmw4slXAz7e1OZjw",
      date: "Aug 2, 2021",
    },
  ];
</script>

<section name="videos" class="index" id="videos" data-scrollId="3">
  <p class="info">
    <a
      href="https://www.youtube.com/channel/UCDhbvtFFtYvv9kH-kcdVsWg"
      target="_blank">My Videos</a
    ><br /><span transition:fade={{ duration: 1500, delay: 300 }}
      >Random and Helpful</span
    >
  </p>
  <div class="videos">
    <a
      class="viewAllVideos"
      href="https://www.youtube.com/channel/UCDhbvtFFtYvv9kH-kcdVsWg"
      >View all videos</a
    >
    {#each videos as video}
      <Video {...video} />
    {/each}
  </div>
</section>

<style>
  .videos {
    padding-bottom: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
    position: relative;
  }
  .info {
    margin-bottom: 1.3vh;
  }
  .viewAllVideos {
    font-size: 0.8em;
    position: absolute;
    top: -7%;
    color: inherit;
  }
  @media (max-width: 900px) {
    .videos {
      gap: 2vw;
    }
  }
</style>
