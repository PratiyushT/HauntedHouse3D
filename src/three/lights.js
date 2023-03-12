import { AmbientLight, DirectionalLight, PointLight } from "three";
import { gui, scene } from "./base";
import { house } from './groups'


const ambientLight = new AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)

const moonLight = new DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)


//DOORLIGHT
const doorLight = new PointLight("#ff7d46", 1, 7)
doorLight.position.set(0.2, 2.2, 2.7)
house.add(doorLight)


scene.add(ambientLight, moonLight)