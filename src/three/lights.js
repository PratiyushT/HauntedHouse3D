import { AmbientLight, DirectionalLight } from "three";

export const ambientLight = new AmbientLight('#ffffff', 0.5)

export const moonLight = new DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, - 2)