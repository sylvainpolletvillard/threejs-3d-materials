import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, PointLight, MeshBasicMaterial, SphereGeometry, MeshStandardMaterial, Color, Fog, HemisphereLight, PlaneGeometry } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MATERIALS } from "threejs-3d-materials";

import './style.css'

const scene = new Scene();
scene.background = new Color( 0xa0a0a0 );
scene.fog = new Fog( 0xa0a0a0, 10, 50 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild( renderer.domElement );

const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera)

const controls = new OrbitControls( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 2, 1 );
controls.update();

const hemiLight = new HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 10, 0 );
scene.add( hemiLight );

const pointLightSphere = new Mesh( new SphereGeometry( 0.02, 8, 8 ), new MeshBasicMaterial( { color: 0xffff66 } ) );
const pointLight = new PointLight( 0xffffff, 1 )
pointLightSphere.add( pointLight );
pointLightSphere.position.set(2,2,0)
scene.add( pointLightSphere );

let currentMaterial=0;
const materialNames: string[] = Object.keys(MATERIALS)

const floor = new Mesh( new PlaneGeometry( 100, 100 ), new MeshStandardMaterial( { color: 0x888888, depthWrite: false } ) );
floor.position.set(0,-0.5,0)
floor.rotation.x = - Math.PI / 2;
scene.add( floor );

const geometry = new BoxGeometry( 1, 1, 1, 100, 100, 100 );
const cube = new Mesh( geometry, new MeshStandardMaterial({ color: 0x888888 }) );
scene.add( cube );

loadMaterial(0);

let t=0;
(function animate() {
	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

  pointLightSphere.position.set( Math.cos(t) , 0.25 + 0.7*Math.sin(t*0.5) , Math.sin(t));
  t += 0.01

	renderer.render( scene, camera );

})()

window.addEventListener('resize', function onResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


function loadMaterial(newMaterialIndex: number){
  currentMaterial = newMaterialIndex
  cube.material = MATERIALS[materialNames[currentMaterial]]
  document.getElementById("hud")!.textContent = Object.keys(MATERIALS)[currentMaterial]
}

window.addEventListener('keydown', e => {
  if(e.key === "ArrowDown" || e.key === "PageDown"){
    loadMaterial((currentMaterial + 1) % materialNames.length);
  } else if(e.key === "ArrowUp" || e.key === "PageUp"){
    loadMaterial((currentMaterial - 1 + materialNames.length) % materialNames.length);
  }
})