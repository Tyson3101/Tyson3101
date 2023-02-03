<script lang="ts">
  import { fade } from "svelte/transition";
  import Video from "../components/Video.svelte";
  const videos = [
    {
      name: "Epic R̶o̶c̶k̶e̶t̶ ̶L̶e̶a̶g̶u̶e̶ Montage #4",
      link: "https://www.youtube.com/watch?v=JCFk_F1M1-A&feature=youtu.be&ab_channel=Tyson3101",
      thumbnail:
        "https://i.ytimg.com/vi/JCFk_F1M1-A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgIFmx7sBw21IpJJXwsPAwGe0eBA",
      date: "Jan 16, 2023",
    },
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
      href="https://www.youtube.com/channel/UCDhbvtFFtYvv9kH-kcdVsWg"
      target="_blank"
      class="viewAllMsg">View All</a
    >
    {#each videos as video}
      <Video {...video} />
    {/each}
  </div>
</section>

<style>
  .videos {
    padding-bottom: 1em;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em;
    position: relative;
  }
  .info {
    margin-bottom: 1.3vh;
  }
  @media (max-width: 900px) {
    .videos {
      gap: 2vw;
    }
  }
</style>
