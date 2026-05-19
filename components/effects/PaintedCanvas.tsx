'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    vec2 mouse = uMouse * 2.0 - 1.0;
    mouse.x *= uResolution.x / uResolution.y;
    float m = 0.12 / (length(p - mouse) + 0.4);

    float t = uTime * 0.05;
    float n = fbm(p * 2.0 + vec2(t * 0.2, t * 0.15));

    vec3 base = vec3(0.04, 0.04, 0.045);
    vec3 glow = vec3(0.08, 0.1, 0.14);
    vec3 accent = vec3(0.12, 0.14, 0.2);
    vec3 color = mix(base, glow, n * 0.5);
    color = mix(color, accent, m + n * 0.15);

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function PaintedCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)
    container.appendChild(renderer.domElement)

    const resize = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      uniforms.uResolution.value.set(clientWidth, clientHeight)
    }
    resize()

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let frameId = 0
    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate)
      uniforms.uTime.value = time * 0.001
      uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouseRef.current.x, mouseRef.current.y),
        0.04
      )
      renderer.render(scene, camera)
    }
    animate(0)

    const observer = new ResizeObserver(resize)
    observer.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
      renderer.dispose()
      material.dispose()
      mesh.geometry.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      aria-hidden
    />
  )
}
