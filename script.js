const canvas = document.getElementById('our-canvas');
const height = canvas.clientHeight;
const width = canvas.clientWidth;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height);
camera.rotation.x = -Math.PI * 0.25;
camera.position.y = 2;
camera.position.z = 3;

const geometry = new THREE.PlaneBufferGeometry(1, 1, 10, 10);
const material = new THREE.MeshNormalMaterial({
  wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.x = -Math.PI * 0.3;
scene.add(mesh);

const axis = new THREE.AxesHelper(1);
scene.add(axis);

renderer.setAnimationLoop(time => {
  // for(let i = 0; i < geometry.attributes.position.array.length; i++) {
  //   let i3 = i * 3;
  //   let x = i3;
  //   let y = i3 + 1;
  //   let z = i3 + 2;

  //   const xValue = geometry.attributes.position.array[x];
  //   geometry.attributes.position.array[y] = Math.sin(xValue + (time * 0.001));
  // }
  // geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
});
