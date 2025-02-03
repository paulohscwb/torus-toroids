function abrir() {
  window.open(fl, '_self');
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
}

function mfaces() {
	var x = document.getElementById("faces")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function marestas() {
	var x = document.getElementById("arestas")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#ar')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mnivels() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	var p = document.getElementById("nv").value
	var r = document.getElementById("nvr").value
	var R = document.getElementById("nvR").value
	r1 = r * 1.00025;
	R1 = R * 1.00025;
	entityEl.setAttribute('geometry',`radius:${R}; primitive: torus; radius-tubular:${r}; segments-radial: 30; segments-tubular: ${p}`);
	entityElw.setAttribute('geometry',`radius:${R1}; primitive: torus; radius-tubular:${r1}; segments-radial: 30; segments-tubular: ${p}`);
}

function mnivels1() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc2')
	var entityElw = sceneEl.querySelector('#ar2')
	var entityEl1 = sceneEl.querySelector('#fc4')
	var entityElw1 = sceneEl.querySelector('#ar4')
	var entityEl2 = sceneEl.querySelector('#fc5')
	var entityElw2 = sceneEl.querySelector('#ar5')
	var p = document.getElementById("nv").value
	entityEl.setAttribute('geometry',`radius:6; primitive: torus; radius-tubular:0.6; segments-radial: 30; segments-tubular: ${p}`);
	entityElw.setAttribute('geometry',`radius:6.001; primitive: torus; radius-tubular:0.601; segments-radial: 30; segments-tubular: ${p}`);
	entityEl1.setAttribute('geometry',`radius:6; primitive: torus; radius-tubular:0.6; segments-radial: ${p}; segments-tubular: 75`);
	entityElw1.setAttribute('geometry',`radius:6.001; primitive: torus; radius-tubular:0.601; segments-radial: ${p}; segments-tubular: 75`);
	entityEl2.setAttribute('geometry',`radius:6; primitive: torus; radius-tubular:0.6; segments-radial: 4; segments-tubular: ${p}`);
	entityElw2.setAttribute('geometry',`radius:6.001; primitive: torus; radius-tubular:0.601; segments-radial: 4; segments-tubular: ${p}`);
}

function mnivelk() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	var p = document.getElementById("nv").value
	var q = document.getElementById("nv1").value
	entityEl.setAttribute('geometry',`radius:4.5; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.4; segments-radial: 30; segments-tubular: 600;`);
	entityElw.setAttribute('geometry',`radius:4.501; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.401; segments-radial: 30; segments-tubular: 600;`);
}

function mnivelk1() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc3')
	var entityElw = sceneEl.querySelector('#ar3')
	var entityEl1 = sceneEl.querySelector('#fc6')
	var entityElw1 = sceneEl.querySelector('#ar6')
	var p = document.getElementById("nv2").value
	var q = document.getElementById("nv3").value
	entityEl.setAttribute('geometry',`radius:4.5; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.4; segments-radial: 30; segments-tubular: 600;`);
	entityElw.setAttribute('geometry',`radius:4.501; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.401; segments-radial: 30; segments-tubular: 600;`);
	entityEl1.setAttribute('geometry',`radius:4.5; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.59; segments-radial: 4; segments-tubular: 40;`);
	entityElw1.setAttribute('geometry',`radius:4.501; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.6; segments-radial: 4; segments-tubular: 40;`);
}

function mnivelt() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	r = document.getElementById("nv").value
	R = document.getElementById("nv1").value
	r1 = r * 1.00025;
	R1 = R * 1.00025;
	entityEl.setAttribute('geometry',`radius: ${R}; primitive: torus; radius-tubular: ${r}; segments-radial: 30; segments-tubular: 75;`);
	entityElw.setAttribute('geometry',`radius: ${R1}; primitive: torus; radius-tubular: ${r1}; segments-radial: 30; segments-tubular: 75;`);
}

function mniveltp() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	r = document.getElementById("nv").value
	R = document.getElementById("nv1").value
	n = document.getElementById("nv2").value
	r1 = r * 1.00025;
	R1 = R * 1.00025;
	entityEl.setAttribute('geometry',`radius: ${R}; primitive: torus; radius-tubular: ${r}; segments-radial: ${n}; segments-tubular: 75;`);
	entityElw.setAttribute('geometry',`radius: ${R1}; primitive: torus; radius-tubular: ${r1}; segments-radial: ${n}; segments-tubular: 75;`);
}

function mnivelp() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	var q = document.getElementById("nv").value
	var p = document.getElementById("nv1").value
	entityEl.setAttribute('geometry',`radius:6; primitive: torus; radius-tubular:0.59; segments-radial: ${p}; segments-tubular: ${q};`);
	entityElw.setAttribute('geometry',`radius:6.001; primitive: torus; radius-tubular:0.6; segments-radial: ${p}; segments-tubular: ${q};`);
}

function mnivelkp() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	var entityElw = sceneEl.querySelector('#ar')
	var p = document.getElementById("nv").value
	var q = document.getElementById("nv1").value
	var r = document.getElementById("nv2").value
	entityEl.setAttribute('geometry',`radius:4.5; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.59; segments-radial: 4; segments-tubular: ${r};`);
	entityElw.setAttribute('geometry',`radius:4.501; primitive: torusKnot; p: ${p}; q: ${q}; radius-tubular:0.6; segments-radial: 4; segments-tubular: ${r};`);
}

function mnivelRA() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelectorAll('.nivel0')
	var entityEl1 = sceneEl.querySelectorAll('.nivel1')
	var entityEl2 = sceneEl.querySelectorAll('.nivel2')
	var entityEl3 = sceneEl.querySelectorAll('.nivel3')
	var entityEl4 = sceneEl.querySelectorAll('.nivel4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 1) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 2) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
	    entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 3) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	}
}
