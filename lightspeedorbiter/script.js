import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Constants ---
    const ORBITAL_RADIUS_MILES = 50000000;
    const SPEED_OF_LIGHT_MPH = 670616629;
    const CIRCUMFERENCE_MILES = 2 * Math.PI * ORBITAL_RADIUS_MILES;
    const MAX_PERCENTAGE = 99.9999;
    const HOURS_PER_DAY = 24;

    // --- DOM Elements ---
    const canvasContainer = document.getElementById('canvas-container');
    const canvas = document.getElementById('orbitCanvas');
    const percentageSlider = document.getElementById('percentageSlider');
    const percentageInput = document.getElementById('percentageInput');
    const percentageValueDisplay = document.getElementById('percentageValueDisplay');
    const radiusDisplay = document.getElementById('radiusDisplay');
    const speedMphDisplay = document.getElementById('speedMphDisplay');
    const lorentzDisplay = document.getElementById('lorentzDisplay');
    const periodHoursDisplay = document.getElementById('periodHoursDisplay');
    const periodDaysDisplay = document.getElementById('periodDaysDisplay');
    const earthTimeDisplay = document.getElementById('earthTimeDisplay');
    const shipTimeDisplay = document.getElementById('shipTimeDisplay');

    // --- Three.js Setup ---
    let scene, camera, renderer, controls;
    let earthMesh, shipMesh, orbitLine;
    const clock = new THREE.Clock(); // For delta time and animation timing

    // --- Visual Scaling ---
    const VISUAL_SCALE_FACTOR = 1 / 50000000; // Adjust for visual size
    const visualOrbitRadius = ORBITAL_RADIUS_MILES * VISUAL_SCALE_FACTOR;
    const visualEarthRadius = Math.max(0.1, visualOrbitRadius * 0.05); // Ensure minimum size
    const visualShipRadius = Math.max(0.05, visualEarthRadius * 0.3);

    // --- State Variables ---
    let currentPercentage = 0.0;
    let currentSpeedMph = 0.0;
    let lorentzFactor = 1.0;
    let orbitalPeriodHours = Infinity;
    let orbitalPeriodDays = Infinity;
    let currentAngle = 0.0; // Radians
    let elapsedEarthTimeSec = 0.0;
    let elapsedShipTimeSec = 0.0;

    // --- Initialization ---
    function initThreeJS() {
        scene = new THREE.Scene();

        // Camera
        const aspectRatio = canvasContainer.clientWidth / canvasContainer.clientHeight;
        camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.01, visualOrbitRadius * 10);
        camera.position.set(0, visualOrbitRadius * 0.7, visualOrbitRadius * 1.5);
        camera.lookAt(0, 0, 0);

        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true; // Enable shadows if desired

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7.5).normalize();
        directionalLight.castShadow = true; // Allow light to cast shadows
        scene.add(directionalLight);

        // Controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.maxDistance = visualOrbitRadius * 5;
        controls.minDistance = visualEarthRadius * 3;

        // Earth
        const earthGeometry = new THREE.SphereGeometry(visualEarthRadius, 32, 32);
        // Simple blue material for Earth
        const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x4682B4 }); // Steel blue
        earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
        earthMesh.receiveShadow = true; // Earth can receive shadows
        scene.add(earthMesh);

        // Ship
        const shipGeometry = new THREE.SphereGeometry(visualShipRadius, 16, 16);
        const shipMaterial = new THREE.MeshPhongMaterial({ color: 0xff4500, emissive: 0x551000 }); // Orange-red
        shipMesh = new THREE.Mesh(shipGeometry, shipMaterial);
        shipMesh.castShadow = true; // Ship can cast shadows
        scene.add(shipMesh);

        // Orbit Path
        const orbitPoints = [];
        const segments = 128;
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            orbitPoints.push(
                new THREE.Vector3(
                    visualOrbitRadius * Math.cos(theta),
                    0, // Flat orbit on XZ plane
                    visualOrbitRadius * Math.sin(theta)
                )
            );
        }
        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true });
        orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
        scene.add(orbitLine);

        // Handle window resize
        window.addEventListener('resize', onWindowResize, false);
        onWindowResize();
    }

    function onWindowResize() {
        const newWidth = canvasContainer.clientWidth;
        const newHeight = canvasContainer.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    // --- Calculation Functions ---
    function calculateSimulationState(percentage) {
        percentage = Math.max(0.0, Math.min(percentage, MAX_PERCENTAGE)); // Clamp percentage

        currentSpeedMph = (percentage / 100.0) * SPEED_OF_LIGHT_MPH;

        if (currentSpeedMph > 1e-6) { // Check if speed is effectively non-zero
            const v_over_c = currentSpeedMph / SPEED_OF_LIGHT_MPH;
            // Cap beta slightly below 1 for calculation stability
            const beta_squared = Math.min(v_over_c * v_over_c, 0.9999999999999999);

            try {
                lorentzFactor = 1.0 / Math.sqrt(1.0 - beta_squared);
            } catch (e) {
                lorentzFactor = Infinity; // Should be avoided by capping
            }

            orbitalPeriodHours = CIRCUMFERENCE_MILES / currentSpeedMph;
            orbitalPeriodDays = orbitalPeriodHours / HOURS_PER_DAY;
        } else {
            currentSpeedMph = 0;
            lorentzFactor = 1.0;
            orbitalPeriodHours = Infinity;
            orbitalPeriodDays = Infinity;
        }
    }

    function updateInfoDisplays() {
        radiusDisplay.textContent = ORBITAL_RADIUS_MILES.toLocaleString(undefined, { maximumFractionDigits: 0 });
        speedMphDisplay.textContent = Math.round(currentSpeedMph).toLocaleString();
        lorentzDisplay.textContent = isFinite(lorentzFactor) ? lorentzFactor.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : "Infinity";

        periodHoursDisplay.textContent = isFinite(orbitalPeriodHours) ? orbitalPeriodHours.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "Infinity";
        periodDaysDisplay.textContent = isFinite(orbitalPeriodDays) ? orbitalPeriodDays.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "Infinity";
    }

    function formatTime(totalSeconds) {
        if (!isFinite(totalSeconds) || totalSeconds < 0) return "00:00:00.000";
        try {
            const totalSecondsInt = Math.floor(totalSeconds);
            const milliseconds = Math.floor((totalSeconds - totalSecondsInt) * 1000);
            const hours = Math.floor(totalSecondsInt / 3600);
            const minutes = Math.floor((totalSecondsInt % 3600) / 60);
            const seconds = totalSecondsInt % 60;

            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        } catch (e) {
             // Handle potential overflow for extremely large numbers if needed
             return "Time Overflow";
        }
    }

    // --- Animation Loop ---
    function animate() {
        requestAnimationFrame(animate);

        const deltaTimeSeconds = clock.getDelta();

        // Update time passage
        elapsedEarthTimeSec += deltaTimeSeconds;
        if (lorentzFactor > 0 && isFinite(lorentzFactor)) {
            elapsedShipTimeSec += deltaTimeSeconds / lorentzFactor;
        } else { // Handle zero speed or infinite lorentz factor
            elapsedShipTimeSec += deltaTimeSeconds;
        }

        // Update visual orbital angle based on calculated period
        if (currentSpeedMph > 0 && isFinite(orbitalPeriodHours)) {
            const orbitalPeriodSeconds = orbitalPeriodHours * 3600.0;
            if (orbitalPeriodSeconds > 1e-9) { // Avoid division by zero
                const angularSpeed = (2 * Math.PI) / orbitalPeriodSeconds; // Radians per second
                currentAngle += angularSpeed * deltaTimeSeconds;
                currentAngle %= (2 * Math.PI);
            }
        }

        // Update Ship Position
        const shipX = visualOrbitRadius * Math.cos(currentAngle);
        const shipZ = visualOrbitRadius * Math.sin(currentAngle); // Use Z for the flat plane
        shipMesh.position.set(shipX, 0, shipZ);

        // Update Clock Displays
        earthTimeDisplay.textContent = formatTime(elapsedEarthTimeSec);
        shipTimeDisplay.textContent = formatTime(elapsedShipTimeSec);

        // Update controls (for damping)
        controls.update();

        // Render the scene
        renderer.render(scene, camera);
    }

    // --- Event Listeners ---
    function handleInputChange(event) {
        let value = parseFloat(event.target.value);
        value = Math.max(0.0, Math.min(value, MAX_PERCENTAGE)); // Clamp

        // Update both slider and input field
        percentageSlider.value = value;
        percentageInput.value = value.toFixed(4); // Keep precision in number input
        percentageValueDisplay.textContent = value.toFixed(4);

        currentPercentage = value;
        calculateSimulationState(currentPercentage);
        updateInfoDisplays();
        // Do NOT reset clocks here, let them run
    }

    percentageSlider.addEventListener('input', handleInputChange);
    percentageInput.addEventListener('input', handleInputChange);

    // --- Initial Setup & Start ---
    initThreeJS();
    // Set initial values from default slider/input value
    currentPercentage = parseFloat(percentageInput.value);
    percentageValueDisplay.textContent = currentPercentage.toFixed(4);
    calculateSimulationState(currentPercentage);
    updateInfoDisplays();
    animate(); // Start the animation loop
});