import React, { useRef, useEffect, useState } from 'react';
import * as THREE from "three";
// import { Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls.js';

// import dummy from './dummy-scene.jpg';

import WEBGL from './webGL.js';

export default (props) => {
    // const mousePosition = useMousePosition();
    const mountScene = useRef(null);

    useEffect(() => {
        let scene = new THREE.Scene();
        let loader = new GLTFLoader();

        let camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.5, 40000);
        camera.position.set(0, 100, 0);
        camera.updateProjectionMatrix();

        // if (props.room === 'livingRoom') camera.position.set(0, -1000, 1000);
        // else if (props.room === 'kitchenRoom') camera.position.set(1000, -10000, 5000);
        // else camera.position.set(5000, -5000, 10000);
        // console.log(camera.position)

        loader.load(props.room3dModel, (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
        });

        // let stats = new Stats(); //show FPS,...
		// mountScene.current.appendChild(stats.domElement);

        let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountScene.current.appendChild(renderer.domElement);

        // // let controls = new DeviceOrientationControls(camera);
        // let controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        // controls.dampingFactor = 0.05;

        // controls.screenSpacePanning = false;

        // controls.minDistance = 100;
        // controls.maxDistance = 500;

        // controls.maxPolarAngle = Math.PI / 2;

        let controls = new PointerLockControls( camera, renderer.domElement );
        if (props.room === 'livingRoom') controls.moveRight(100);
        else if (props.room === 'kitchenRoom') controls.moveRight(1000);
        else controls.moveRight(10000);
        console.log(controls.getObject)

        // let controls = new FlyControls(camera, renderer.domElement);

        // controls.movementSpeed = 1000;
        // controls.domElement = renderer.domElement;
        // controls.rollSpeed = Math.PI / 24;
        // controls.autoForward = false;
        // controls.dragToLook = false;
        // console.log(controls);

        let animate = () => {
            requestAnimationFrame(animate);
            // controls.update();
            // stats.update();
            renderer.render(scene, camera);
        };

        // let camera, scene, renderer, controls;
        // camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

        // controls = new DeviceOrientationControls(camera);
        // console.log(controls)

        // scene = new THREE.Scene();

        // var geometry = new THREE.SphereBufferGeometry(500, 60, 40);
        // geometry.scale(- 1, 1, 1);

        // var material = new THREE.MeshBasicMaterial({
        //     map: new THREE.TextureLoader().load(dummy)
        // });

        // var mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);

        // renderer = new THREE.WebGLRenderer({ antialias: true });
        // renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // mountScene.current.appendChild(renderer.domElement);

        // let onWindowResize = () => {
        //     camera.aspect = window.innerWidth/window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize( window.innerWidth, window.innerHeight );
        // }
        // window.addEventListener( 'resize', onWindowResize, false );

        if (WEBGL.isWebGLAvailable()) {
            animate();
        } else {
            let warning = WEBGL.getWebGLErrorMessage();
            console.log(warning);
        }
    });

    return (
        <div className="room3dModel">
            <div ref={mountScene} />
            {/* <h1>
                { screenOrien }
            </h1> */}
            {/* {controls.screenOrientation} */}
            {/* {mousePosition.x}:{mousePosition.y} */}
        </div>
    );
}