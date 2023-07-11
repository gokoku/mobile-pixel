<script>
  import "../app.postcss";
</script>

<slot />

<style>
  :global(body) {
    background-color: back-gray-300;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>