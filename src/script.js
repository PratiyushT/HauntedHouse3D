
import { scene, gui, } from './three/base'
import { floor} from './three/objects'
import { ambientLight, moonLight } from './three/lights'
import { camera } from './three/camera'
import { tick } from './three/renderer'

import resizeScreen from './three/resizeScreen'

//SCENE
scene.add(floor)
scene.add(ambientLight)
scene.add(moonLight)
scene.add(camera)
// GUI
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
//Resize
resizeScreen();
//Render and animate
tick()