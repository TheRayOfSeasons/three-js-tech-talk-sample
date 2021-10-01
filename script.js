const canvas = document.getElementById('our-canvas');
const height = canvas.clientHeight;
const width = canvas.clientWidth;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height);
camera.position.z = 3;

const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

renderer.setAnimationLoop(time => {
  controls.update();
  renderer.render(scene, camera);
});
