
import * as dat from 'lil-gui'
import { Fog, Scene } from "three";

export const canvas = document.querySelector('canvas.webgl')
export const gui = new dat.GUI()
export const scene = new Scene()
export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
export const fog = new Fog("#262837", 1, 15);
scene.fog = fog;

