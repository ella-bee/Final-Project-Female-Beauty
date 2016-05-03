var camera, scene, renderer, controls;
var geometry, material, mesh;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  mirrorCamera = new THREE.CubeCamera(0.1, 5000, 512); // near far rendering then resolution 
  scene.add(mirrorCamera);


    var modelMaterial = new THREE.MeshPhongMaterial( { 
    // colorDiffuse: 0xFF0000, 
    color: 0xFF0000,
    visible: true,
    // specularCoef: 50,
    specular: 0x050505,
    shininess: 100,
    depthWrite: true,
    // vertexColors: true; 

  

} ) 


  // var loader = new THREE.JSONLoader();

  // loader.load('body1.json', function(modelGeometry){
  //   var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
  //   modelMesh.scale.set(50, 50, 50);
  //   scene.add(modelMesh);
  //   mirrorCamera.position = modelMesh.position;

  // })

  // skybox files
  var path = "IceRiver/";
  var format = ".jpg";
  var urls = [
    path + 'pos-x' + format, path + 'neg-x' + format,
    path + 'pos-y' + format, path + 'neg-y' + format,
    path + 'pos-z' + format, path + 'neg-z' + format
  ];

  skybox = new THREE.CubeTextureLoader().load( urls );
  skybox.format = THREE.RGBFormat;

  // skybox rendering
  var shader = THREE.ShaderLib["cube"];
  shader.uniforms[ "tCube" ].value = skybox;

  var material = new THREE.ShaderMaterial({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  });

  var geometry = new THREE.BoxGeometry(4000, 4000, 4000);

  var mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  mirrorCamera.updateCubeMap(renderer, scene);
  renderer.render(scene, camera);
  controls.update();
}

function windowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

}
init();
animate();

window.addEventListener('resize', windowResize, false);
