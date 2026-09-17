"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function BuildingHero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ============================================
    // Mobile detection — used to scale back rendering
    // cost (shadows, AA, pixel ratio, light count, env
    // map quality) on phones/low-power GPUs.
    // ============================================
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent));

    // ============================================
    // Scene setup
    // ============================================
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 20, 80);
    camera.lookAt(0, 10, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    // PMREM environment — skip on mobile (shader compile + generation
    // cost is significant on weak GPUs); fall back to a flat ambient look.
    let pmremGenerator: THREE.PMREMGenerator | null = null;
    if (!isMobile) {
      pmremGenerator = new THREE.PMREMGenerator(renderer);
      const roomEnv = new RoomEnvironment();
      scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    }

    // ============================================
    // Lighting — tuned for dark car on dark bg.
    // Mobile gets a lighter rig (fewer lights, no shadows)
    // since every extra light multiplies per-pixel shading cost.
    // ============================================
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(30, 50, 30);
    if (!isMobile) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 2048;
      keyLight.shadow.mapSize.height = 2048;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 200;
      keyLight.shadow.camera.left = -60;
      keyLight.shadow.camera.right = 60;
      keyLight.shadow.camera.top = 60;
      keyLight.shadow.camera.bottom = -60;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88aaff, 1.2);
    fillLight.position.set(-30, 20, -20);
    scene.add(fillLight);

    const ambient = new THREE.AmbientLight(0x666688, 0.8);
    scene.add(ambient);

    if (!isMobile) {
      // Strong rim lights to outline the dark car silhouette
      const rimLight1 = new THREE.DirectionalLight(0xff8800, 3.0);
      rimLight1.position.set(0, 15, -50);
      scene.add(rimLight1);

      const rimLight2 = new THREE.DirectionalLight(0xff4400, 2.5);
      rimLight2.position.set(-50, 10, 0);
      scene.add(rimLight2);

      const rimLight3 = new THREE.DirectionalLight(0x00aaff, 2.0);
      rimLight3.position.set(50, 10, 0);
      scene.add(rimLight3);

      // Extra rim from top-back for highlight on roof
      const rimLight4 = new THREE.DirectionalLight(0xffffff, 2.0);
      rimLight4.position.set(0, 30, -30);
      scene.add(rimLight4);

      // Spot light from above for studio feel
      const spot1 = new THREE.SpotLight(0xffffff, 200, 100, Math.PI / 6, 0.5, 2);
      spot1.position.set(0, 40, 20);
      spot1.target.position.set(0, 0, 0);
      scene.add(spot1);
      scene.add(spot1.target);

      // Hemisphere light for natural sky/ground bounce
      const hemiLight = new THREE.HemisphereLight(0x8888ff, 0x442200, 0.6);
      scene.add(hemiLight);
    } else {
      // Mobile: single extra fill light to keep the car readable
      // without the full 8-light rig.
      const mobileFill = new THREE.HemisphereLight(0x8888ff, 0x442200, 0.5);
      scene.add(mobileFill);
    }

    // ============================================
    // Helpers
    // ============================================
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // ============================================
    // Camera keyframes
    // Phase 1 (0-0.55): Assembly — camera orbits around car
    // Phase 2 (0.55-1.0): Tour — camera passes through/around car
    // ============================================
    const CAMERA_KEYFRAMES = [
      // Assembly phase
      { progress: 0.00, position: [0, 20, 80],   target: [0, 10, 0] },
      { progress: 0.15, position: [40, 15, 70],  target: [0, 10, 0] },
      { progress: 0.30, position: [70, 25, 40],  target: [0, 10, 0] },
      { progress: 0.45, position: [40, 30, -50], target: [0, 10, 0] },
      { progress: 0.55, position: [0, 15, 50],   target: [0, 8, 0] },
      // Tour phase — pass through the car
      { progress: 0.62, position: [0, 8, 35],    target: [0, 5, 0] },   // approach front
      { progress: 0.70, position: [0, 5, 15],    target: [0, 3, -10] }, // close to front, looking through
      { progress: 0.78, position: [0, 4, -5],   target: [0, 3, -20] }, // inside/through the car
      { progress: 0.85, position: [0, 5, -25],  target: [0, 3, -40] }, // exiting the back
      { progress: 0.92, position: [20, 8, -40],  target: [0, 5, -30] }, // swing around to side-back
      { progress: 1.00, position: [0, 20, 60],   target: [0, 8, 0] },  // final hero shot
    ];

    // ============================================
    // State
    // ============================================
    let buildingModel: THREE.Group | null = null;
    let components: any[] = [];
    let scrollProgress = 0;
    let smoothScrollProgress = 0;
    const clock = new THREE.Timer();
    clock.connect(document);
    let modelLoaded = false;

    // ============================================
    // Deterministic per-index pseudo-random (avoids relying on
    // mesh names, which are often generic/duplicated after
    // GLTFLoader splits multi-material meshes into submeshes)
    // ============================================
    function seededRandom(seed: number): number {
      const x = Math.sin(seed * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    }

    // ============================================
    // Exploded offset — magnet effect from far away,
    // direction based on each piece's REAL position
    // relative to the model center (works regardless of
    // mesh name / size, unlike name-hash or absolute-size heuristics)
    // ============================================
    function calculateExplodedOffset(
      meshWorldPos: THREE.Vector3,
      modelCenter: THREE.Vector3,
      index: number,
      modelSize: THREE.Vector3
    ): { position: THREE.Vector3; rotation: THREE.Euler } {
      const direction = meshWorldPos.clone().sub(modelCenter);
      const dir = direction.length() > 0.001
        ? direction.normalize()
        : new THREE.Vector3(
            seededRandom(index) - 0.5,
            seededRandom(index + 100) - 0.5,
            seededRandom(index + 200) - 0.5
          ).normalize();

      const r1 = seededRandom(index * 7 + 1) - 0.5;
      const r2 = seededRandom(index * 7 + 2) - 0.5;
      const r3 = seededRandom(index * 7 + 3) - 0.5;

      const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
      const dropDistance = maxDim * 1.5;

      // Combine: fly in from far away along own radial direction,
      // plus a vertical component (mostly from below) and jitter
      const offset = new THREE.Vector3(
        dir.x * dropDistance + r1 * maxDim * 0.3,
        -dropDistance * 0.7 + r2 * maxDim * 0.3,
        dir.z * dropDistance + r3 * maxDim * 0.3
      );

      const rot = new THREE.Euler(
        r1 * Math.PI * 0.4,
        r2 * Math.PI * 0.4,
        r3 * Math.PI * 0.4
      );

      return { position: offset, rotation: rot };
    }

    // ============================================
    // Load model
    // ============================================
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    console.log("%cLoading car.glb (Bugatti CSR2)...", "color: #d4a050;");
    loader.load(
      "/car.glb",
      (gltf) => {
        console.log("%ccar.glb loaded successfully!", "color: #00ff00; font-weight: bold;");
        buildingModel = gltf.scene;

        const box = new THREE.Box3().setFromObject(buildingModel);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (40 / maxDim) * 1.75;
        buildingModel.scale.setScalar(scale);

        const box2 = new THREE.Box3().setFromObject(buildingModel);
        const center2 = box2.getCenter(new THREE.Vector3());
        buildingModel.position.x -= center2.x;
        buildingModel.position.z -= center2.z;
        buildingModel.position.y -= box2.min.y;

        buildingModel.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = !isMobile;
            child.receiveShadow = !isMobile;
            // Force all body/paint materials to deep black
            if (child.material) {
              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach((mat: any) => {
                if (mat.name && (
                  mat.name.includes("Coloured") ||
                  mat.name.includes("PaletteMaterial") ||
                  mat.name.includes("CarPaint") ||
                  mat.name.includes("Calliper_Color")
                )) {
                  // Deep black car paint
                  if (mat.color) {
                    mat.color.set(0x0a0a0a);
                  }
                  if (mat.metalness !== undefined) {
                    mat.metalness = 0.95;
                  }
                  if (mat.roughness !== undefined) {
                    mat.roughness = 0.25;
                  }
                  mat.envMapIntensity = 2.0;
                }
                // Carbon fiber — keep dark, boost reflections
                if (mat.name && mat.name.includes("Carbon")) {
                  if (mat.color) {
                    mat.color.set(0x111111);
                  }
                  if (mat.metalness !== undefined) {
                    mat.metalness = 0.8;
                  }
                  if (mat.roughness !== undefined) {
                    mat.roughness = 0.35;
                  }
                  mat.envMapIntensity = 1.5;
                }
                // Tires — deep black rubber
                if (mat.name && mat.name.includes("Tire")) {
                  if (mat.color) {
                    mat.color.set(0x050505);
                  }
                  if (mat.metalness !== undefined) {
                    mat.metalness = 0.0;
                  }
                  if (mat.roughness !== undefined) {
                    mat.roughness = 0.85;
                  }
                  mat.envMapIntensity = 0.3;
                }
                // Rims — shiny metallic
                if (mat.name && (mat.name.includes("Rim") || mat.name.includes("Rotor"))) {
                  if (mat.color) {
                    mat.color.set(0x1a1a1a);
                  }
                  if (mat.metalness !== undefined) {
                    mat.metalness = 1.0;
                  }
                  if (mat.roughness !== undefined) {
                    mat.roughness = 0.15;
                  }
                  mat.envMapIntensity = 2.0;
                }
              });
            }
          }
        });

        scene.add(buildingModel);

        // Setup components
        buildingModel.updateMatrixWorld(true);
        const modelBox = new THREE.Box3().setFromObject(buildingModel);
        const modelCenter = modelBox.getCenter(new THREE.Vector3());
        const modelSize = modelBox.getSize(new THREE.Vector3());

        const meshes: THREE.Mesh[] = [];
        buildingModel.traverse((child: any) => {
          if (!child.isMesh) return;
          meshes.push(child);
        });

        // Sort by height (bottom → top) for a construction-like reveal order,
        // using each mesh's own world-space bbox (robust regardless of name)
        const withHeight = meshes.map((mesh) => {
          const bbox = new THREE.Box3().setFromObject(mesh);
          const center = bbox.getCenter(new THREE.Vector3());
          return { mesh, minY: bbox.min.y, centerY: center.y };
        });
        // Sort by center Y (bottom → top), then by min Y as tiebreaker
        withHeight.sort((a, b) => a.centerY - b.centerY || a.minY - b.minY);
        console.log(`%cAssembly order (bottom → top):`, "color: #44ff44;");
        withHeight.slice(0, 10).forEach((item, i) => console.log(`  [${i}] ${item.mesh.name} | centerY=${item.centerY.toFixed(2)}`));
        withHeight.slice(-5).forEach((item, i) => console.log(`  [${withHeight.length - 5 + i}] ${item.mesh.name} | centerY=${item.centerY.toFixed(2)}`));

        const total = withHeight.length;
        withHeight.forEach((item, i) => {
          const { mesh } = item;
          const finalPos = mesh.position.clone();
          const finalRot = mesh.rotation.clone();
          const meshWorldPos = new THREE.Vector3();
          mesh.getWorldPosition(meshWorldPos);
          const exploded = calculateExplodedOffset(meshWorldPos, modelCenter, i, modelSize);
          const explodedPos = finalPos.clone().add(exploded.position);
          const explodedRot = new THREE.Euler(
            finalRot.x + exploded.rotation.x,
            finalRot.y + exploded.rotation.y,
            finalRot.z + exploded.rotation.z
          );

          const startProgress = (i / total) * 0.55;
          const endProgress = startProgress + 0.1;

          components.push({
            name: mesh.name,
            object: mesh,
            finalPosition: finalPos,
            finalRotation: finalRot,
            explodedPosition: explodedPos,
            explodedRotation: explodedRot,
            startProgress,
            endProgress,
          });
        });

        // Set exploded state (all invisible)
        components.forEach((comp: any) => {
          comp.object.visible = false;
          comp.object.position.copy(comp.explodedPosition);
          comp.object.rotation.copy(comp.explodedRotation);
        });

        modelLoaded = true;
        console.log(`%cBuilding loaded: ${components.length} components`, "color: #d4a050; font-weight: bold;");

        // Log bounding box for debugging
        const finalBox = new THREE.Box3().setFromObject(buildingModel);
        const finalSize = finalBox.getSize(new THREE.Vector3());
        const finalCenter = finalBox.getCenter(new THREE.Vector3());
        console.log(`%cModel bounds: size(${finalSize.x.toFixed(2)}, ${finalSize.y.toFixed(2)}, ${finalSize.z.toFixed(2)}) center(${finalCenter.x.toFixed(2)}, ${finalCenter.y.toFixed(2)}, ${finalCenter.z.toFixed(2)})`, "color: #00ffff;");
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          if (pct % 25 === 0) {
            console.log(`%cLoading building.glb: ${pct}%`, "color: #d4a050;");
          }
        }
      },
      (error) => {
        console.error("Error loading building.glb:", error);
      }
    );

    // ============================================
    // Scroll tracking — hero section only
    // LOCK: user cannot scroll past hero until building is fully assembled
    // ============================================
    let scrollUnlocked = false;
    const heroHeight = () => window.innerHeight * 6;
    const animRange = () => heroHeight() - window.innerHeight;

    const onScroll = () => {
      const scrollY = window.scrollY;
      scrollProgress = clamp(scrollY / animRange(), 0, 1);
    };

    // Force-clamp scroll position every frame until unlocked
    const clampScroll = () => {
      if (!scrollUnlocked && window.scrollY > animRange()) {
        window.scrollTo(0, animRange());
        scrollProgress = 1.0;
      }
    };

    // Block wheel past boundary
    const onWheel = (e: WheelEvent) => {
      if (scrollUnlocked) return;
      if (window.scrollY >= animRange() - 2 && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Block touch scroll past boundary
    let lastTouchY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (scrollUnlocked) return;
      if (window.scrollY >= animRange() - 2) {
        const touch = e.touches[0];
        if (touch && lastTouchY !== null) {
          const deltaY = touch.clientY - lastTouchY;
          if (deltaY < 0) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        lastTouchY = touch?.clientY ?? null;
      } else {
        lastTouchY = e.touches[0]?.clientY ?? null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    onScroll();

    // ============================================
    // Update functions
    // ============================================
    function updateComponents() {
      // Faster lerp near the end so car completes before tour phase
      const lerpSpeed = scrollProgress > 0.50 ? 0.25 : 0.12;
      smoothScrollProgress = lerp(smoothScrollProgress, scrollProgress, lerpSpeed);

      // Unlock scroll when assembly is done (smoothScrollProgress >= 0.55)
      if (!scrollUnlocked && smoothScrollProgress >= 0.55) {
        scrollUnlocked = true;
        console.log("%cBuilding complete — scroll unlocked!", "color: #44ff44; font-weight: bold;");
      }

      components.forEach((comp: any) => {
        const rawProgress = clamp(
          (smoothScrollProgress - comp.startProgress) / (comp.endProgress - comp.startProgress),
          0, 1
        );
        const eased = easeInOutCubic(rawProgress);

        if (rawProgress <= 0.001) {
          comp.object.visible = false;
          comp.object.position.copy(comp.explodedPosition);
          comp.object.rotation.copy(comp.explodedRotation);
          return;
        }

        comp.object.visible = true;
        comp.object.position.lerpVectors(comp.explodedPosition, comp.finalPosition, eased);
        comp.object.rotation.x = lerp(comp.explodedRotation.x, comp.finalRotation.x, eased);
        comp.object.rotation.y = lerp(comp.explodedRotation.y, comp.finalRotation.y, eased);
        comp.object.rotation.z = lerp(comp.explodedRotation.z, comp.finalRotation.z, eased);
      });
    }

    function updateCamera() {
      const sp = smoothScrollProgress;
      let k1 = CAMERA_KEYFRAMES[0];
      let k2 = CAMERA_KEYFRAMES[CAMERA_KEYFRAMES.length - 1];
      for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
        if (sp >= CAMERA_KEYFRAMES[i].progress && sp <= CAMERA_KEYFRAMES[i + 1].progress) {
          k1 = CAMERA_KEYFRAMES[i];
          k2 = CAMERA_KEYFRAMES[i + 1];
          break;
        }
      }
      const localProgress = (sp - k1.progress) / (k2.progress - k1.progress);
      const eased = easeInOutCubic(clamp(localProgress, 0, 1));
      const pos1 = new THREE.Vector3(...(k1.position as [number, number, number]));
      const pos2 = new THREE.Vector3(...(k2.position as [number, number, number]));
      const targetCamPos = new THREE.Vector3().lerpVectors(pos1, pos2, eased);
      camera.position.lerp(targetCamPos, 0.1);

      const target1 = new THREE.Vector3(...(k1.target as [number, number, number]));
      const target2 = new THREE.Vector3(...(k2.target as [number, number, number]));
      const target = new THREE.Vector3().lerpVectors(target1, target2, eased);

      clock.update();
      const time = clock.getElapsed();
      const orbitAmount = (1 - sp) * 0.3 + 0.05;
      camera.position.x += Math.sin(time * 0.12) * orbitAmount;
      camera.position.z += Math.cos(time * 0.10) * orbitAmount;
      camera.lookAt(target);
    }

    // ============================================
    // Animation loop
    // ============================================
    const animate = () => {
      requestAnimationFrame(animate);
      clampScroll(); // Force scroll lock every frame
      if (modelLoaded) {
        updateComponents();
        updateCamera();
      }
      renderer.render(scene, camera);
    };
    animate();

    // ============================================
    // Resize
    // ============================================
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // Re-apply CSS sizing after setSize overwrites it
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
    };
    window.addEventListener("resize", onResize);

    // ============================================
    // Cleanup
    // ============================================
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pmremGenerator?.dispose();
      dracoLoader.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
