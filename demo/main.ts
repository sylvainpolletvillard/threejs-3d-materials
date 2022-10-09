import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, PointLight, MeshBasicMaterial, SphereGeometry, MeshStandardMaterial, Color, Fog, HemisphereLight, PlaneGeometry, CylinderGeometry, BufferGeometry } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { T3DMaterials, T3DMaterial, T3DMaterialCategory } from "threejs-3d-materials";

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

const materials: T3DMaterial[] = Object.values(T3DMaterials)
const categories: T3DMaterialCategory[] = materials.map(m => m.category).sort()

const floor = new Mesh( new PlaneGeometry( 100, 100 ), new MeshStandardMaterial( { color: 0x888888, depthWrite: false } ) );
floor.position.set(0,-0.5,0)
floor.rotation.x = - Math.PI / 2;
scene.add( floor );

const geometry = new BoxGeometry( 1, 1, 1, 100, 100, 100 );
const shape = new Mesh( geometry as BufferGeometry, new MeshStandardMaterial({ color: 0x888888 }) );
scene.add( shape );

let currentMaterial, currentGeometry;
buildMenuMaterials()
buildMenuGeometries()
loadMaterial(T3DMaterials.Wood_027)
loadGeometry("cube")

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


function loadMaterial(material: T3DMaterial){
  currentMaterial = material
  shape.material = material
  ;[...document.querySelectorAll("#menu-materials .selected")].forEach(el => el.classList.remove("selected"))
  document.querySelector(`li[data-material="${material.name}"]`)?.classList.add("selected")
  document.querySelector("#current-material")!.textContent = material.name
}

type DemoGeometry = "cube" | "sphere" | "cylinder";
function loadGeometry(geom: DemoGeometry){
  currentGeometry = geom
  const NB_SEGMENTS = 100
  switch(geom){
    case "cube": shape.geometry = new BoxGeometry( 1, 1, 1, NB_SEGMENTS, NB_SEGMENTS, NB_SEGMENTS ); break;
    case "cylinder": shape.geometry = new CylinderGeometry( .5, .5, 1, NB_SEGMENTS, NB_SEGMENTS ); break;
    case "sphere": shape.geometry = new SphereGeometry(.5, NB_SEGMENTS, NB_SEGMENTS); break;
  }
  ;[...document.querySelectorAll("#menu-geometries .selected")].forEach(el => el.classList.remove("selected"))
  document.querySelector(`li[data-geometry="${geom}"]`)?.classList.add("selected")
}

function h(tag: string, children: (HTMLElement|string)[], attrs?: { [attr: string]: any }): HTMLElement {
  const elm = document.createElement(tag)
  for(let child of children){
    if(child instanceof Element) elm.appendChild(child)
    else elm.appendChild(document.createTextNode(child))
  }
  if(attrs){
    for(let attr in attrs){
      elm.setAttribute(attr, attrs[attr])
    }
  }
  return elm
}

function buildMenuMaterials(){
  const menu = document.getElementById("menu-materials")!
  //menu.innerHTML = ""
  menu.appendChild(h("details", [
    h("summary", ["Materials"]),
    ...categories.map(category => h("details", [
      h("summary", [category]),
      h("ul", materials.filter(m => m.category === category).map(material => {
        const li = h("li", [material.name])        
        li.setAttribute("data-material", material.name)
        li.addEventListener("click", () => loadMaterial(material))
        return li
      }))
    ], { open: true }))
  ], { open: true }))
}

function buildMenuGeometries(){
  const menu = document.getElementById("menu-geometries")!
  const geometries: DemoGeometry[] = ["cube","sphere","cylinder"]
  menu.appendChild(
    h("ul", geometries.map(geom => {
      const li = h("li",
        [ h("img", [], { src: `img/${geom}.svg`, alt: geom }) ],
        { "data-geometry": geom })
      li.addEventListener("click", () => loadGeometry(geom))
      return li
    }))
  )
}