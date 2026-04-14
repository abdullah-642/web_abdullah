import * as THREE from 'three';

const canvas = document.querySelector('#bg-canvas');
if (!canvas) throw new Error('No canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setClearColor(0x000000, 0);

const isMobile = window.innerWidth < 768;
const count = isMobile ? 250 : 600;

const geo = new THREE.BufferGeometry();
const pos = new Float32Array(count * 3);
const sizes = new Float32Array(count);

for (let i = 0; i < count; i++) {
  const i3 = i * 3;
  const r = 20 + Math.random() * 50;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);
  pos[i3] = r * Math.sin(phi) * Math.cos(theta);
  pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  pos[i3 + 2] = r * Math.cos(phi);
  sizes[i] = Math.random() * 1.5 + 0.3;
}

geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

// Teal/cyan color matching the avatar image
const mat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0x0ea5e9) },
    uPR: { value: renderer.getPixelRatio() }
  },
  vertexShader: `
    attribute float size;
    uniform float uTime;
    uniform float uPR;
    varying float vA;
    void main() {
      vec3 p = position;
      p.y += sin(uTime * 0.12 + position.x * 0.02) * 1.5;
      p.x += cos(uTime * 0.08 + position.z * 0.02) * 1.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = size * uPR * (60.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
      vA = smoothstep(80.0, 20.0, -mv.z) * 0.45;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vA;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float a = 1.0 - smoothstep(0.1, 0.5, d);
      gl_FragColor = vec4(uColor, a * vA);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(geo, mat);
scene.add(particles);

let mx = 0, my = 0;
document.addEventListener('mousemove', e => {
  mx = (e.clientX / window.innerWidth - 0.5) * 2;
  my = (e.clientY / window.innerHeight - 0.5) * 2;
});

const clock = new THREE.Clock();

function tick() {
  mat.uniforms.uTime.value = clock.getElapsedTime();
  particles.rotation.y += 0.0003;
  camera.position.x += (mx * 2 - camera.position.x) * 0.008;
  camera.position.y += (-my * 1.5 - camera.position.y) * 0.008;
  camera.lookAt(0, 0, 0);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
