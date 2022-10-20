<script lang="ts">
  export let name: string;
  export let description: string;
  export let link: string;
  export let language: string;
</script>

<div class="project">
  <div class="projectHeader">
    <a target="_blank" href={link}><h1>{name}</h1></a>
    <p class="description">{description}</p>
  </div>
  <div class="projectFooter">
    <p class="language">{language}</p>
    <a target="_blank" href={link}>Vist Project</a>
  </div>
</div>

<style>
  .project {
    box-shadow: 1px 1px 10px 2px rgb(66, 63, 63);
    background-color: rgb(9, 9, 9);
    padding: 0.3em 0.3em;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: 45vw;
    min-height: 18vh;
    font-size: max(2vw, 1em);
    position: relative;
  }
  .project > * {
    margin-left: 0.1em;
  }
  h1 {
    font-size: 0.8em;
  }
  .description {
    font-size: 0.8em;
  }
  .language {
    font-size: 0.4em;
  }
  .projectFooter {
    position: absolute;
    width: 94%;
    bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 0.1em;
  }
  .projectFooter a {
    font-size: 0.6em;
  }
  a {
    color: inherit;
  }
</style>
