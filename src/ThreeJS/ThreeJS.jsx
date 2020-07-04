import React, { Component } from "react";
import * as THREE from "three";

class ThreeJS extends Component {
  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75, // perspective camera view the lower the # will zoom in closer over 200 starts to zoom in
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    let geometry = new THREE.BoxGeometry(1, 1, 1); // changes the height, width, and length of the 3D object

    let cubes = []; // just an array we can use to rotate the cubes
    // let loader = new THREE.TextureLoader();
    // let materials = [
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    //     new THREE.MeshBasicMaterial({map: loader.load('resources/images/flower-6.jpg')}),
    // ];

    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // changes the color the 0x means #
    let cube = new THREE.Mesh(geometry, material);

    // let cube = new THREE.Mesh(geometry, materials);

    scene.add(cube);
    cubes.push(cube); // add to our list of cubes to rotate
    camera.position.z = 5; // changes the position of the camera, higher the number the farther away the object is
    let animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01; // changes rotation left to right 0.00 only spins like a top
      cube.rotation.y += 0.01; // changes rotation up to down 0.00 spins like a slinky
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default ThreeJS;
