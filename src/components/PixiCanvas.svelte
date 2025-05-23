<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Application, Graphics } from 'pixi.js';
  import { Viewport } from 'pixi-viewport';
  import { controls } from '../stores/controls';

  let canvas: HTMLCanvasElement;
  let app: Application;
  let viewport: Viewport;
  let border: Graphics;

  // Subscribe to controls changes
  const unsubscribe = controls.subscribe((state) => {
    if (viewport && border) {
      // Update viewport world size
      viewport.worldWidth = state.size.x;
      viewport.worldHeight = state.size.y;

      // Update border
      border.clear();
      border.setStrokeStyle({width: 2, color: 0x000000});
      border.rect(0, 0, state.size.x, state.size.y);
      border.stroke();

      // Update zoom
      viewport.setZoom(state.zoom);

      // Recenter viewport
	//   viewport.moveCenter(state.size.x / 2, state.size.y / 2);
    }
  });

  onMount(async () => {
    // Create PIXI application
    app = new Application();
    await app.init({
      view: canvas,
      backgroundColor: 0xffffff,
      resizeTo: canvas,
      antialias: true,
    });

    // Create viewport
    viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: $controls.size.x,
      worldHeight: $controls.size.y,
      events: app.renderer.events,
    });

    // Add viewport to stage
    app.stage.addChild(viewport);

    // Create border
    border = new Graphics();
    border.setStrokeStyle({width: 2, color: 0x000000});
    border.rect(0, 0, $controls.size.x, $controls.size.y);
    border.stroke();
    viewport.addChild(border);

    // Activate plugins
    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate();

    // Set initial zoom
    viewport.setZoom($controls.zoom);

    // Center the viewport
    viewport.moveCenter($controls.size.x / 2, $controls.size.y / 2);

    // Handle resize
    window.addEventListener('resize', handleResize);

    // Update controls when zoom changes from viewport
    viewport.on('zoomed', () => {
      controls.update(state => ({ ...state, zoom: viewport.scale.x }));
    });
  });

  const handleResize = () => {
    app.renderer.resize(canvas.clientWidth, canvas.clientHeight);
    viewport.resize(canvas.clientWidth, canvas.clientHeight);
  };

  // Cleanup on component destroy
  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
    app.destroy(true, true);
    unsubscribe();
  });
</script>

<canvas
  bind:this={canvas}
  style="width: 100%; height: 100%;"
></canvas>