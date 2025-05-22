<script lang="ts">
  import { Folder, Checkbox } from 'svelte-tweakpane-ui'
  import { controls } from '../stores/controls'
</script>

<Folder title="Image">
  <Checkbox bind:value={$controls.gizmosHidden} label="Hide Gizmos" />
</Folder> 