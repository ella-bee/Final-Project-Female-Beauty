var camera, mirrorCamera, scene, renderer, controls;
var geometry, material, mesh;





function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  //save image


  


  scene.fog = new THREE.FogExp2(0xFFFFFF, 0.001); // exponential fog

  camera = new THREE.PerspectiveCamera(85, width/height, 0.1, 25000);
  camera.position.set(0, 400, 400);
  scene.add(camera);

   var light = new THREE.DirectionalLight(0xffffff, .6);
  light.position.set(1, 1, 1); // x, y, z
  scene.add(light);

  var light = new THREE.DirectionalLight(0xffffff, .3);
  light.position.set(-1, 1, -1); // x, y, z
   scene.add(light);



  scene.add(light);


  var spotlight = new THREE.SpotLight(0xffffff, .5);
  spotlight.position.set(1500, 1500, 1500);
  spotlight.castShadow = true;

  // shadow map texture width
  spotlight.shadow.mapSize.width = 2000;
  // shadow map texture height
  spotlight.shadow.mapSize.height = 2000;
  // perspective shadow camera frustum near
  spotlight.shadow.camera.near = 500;
  // perspective shadow camera frustum far
  spotlight.shadow.camera.far = 10000;
  // perspective shadow camera frustum fov
  spotlight.shadow.camera.fov = 45;

  scene.add(spotlight);

    var loader = new THREE.JSONLoader();
    loader.load('text1.json', function(modelGeometry) {
      var textMaterial = new THREE.MeshLambertMaterial({color: 0xA80000, side: THREE.DoubleSide});
      var modelMesh = new THREE.Mesh(modelGeometry, textMaterial);
      modelMesh.castShadow = false;
      modelMesh.scale.set(20, 20, 20);
      modelMesh.position.y = -300;
      modelMesh.position.z = 60;
    
      scene.add(modelMesh);
  });
      var loader = new THREE.JSONLoader();
    loader.load('text2.json', function(modelGeometry) {
      var textMaterial = new THREE.MeshLambertMaterial({color: 0xA80000, side: THREE.DoubleSide});
      var modelMesh = new THREE.Mesh(modelGeometry, textMaterial);
      modelMesh.castShadow = false;
      modelMesh.scale.set(20, 20, 20);
      modelMesh.position.y = -300;
      modelMesh.position.x = 60;
    
      scene.add(modelMesh);
  });
      var loader = new THREE.JSONLoader();
    loader.load('text3.json', function(modelGeometry) {
      var textMaterial = new THREE.MeshLambertMaterial({color: 0xA80000, side: THREE.DoubleSide});
      var modelMesh = new THREE.Mesh(modelGeometry, textMaterial);
      modelMesh.castShadow = false;
      modelMesh.scale.set(20, 20, 20);
      modelMesh.position.y = -300;
      modelMesh.position.z = -60;
    
      scene.add(modelMesh);
  });
      var loader = new THREE.JSONLoader();
    loader.load('text4.json', function(modelGeometry) {
      var textMaterial = new THREE.MeshLambertMaterial({color: 0xA80000, side: THREE.DoubleSide});
      var modelMesh = new THREE.Mesh(modelGeometry, textMaterial);
      modelMesh.castShadow = false;
      modelMesh.scale.set(20, 20, 20);
      modelMesh.position.y = -300;
      modelMesh.position.x = -60;
    
      scene.add(modelMesh);
  });


 var planeGeometry = new THREE.PlaneGeometry(10000, 10000, 10, 10);
  var planeMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / -2;
  plane.receiveShadow = true;
  scene.add(plane);



//bodies

  //set body material
var modelMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, specular: 0x050505, shininess: 100});


//for loop in random number of each body type at random location
for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body1.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }


    for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body2.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }

for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body3.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }

    for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body4.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }

    for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body5.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }

    for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body6.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }

    for (var i = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
  var loader = new THREE.JSONLoader();
    loader.load('body7.json', function(modelGeometry) {
      var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      modelMesh.castShadow = true;
      modelMesh.scale.set(13, 13, 13);
        modelMesh.position.x = (Math.random() - 0.5) * 500;
        modelMesh.position.z = (Math.random() - 0.5) * 500;
        modelMesh.updateMatrix();
        modelMesh.matrixAutoUpdate = false;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

    }


  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true,  clearColor: 0x000000, clearAlpha: 0, preserveDrawingBuffer: true, });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  var date = new Date();
  var timer = date.getTime() *  -0.0001; // get time string
  camera.position.x = 800 * Math.cos(timer); // x-coord of camera
  camera.position.z = 800 * Math.sin(timer); // z-coord of camera



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

//screenshot ability 
window.addEventListener("keyup", function(e){
    var imgData, imgNode;
    //Listen to 'P' key
    if(e.which !== 80) return;  
    try {
        imgData = renderer.domElement.toDataURL();      
        // console.log(imgData);
        window.open( imgData);
    } 
    catch(e) {
        console.log("Browser does not support taking screenshot of 3d context");
        return;
    }
   imgNode = document.createElement("img");
   imgNode.src = imgData;
   document.body.appendChild(imgNode);
});


