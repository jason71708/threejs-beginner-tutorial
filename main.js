import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/*
  Setup
*/
const scene = new THREE.Scene() // scene is like container
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 20
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera) // render is like draw

/*
  Add simple object
*/
const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 2, 240, 100, 5, 9)
const torusKnotMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 }) // need to light
const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial) // mesh = geometry + material
torusKnot.position.set(10, 20, 5)

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(5, 2, 32, 100),
  new THREE.MeshBasicMaterial({ color: '#e18', wireframe: true }) // wrapping paper for an object
)

scene.add(torus)
scene.add(torusKnot)

/*
  Add light
*/
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(10, 10, 15)
const ambientLight = new THREE.AmbientLight('#444') // This light globally illuminates all objects in the scene equally.
scene.add(pointLight, ambientLight)

/*
  Add Helper
*/
// const lightHelper = new THREE.PointLightHelper(pointLight) // Can let us see the light position
// const gridHelper = new THREE.GridHelper(200, 50) // Add a grid plane
// scene.add(lightHelper, gridHelper)

/*
  Add OrbitControl
*/
// const controls = new OrbitControls(camera, renderer.domElement) // Listen the dom element on mouse event and change the camera's position

/*
  Add Random Stars
*/
function addStar() {
  const geometries = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometries, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}
Array(200).fill().forEach(addStar) // just for repeat add star function

/*
  Add Background with static assets
*/
const spaceTexture = new THREE.TextureLoader().load('./assets/background.jpeg')
scene.background = spaceTexture

/*
  Add texture on object
*/
const avatarTexture = new THREE.TextureLoader().load('./assets/avatar.png')
const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(10, 20, 20),
  new THREE.MeshBasicMaterial({ map: avatarTexture })
)
avatar.position.set(-20, 0, -10)

const moonTexture = new THREE.TextureLoader().load('./assets/moon.jpeg')
const normalTexture = new THREE.TextureLoader().load('./assets/normal.jpeg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  })
)
moon.position.set(-10, 10, 20)

scene.add(avatar)
scene.add(moon)

/*
 Moving Camera when user scroll
*/
function moveCamera() {
  const t = document.body.getBoundingClientRect().top

  moon.rotation.x += 0.05
  moon.rotation.y += 0.01
  moon.rotation.z += 0.05

  avatar.rotation.y += 0.01
  avatar.rotation.z += 0.001

  camera.position.z = 20 + t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera
moveCamera()

/*
  Animate
*/
function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.005
  torus.rotation.y += 0.001
  torus.rotation.z += 0.01

  torusKnot.position.x += 0.01

  // controls.update()

  renderer.render(scene, camera)
}

animate()
