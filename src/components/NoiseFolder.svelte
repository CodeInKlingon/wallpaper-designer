<script lang="ts">
  import { Folder, Checkbox, Slider } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Noise">
  <Checkbox bind:value={$controls.noise.enabled} label="Enable Noise" />
  <Slider
    bind:value={$controls.noise.size}
    min={1}
    max={100}
    label="Size"
  />
  <Slider
    bind:value={$controls.noise.opacity}
    min={0}
    max={100}
    label="Opacity"
  />
</Folder> 