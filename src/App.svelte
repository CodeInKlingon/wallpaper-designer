<script lang="ts">
  import { Pane } from 'svelte-tweakpane-ui'
  import CanvasFolder from './components/CanvasFolder.svelte'
  import ImageFolder from './components/ImageFolder.svelte'
  import DistortionFolder from './components/DistortionFolder.svelte'
  import NoiseFolder from './components/NoiseFolder.svelte'
  import GlowFolder from './components/GlowFolder.svelte'
//   import { controls } from './stores/controls'
</script>

<Pane position="draggable" title="Controls">
	<CanvasFolder />
	<ImageFolder />
	<DistortionFolder />
	<NoiseFolder />
	<GlowFolder />
</Pane>

<canvas id="canvas" style="aspect-ratio: 16/9; width: 100%;"></canvas>


