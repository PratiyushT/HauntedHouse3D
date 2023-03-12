import * as THREE from 'three'
import { BoxGeometry, ConeGeometry, DoubleSide, Group, Mesh, MeshStandardMaterial, PlaneGeometry, SphereGeometry } from 'three'
import { scene } from './base'
import { graves, house } from './groups'


//FLOOR
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: '#a9c388' })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
floor.material.side = DoubleSide

// Walls 
const walls = new Mesh(
    new BoxGeometry(4, 2.5, 4),
    new MeshStandardMaterial({
        color: "#ac8e82"
    }),
);
//Because the house is at the middle of the floor.
//So we will divide by 2 to get the position and move its half parts upwards
walls.position.y = 2.5 / 2

//ROOFS
const roof = new Mesh(
    new ConeGeometry(3.5, 1, 4),
    new MeshStandardMaterial({ color: "#b35f45" })
)

roof.position.y = 2.5 + 0.5; //Lenght of walls + cone height/2
roof.rotation.y = Math.PI / 4

//DOOR
const door = new Mesh(
    new PlaneGeometry(2, 2),
    new MeshStandardMaterial({ color: "#aa7b7b" })
);
door.position.y = 1
door.position.z = 4 / 2 + 0.01


//BUSHES
const bushGeometry = new SphereGeometry(1, 16, 16)
const bushMaterial = new MeshStandardMaterial({ color: "green" })

const bush1 = new Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(-1, 0.05, 2.6)

//HOUSE 
house.position.y = 0.01
house.add(walls, roof, door)
house.add(bush1, bush2, bush3, bush4)


//Grave

const graveMaterial = new MeshStandardMaterial({ color: "grey" })
const graveGemoetry = new BoxGeometry(0.4, 0.8, 0.1)

for (let i = 0; i < 50; i++) {

    const radius = 3 + Math.random() * 6
    const angle = Math.random() * Math.PI * 2

    const xAxis = Math.sin(angle) * radius
    const zAxis = Math.cos(angle) * radius

    const grave = new Mesh(graveGemoetry, graveMaterial)
    grave.position.set(xAxis, 0.31, zAxis)
    grave.rotation.y = (Math.random() - 0.5) * 0.6

    graves.add(grave)
}


scene.add(house, floor, graves)

