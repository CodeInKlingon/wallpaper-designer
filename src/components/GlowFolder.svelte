<script lang="ts">
  import { Folder, Checkbox, Slider, Color } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Glow">
  <Checkbox bind:value={$controls.glow.enabled} label="Enable Glow" />
  <Slider
    bind:value={$controls.glow.intensity}
    min={0}
    max={100}
    label="Intensity"
  />
  <Slider
    bind:value={$controls.glow.size}
    min={1}
    max={100}
    label="Size"
  />
  <Color bind:value={$controls.glow.color} label="Color" />
</Folder> 