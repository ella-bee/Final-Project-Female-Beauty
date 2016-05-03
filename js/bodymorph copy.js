var camera, scene, renderer, controls;
var geometry, material, mesh;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var spotlight = new THREE.SpotLight(0xffffff, 1);
  spotlight.position.set(500, 500, 500);
  spotlight.castShadow = true;

  // shadow map texture width
  spotlight.shadow.mapSize.width = 2000;
  // shadow map texture height
  spotlight.shadow.mapSize.height = 2000;
  // perspective shadow camera frustum near
  spotlight.shadow.camera.near = 500;
  // perspective shadow camera frustum far
  spotlight.shadow.camera.far = 2000;
  // perspective shadow camera frustum fov
  spotlight.shadow.camera.fov = 45;

  scene.add(spotlight);

  var pointlight = new THREE.PointLight(0x0000ff, 0.5, 1000);
  pointlight.position.set(-400, 400, 400);
  scene.add(pointlight);

  material = new THREE.MeshLambertMaterial({color: 0xffffff, transparent: true, opacity: 0.9});
  geometry = new THREE.SphereGeometry(50, 50, 50);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 50;
  mesh.castShadow = true;
  scene.add(mesh);

  var planeGeometry = new THREE.PlaneGeometry(800, 800, 10, 10);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0x2efbdc, side: THREE.DoubleSide});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / -2;
  plane.receiveShadow = true;
  scene.add(plane);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();





// var camera, scene, renderer, controls;
// var geometry, material, mesh;



// function init() {
//   scene = new THREE.Scene();
//   var width = window.innerWidth;
//   var height = window.innerHeight;



//   camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
//   camera.position.set(0, 200, 700);
//   scene.add(camera);


//   scene.fog = new THREE.FogExp2(0xffa7a7, 0.001); // exponential fog

//   var light = new THREE.DirectionalLight(0xffffff, .5);
//   light.position.set(1, 1, 1); // x, y, z

//   scene.add(light);


//   var spotlight = new THREE.SpotLight(0xffffff, 1);
//   spotlight.position.set(500, 500, 500);
//   spotlight.castShadow = true;

//   // shadow map texture width
//   spotlight.shadow.mapSize.width = 2000;
//   // shadow map texture height
//   spotlight.shadow.mapSize.height = 2000;
//   // perspective shadow camera frustum near
//   spotlight.shadow.camera.near = 500;
//   // perspective shadow camera frustum far
//   spotlight.shadow.camera.far = 2000;
//   // perspective shadow camera frustum fov
//   spotlight.shadow.camera.fov = 45;

//   scene.add(spotlight);


//   var modelMaterial = new THREE.MeshPhongMaterial( { 
//     // colorDiffuse: 0xFF0000, 
//     color: 0xFF0000,
//     visible: true,
//     // specularCoef: 50,
//     specular: 0x050505,
//     shininess: 100,
//     depthWrite: true,
//     // vertexColors: true; 

  

// } ) 
//   // materials":[{
//   //       "depthTest":true,
//   //       "visible":true,
//   //       "opacity":1,
//   //       "blending":"NormalBlending",
//   //       "vertexColors":false,
//   //       "DbgName":"Material.002",
//   //       "transparent":false,
//   //       "DbgColor":15658734,
//   //       "colorDiffuse":[0.64,0.64,0.64],
//   //       "colorEmissive":[0,0,0],
//   //       "depthWrite":true,
//   //       "wireframe":false,
//   //       "specularCoef":50,
//   //       "colorSpecular":[0.5,0.5,0.5],
//   //       "shading":"phong",
//   //       "DbgIndex":0
//   //   }]

//   var loader = new THREE.JSONLoader();

//   loader.load('body1.json', function(modelGeometry){
//     var modelMesh1 = new THREE.Mesh(modelGeometry, modelMaterial);
//     modelMesh1.scale.set(1, 1, 1);
//     modelMesh1.castShadow = true;
//     modelMesh1.receiveShadow = true;
//     scene.add(modelMesh1);
//     console.log('done');
//   })

//   var planeGeometry = new THREE.PlaneGeometry(800, 800, 10, 10);
//       var planeMaterial = new THREE.MeshPhongMaterial( { color: 0x996633, specular: 0x050505, shininess: 100, side: THREE.DoubleSide});
//       var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//       plane.rotation.x = Math.PI / -2;
//       plane.receiveShadow = true;
//       scene.add(plane);

//       // or white marble 
//   //      var textureLoader = new THREE.TextureLoader();
//   // textureLoader.load('image/white_marble.jpg', function(texture) {
//   //   var planeGeometry = new THREE.PlaneGeometry(800, 800, 10, 10);
//   //   var planeMaterial = new THREE.MeshLambertMaterial({map: texture, side: THREE.DoubleSide});
//   //   var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//   //   plane.rotation.x = Math.PI / -2;
//   //   plane.receiveShadow = true;
//   //   scene.add(plane);
//   // });

//     // var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, envMap: mirrorCamera.renderTarget});
//   // var sphereGeometry = new THREE.SphereGeometry(50, 50, 50);

//   // for (var i = 0; i < 100; i++) {
//   //   var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//   //   sphere.position.x = (Math.random() - 0.5) * 4000;
//   //   sphere.position.y = (Math.random() - 0.5) * 4000;
//   //   sphere.position.z = (Math.random() - 0.5) * 4000;
//   //   sphere.updateMatrix();
//   //   sphere.matrixAutoUpdate = false;
//   //   scene.add(sphere);
//   // }

//   // WebGL detection and fallback
//   if (Detector.webgl) {
//     renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
//     renderer.shadowMap.enabled = true;
//   } else {
//     renderer = new THREE.CanvasRenderer({alpha: true});
//   }

//   renderer.setSize(width, height);
//   controls = new THREE.OrbitControls(camera, renderer.domElement);

//   document.body.appendChild(renderer.domElement);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);

//   // mesh.rotation.y += 0.01;
//   // mesh.rotation.x += 0.01;
  
//   controls.update();
// }

// init();
// animate();