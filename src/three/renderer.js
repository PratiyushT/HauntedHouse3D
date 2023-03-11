import { Clock, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { canvas, scene, sizes } from "./base"
import { camera } from "./camera"

// CONTROLS
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// RENDERER 
const renderer = new WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
export default renderer;

// ANIMATION 
const clock = new Clock(controls, renderer)
export const renderTick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Update Renderer
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderTick)
}

