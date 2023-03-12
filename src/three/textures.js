import { RepeatWrapping, TextureLoader } from "three";


const textureLoader = new TextureLoader()

// DOOR 
export const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
export const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
export const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
export const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
export const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
export const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
export const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');

// BRICKS 
export const brickColorTexture = textureLoader.load('/textures/bricks/color.jpg')
export const brickAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
export const brickNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
export const brickRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')

// BRICKS 
export const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
export const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
export const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
export const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')


grassColorTexture.repeat.set(8, 8)
grassAmbientOcclusionTexture.repeat.set(8, 8)
grassNormalTexture.repeat.set(8, 8)
grassRoughnessTexture.repeat.set(8, 8)

grassColorTexture.wrapS = RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = RepeatWrapping;
grassNormalTexture.wrapS = RepeatWrapping;
grassRoughnessTexture.wrapS = RepeatWrapping;

grassColorTexture.wrapT = RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = RepeatWrapping;
grassNormalTexture.wrapT = RepeatWrapping;
grassRoughnessTexture.wrapT = RepeatWrapping;