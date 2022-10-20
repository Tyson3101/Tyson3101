<script lang="ts">
  export let name: string;
  export let thumbnail: string;
  export let link: string;
  export let date: string;
</script>

<div class="video">
  <div class="videoHeader">
    <a target="_blank" href={link}>
      <img src={thumbnail} alt="YT Thumbnail" /></a
    >
    <hr />
    <a target="_blank" class="title" href={link}>{name}</a>
  </div>
  <div class="videoFooter">
    <p class="date">{date}</p>
    <a target="_blank" href={link}>View Video</a>
  </div>
</div>

<style>
  .video {
    box-shadow: 1px 1px 10px 2px rgb(66, 63, 63);
    background-color: rgb(9, 9, 9);
    padding: 0.3em 0.3em;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    min-height: 28vh;
    width: 30vw;
    font-size: max(2vw, 1em);
    position: relative;
  }
  .video img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(0, 0, 0);
  }
  .videoHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .videoHeader .title {
    font-size: 0.5em;
    text-decoration: none;
  }
  .date {
    font-size: 0.4em;
  }
  .videoFooter {
    position: absolute;
    width: 94%;
    bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 0.1em;
  }
  .videoFooter a {
    font-size: 0.5em;
    position: relative;
    right: 0.46em;
  }
  a {
    color: inherit;
  }
</style>
