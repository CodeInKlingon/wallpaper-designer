<script lang="ts">
  import { Folder, Point } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Canvas">
  <Point bind:value={$controls.size} label="Size" />
</Folder> 