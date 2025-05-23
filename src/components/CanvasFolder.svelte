<script lang="ts">
  import { Folder, Point, Slider } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Canvas">
  <Point bind:value={$controls.size} label="Size" />
  <Slider
    bind:value={$controls.zoom}
    min={0.15}
    max={5}
    label="Zoom"
	/>
    <!-- step={0.1} -->
</Folder> 