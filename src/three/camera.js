import { PerspectiveCamera } from "three"
import { scene, sizes } from "./base"


export const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)
