<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Torus and Toroids: visualization of solids with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/torus-toroids/basic/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More solids:</option>
		<option disabled value="../basic/">Torus and toroids</option>
		<!--<option value="../tetragonal/">Tetragonal toroids</option>
		<option value="../iris/">Iris toroids</option>
		<option value="../mobius-cairo/">Mobius and Cairo toroids</option>
		<option value="../regular/">Regular toroids</option>
		<option value="../hexagonal/">Hexagonal toroids</option>
		<option value="../heptagonal/">Heptagonal dodecahedrons</option>
		<option value="../regular1/">Regular polygonal toroids 1</option>
		<option value="../regular2/">Regular polygonal toroids 2</option>
		<option value="../regular3/">Regular polygonal toroids 3</option>
		<option value="../rings/">Rings toroids</option>
		<option value="../regular4/">Regular polygonal toroids 4</option>
		<option value="../regular5/">Regular polygonal toroids 5</option>-->
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Torus and Toroids</h2>
An ordinary torus is considered a genus 1 surface. This solid has a single "hole", and can be constructed from a rectangle by gluing together both pairs of opposite edges without twists. The usual torus embedded in three-dimensional space is shaped like a donut.
The toroid is a surface of revolution obtained by rotating a closed plane curve, or a polygon, around an axis parallel to the plane that does not intersect the curve. The simplest toroid is the torus, and the term toroid is used to refer to a toroidal polyhedron.
This work shows torus and toroids modeled in 3D, with views that can be accessed with Augmented Reality resources and also in immersive Virtual Reality rooms.
<p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
  <hr>
 <h3 align="center">Immersive room</h3>
  <div class="embed-container"><iframe width="100%" src="sala.htm" title="Sala Imersiva dos toros e toroides" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><img align="middle" src="vr/salas/videos/torus.gif" style="max-width: 47%; border-radius:5px; margin-right:10px" loading="lazy" alt="Sala Imersiva de RV par aos toros e toroides"/><a href="sala.htm" target="_blank">&#x1f517; room link</a></p> 
  <hr>
  <h3 id="ra" align="center">Augmented Reality</h3>
  To view torus and toroids in AR, simply visit the pages indicated in the 3D solid models using any browser with a webcam device (smartphone, tablet or notebook). 
<br>Access to the VR pages is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" alt="Augmented Reality to torus and toroids" src="ar/example.png" width="85%"></p>
<p align="center"><img src="ar/symbols.gif" alt="Augmented Reality to torus and toroids" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<!--<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXqLmyaITBm0flxwtDvgTFT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<h4>1. Torus</h4>
<a href="vr/torus.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/0A.png" class="foto" alt="Torus"></a><img src="ar/0.png" class="qr">
 <br><br><br>Let the radius from the center of the hole to the center of the torus tube be r, and the radius of the tube be R. The parametric equations for a torus azimuthally symmetric about the z-axis are: x = (R + r&middot;cos(v))&middot;cos(u), y = (R + r&middot;cos(v))&middot;sin(u) and z = r&middot;sin(v), for u, v &isin; [0, 2&pi;). 
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>2. Polyhedral torus</h4>
<a href="vr/torusN.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/4A.png" class="foto" alt="Polyhedral torus"></a><img src="ar/4.png" class="qr">
 <br><br><br>Consider n equal cylinders frustums, equidistant from a point. The generated solid by the union of these cylinders frustums is a polyhedral torus with n sides, and the intersections of the cylinders frustums are circles with equal radii.
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>3. Torus knot</h4>
<a href="vr/torusKnotN.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/3A.png" class="foto" alt="Torus knot"></a><img src="ar/3.png" class="qr">
 <br><br><br>A (p, q) torus knot is obtained by winding a rope through the hole of a torus p times, with q revolutions before joining its ends, where p and q are prime numbers. The parametric equations for a torus azimuthally symmetric about the z-axis are: x = (R + r&middot;cos(q&middot;u))&middot;cos(p&middot;u), y = (R + r&middot;cos(q&middot;u))&middot;sin(p&middot;u) and z = r&middot;sin(q&middot;u), for u &isin; [0, 2&pi;).
 <br><br>
  <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>4. Polygonal toroid</h4>
<a href="vr/toroid_polygonal1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/5A.png" class="foto" alt="Polygonal toroid"></a><img src="ar/5.png" class="qr">
 <br><br><br>The polygonal toroid is a surface of revolution obtained by rotating a polygon, around an axis parallel to the plane that does not intersect the curve.
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>5. Polyhedral toroid</h4>
<a href="vr/toroid_polygonal.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/1A.png" class="foto" alt="Polyhedral toroid"></a><img src="ar/1.png" class="qr">
 <br><br><br>Consider n equal regular prisms frustums, equidistant from a point P and with lateral edges orthogonal to the axis passing through P. The solid generated by the union of these prisms frustums is a polyhedral toroid with n sides, and the intersections of the prisms frustums are congruent regular polygons.
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>6. Polyhedral toroidal knot</h4>
<a href="vr/toroid_polygonal_knot.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/2A.png" class="foto" alt="Polyhedral toroidal knot"></a><img src="ar/2.png" class="qr">
 <br><br><br>A polyhedral toroidal knot (p, q) is obtained by winding a chain through the hole of a torus p times, with q revolutions before joining its ends, where p and q are prime numbers. The links of the chain are formed by prisms and prism frustums.
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>7. Borromean rings: torus knot</h4>
<a href="vr/BorromeanRings1.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/6A.png" class="foto" alt="Borromean rings: torus knot"></a><img src="ar/6.png" class="qr">
 <br><br><br>The Borromean rings, also called Borromean links, are three interlocking rings named after the Italian Renaissance family that used them in their coat of arms. Removing any one ring leaves the other two unconnected. In this example, we have the Borromean rings made with torus knots with p = 1 and q = 2.
 <br><br>
  <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
 <hr>
<h4>8. Borromean rings: polyhedral toroid</h4>
<a href="vr/BorromeanRings.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/7A.png" class="foto" alt="Borromean rings: polyhedral toroid"></a><img src="ar/7.png" class="qr">
 <br><br><br>The Borromean rings, also called Borromean links, are three interlocking rings named after the Italian Renaissance family that used them in their coat of arms. Removing any one ring leaves the other two unconnected. In this example, we have the Borromean rings made with polyhedral toroids with n = 4.
 <br><br>
 <a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Torus and Toroids: visualization of solids with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/torus-toroids/basic/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Torus and Toroids: visualization of solids with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/torus-toroids/basic/>, February 2025.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.14502405"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.14502405.svg" alt="DOI"></a>-->
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Torus" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Torus.html" target="_blank">https://mathworld.wolfram.com/Torus.html</a>
<br>Weisstein, Eric W. "Toroid" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Toroid.html" target="_blank">https://mathworld.wolfram.com/Toroid.html</a>
<br>McCooey, D. I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
