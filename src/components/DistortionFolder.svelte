<script lang="ts">
  import { Folder, Checkbox } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Distortion">
  <Checkbox bind:value={$controls.distortion.enabled} label="Enable Distortion" />
</Folder> 