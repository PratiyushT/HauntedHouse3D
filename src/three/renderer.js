import { Clock, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { canvas, scene, sizes } from "./base"
import { camera } from "./camera"
import { ghostLight1, ghostLight2, ghostLight3 } from "./lights"

// CONTROLS
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// RENDERER 
const renderer = new WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor("#262837")
export default renderer;

// ANIMATION 
const clock = new Clock(controls, renderer)
export const renderTick = () => {
    const elapsedTime = clock.getElapsedTime()

    //Update Ghosts
    const ghost1Angle = elapsedTime * 0.5
    ghostLight1.position.x = Math.cos(ghost1Angle) * 4
    ghostLight1.position.z = Math.sin(ghost1Angle) * 4
    ghostLight1.position.y = Math.sin(elapsedTime * 2)

    const ghost2Angle = -elapsedTime * 0.2
    ghostLight2.position.x = Math.cos(ghost2Angle) * 7
    ghostLight2.position.z = Math.sin(ghost2Angle) * 7
    ghostLight2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.3)


    const ghost3Angle = -elapsedTime * 0.1
    ghostLight3.position.x = Math.cos(ghost3Angle) * (6 + Math.sin(elapsedTime + 0.6))
    ghostLight3.position.z = Math.sin(ghost3Angle) * (6 + Math.sin(elapsedTime + 0.3))
    ghostLight3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.3)

    // Update controls
    controls.update()

    // Update Renderer
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(renderTick)
}

