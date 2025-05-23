import { writable } from 'svelte/store';

interface GlowState {
	enabled: boolean;
	intensity: number;
	size: number;
	color: string;
}

interface DistortionState {
	enabled: boolean;
}

interface NoiseState {
	enabled: boolean;
	size: number;
	opacity: number;
}

interface ControlsState {
	size: { x: number; y: number };
	gizmosHidden: boolean;
	noise: NoiseState;
	distortion: DistortionState;
	glow: GlowState;
	zoom: number;
}

const initialState: ControlsState = {
	size: { x: 1920, y: 1080 },
	gizmosHidden: false,
	noise: {
		enabled: false,
		size: 1,
		opacity: 50
	},
	distortion: {
		enabled: false,
	},
	glow: {
		enabled: false,
		intensity: 50,
		size: 20,
		color: '#ffffff'
	},
	zoom: 1
};

export const controls = writable<ControlsState>(initialState); 