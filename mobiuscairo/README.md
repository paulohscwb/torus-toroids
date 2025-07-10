<link rel="stylesheet" href="../scripts/style1.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Torus and Toroids: visualization of solids with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/torus-toroids/mobiuscairo/pt-br/">versão em português</a>
 <form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More solids:</option>
		<option value="../basic/">Torus and toroids</option>
		<option value="../tetragonal/">Tetragonal toroids</option>
		<option value="../iris/">Iris toroids</option>
		<option value="../regulartetrag/">Regular tetragonal toroids</option>
		<option disabled value="../mobiuscairo/">Möbius, Vélez-Jahn and Cairo toroids</option>
		<!--<option value="../hexagonal/">Hexagonal toroids</option>
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
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Möbius, Vélez-Jahn and Cairo toroids</h2>
Cairo tiles are named after the plaster pattern on some streets in Cairo.
<br>Solids with characteristics similar to Möbius sheets were discovered by Gonzalo Vélez-Jahn in 1968. These solids were described by Martin Gardner as toroidal polyhedra, which are transformations of prismatic rings.
<br>This work shows Möbius, Vélez-Jahn and Cairo toroids modeled in 3D, with views that can be accessed with resources in immersive Virtual Reality rooms.
 <p align="center"><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
 <hr>
 <p align="center"><img src="vr/salas/videos/cairo1.gif" style="max-width: 45%; border-radius:5px; margin-right:15px" loading="lazy" alt="RV de Cairo"/><img src="vr/salas/videos/cairo2.gif" style="max-width: 45%; border-radius:5px;" loading="lazy" alt="RV de Mobius"/></p>
<hr>
<h3 id="m3d" align="center">Modelos 3D</h3>
<!--<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXgcL9RxOVEfCA1KDLByHZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<h4>1. Cairo Tiling Toroid</h4>
<a href="vr/CairoTiling.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/1A.png" class="foto" alt="Cairo Tiling Toroid"></a>
 <br><b>faces:</b> 8 mirror-symmetric pentagons | <b>vertices:</b> 12 | <b>edges:</b> 20
 <br>
<hr>
<h4>2. Cairo Tiling Toroid v2</h4>
<a href="vr/CairoTiling_A.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/2A.png" class="foto" alt="Cairo Tiling Toroid"></a>
 <br><b>faces:</b> 16 mirror-symmetric pentagons | <b>vertices:</b> 24 | <b>edges:</b> 40
 <br>
<hr>
<h4>3. Cairo Tiling Toroid v3</h4>
<a href="vr/CairoTiling_B.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/3A.png" class="foto" alt="Cairo Tiling Toroid"></a>
 <br><b>faces:</b> 16 irregular pentagons | <b>vertices:</b> 24 | <b>edges:</b> 40
 <br>
<hr>
<h4>4. Cairo Tiling boomerang Toroid</h4>
<a href="vr/CairoTiling_C.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/4A.png" class="foto" alt="Cairo Tiling Toroid boomerang"></a>
 <br><b>faces:</b> 16 irregular pentagons | <b>vertices:</b> 24 | <b>edges:</b> 40
 <br>
<hr>
<h4>5. Cairo Tiling boomerang Toroid v2</h4>
<a href="vr/CairoTiling_D.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/5A.png" class="foto" alt="Cairo Tiling Toroid boomerang"></a>
 <br><b>faces:</b> 16 irregular pentagons | <b>vertices:</b> 24 | <b>edges:</b> 40
 <br>
<hr>
<h4>6. Möbius and Vélez-Jahn Toroid of Chamfered Tetrahedron</h4>
<a href="vr/ChamferedTetrahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/6A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Chamfered Tetrahedra"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Chamfered Tetrahedra
 <br>
<hr>
<h4>7. Möbius and Vélez-Jahn Toroid of Cube</h4>
<a href="vr/Cube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/7A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Cubes"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cubes
 <br>
<hr>
<h4>8. Möbius and Vélez-Jahn Toroid of Cube kites</h4>
<a href="vr/CubeKites.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/8A.png" class="foto" alt="Möbius and Vélez-Jahn toroid modeled with 10 Cubes kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cubes kites
 <br>
<hr>
<h4>9. Möbius and Vélez-Jahn Toroid of Cubitruncated Cuboctahedron</h4>
<a href="vr/CubitruncatedCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/9A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Cubitruncated Cuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cubitruncated Cuboctahedrons
 <br>
<hr>
<h4>10. Möbius and Vélez-Jahn Toroid of Cuboctahedron</h4>
<a href="vr/Cuboctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/10A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Cuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cuboctahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>11. Möbius and Vélez-Jahn Toroid of Cuboctahedron kites</h4>
<a href="vr/CuboctahedronKites.html" target="_blank" title="3D model" class="fotoA"><img src="ar/11A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Cuboctahedron kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cuboctahedrons kites
 <br>
<hr>
<h4>12. Möbius and Vélez-Jahn Toroid of Cubohemioctahedron</h4>
<a href="vr/Cubohemioctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/12A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Cubohemioctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Cubohemioctahedrons
 <br>
<hr>
<h4>13. Möbius and Vélez-Jahn Toroid of Escher solid</h4>
<a href="vr/Escher.html" target="_blank" title="3D model" class="fotoA"><img src="ar/13A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Escher solid"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Escher solids
 <br>
<hr>
<h4>14. Möbius and Vélez-Jahn Toroid of Great Cubicuboctahedron</h4>
<a href="vr/GreatCubicuboctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/14A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Cubicuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Cubicuboctahedrons
 <br>
<hr>
<h4>15. Möbius and Vélez-Jahn Toroid of Great Rhombihexahedron</h4>
<a href="vr/GreatRhombihexahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/15A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Rhombihexahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Rhombihexahedrons
 <br>
<hr>
<h4>16. Möbius and Vélez-Jahn Toroid of Great Truncated Cuboctahedron</h4>
<a href="vr/GreatTruncatedCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/16A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Truncated Cuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Truncated Cuboctahedrons
 <br>
<hr>
<h4>17. Möbius and Vélez-Jahn Toroid of Octahemioctacron</h4>
<a href="vr/Octahemioctacron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/17A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Octahemioctacron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Octahemioctacrons
 <br>
<hr>
<h4>18. Möbius and Vélez-Jahn Toroid of Octahemioctahedron</h4>
<a href="vr/Octahemioctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/18A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Octahemioctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Octahemioctahedrons
 <br>
<hr>
<h4>19. Möbius and Vélez-Jahn Toroid of Rhombicuboctahedron</h4>
<a href="vr/Rhombicuboctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/19A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Rhombicuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Rhombicuboctahedrons
 <br>
<hr>
<h4>20. Möbius and Vélez-Jahn Toroid of Rhombicuboctahedron kites</h4>
<a href="vr/RhombicuboctahedronKites.html" target="_blank" title="3D model" class="fotoA"><img src="ar/20A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Rhombicuboctahedron kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Rhombicuboctahedrons kites
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>21. Möbius and Vélez-Jahn Toroid of Small Cubicuboctahedron</h4>
<a href="vr/SmallCubicuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/21A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Cubicuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Cubicuboctahedrons
 <br>
<hr>
<h4>22. Möbius and Vélez-Jahn Toroid of Small Rhombihexahedron</h4>
<a href="vr/SmallRhombihexahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/22A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Rhombihexahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Rhombihexahedrons
 <br>
<hr>
<h4>23. Möbius and Vélez-Jahn Toroid of Truncated Cube</h4>
<a href="vr/TruncatedCube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/23A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Cube"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Cubes
 <br>
<hr>
<h4>24. Möbius and Vélez-Jahn Toroid of Truncated Cube kites</h4>
<a href="vr/TruncatedCubeKites.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/24A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Cube kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Cubes kites
 <br>
<hr>
<h4>25. Möbius and Vélez-Jahn Toroid of Truncated Cuboctahedron</h4>
<a href="vr/TruncatedCuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/25A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Cuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated cuboctahedrons
 <br>
<hr>
<h4>26. Möbius and Vélez-Jahn Toroid of Truncated cuboctahedron kites</h4>
<a href="vr/TruncatedCuboctahedronKites.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/26A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated cuboctahedron kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated cuboctahedrons kites
 <br>
<hr>
<h4>27. Möbius and Vélez-Jahn Toroid of Truncated Octahedron</h4>
<a href="vr/TruncatedOctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/27A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Octahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Octahedrons
 <br>
<hr>
<h4>28. Möbius and Vélez-Jahn Toroid of Truncated Octahedron kites</h4>
<a href="vr/TruncatedOctahedronKites.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/28A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Octahedron kites"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Octahedrons kites
 <br>
<hr>
<h4>29. Möbius and Vélez-Jahn Toroid of Concave Dodecahedron</h4>
<a href="vr/ConcaveDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/29A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of concave dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Concave Dodecahedrons
 <br>
<hr>
<h4>30. Möbius and Vélez-Jahn Toroid of Ditrigonal Dodecadodecahedron</h4>
<a href="vr/DitrigonalDodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/30A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of ditrigonal dodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Ditrigonal Dodecadodecahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>31. Möbius and Vélez-Jahn Toroid of Dodecadodecahedron</h4>
<a href="vr/Dodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/31A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Dodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Dodecadodecahedrons
 <br>
<hr>
<h4>32. Möbius and Vélez-Jahn Toroid of Dodecahedron</h4>
<a href="vr/Dodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/32A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Dodecahedrons
 <br>
<hr>
<h4>33. Möbius and Vélez-Jahn Toroid of Great Ditrigonal Dodecicosidodecahedron</h4>
<a href="vr/GreatDitrigonalDodecicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/33A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Ditrigonal Dodecicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Ditrigonal Dodecicosidodecahedrons
 <br>
<hr>
<h4>34. Möbius and Vélez-Jahn Toroid of Great Ditrigonal Icosidodecahedron</h4>
<a href="vr/GreatDitrigonalIcosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/34A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Ditrigonal Icosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Ditrigonal Icosidodecahedrons
 <br>
<hr>
<h4>35. Möbius and Vélez-Jahn Toroid of Great Dodecacronic Hexecontahedron</h4>
<a href="vr/GreatDodecacronicHexecontahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/35A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecacronic hexecontahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecacronic Hexecontahedrons
 <br>
<hr>
<h4>36. Möbius and Vélez-Jahn Toroid of Great Godecahedron</h4>
<a href="vr/GreatDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/36A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecahedrons
 <br>
<hr>
<h4>37. Möbius and Vélez-Jahn Toroid of Great Dodecahemicosahedron</h4>
<a href="vr/GreatDodecahemicosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/37A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecahemicosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecahemicosahedrons
 <br>
<hr>
<h4>38. Möbius and Vélez-Jahn Toroid of Great Dodecahemidodecahedron</h4>
<a href="vr/GreatDodecahemidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/38A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecahemidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecahemidodecahedrons
 <br>
<hr>
<h4>39. Möbius and Vélez-Jahn Toroid of Great Dodecicosahedron</h4>
<a href="vr/GreatDodecicosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/39A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecicosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecicosahedrons
 <br>
<hr>
<h4>40. Möbius and Vélez-Jahn Toroid of Great Dodecicosidodecahedron</h4>
<a href="vr/GreatDodecicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/40A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great dodecicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Dodecicosidodecahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>41. Möbius and Vélez-Jahn Toroid of Great Icosahedron</h4>
<a href="vr/GreatIcosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/41A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Icosahedrons
 <br>
<hr>
<h4>42. Möbius and Vélez-Jahn Toroid of Great Icosicosidodecahedron</h4>
<a href="vr/GreatIcosicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/42A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great icosicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Icosicosidodecahedrons
 <br>
<hr>
<h4>43. Möbius and Vélez-Jahn Toroid of Great Icosidodecahedron</h4>
<a href="vr/GreatIcosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/43A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great icosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Icosidodecahedrons
 <br>
<hr>
<h4>44. Möbius and Vélez-Jahn Toroid of Great Icosihemidodecahedron</h4>
<a href="vr/GreatIcosihemidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/44A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great icosihemidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Icosihemidodecahedrons
 <br>
<hr>
<h4>45. Möbius and Vélez-Jahn Toroid of Great Rhombidodecahedron</h4>
<a href="vr/GreatRhombidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/45A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great rhombidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great rhombidodecahedrons
 <br>
<hr>
<h4>46. Möbius and Vélez-Jahn Toroid of Great Stellated Truncated Dodecahedron</h4>
<a href="vr/GreatStellatedTruncatedDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/46A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great stellated truncated dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Stellated Truncated Dodecahedrons
 <br>
<hr>
<h4>47. Möbius and Vélez-Jahn Toroid of Great Truncated Icosidodecahedron</h4>
<a href="vr/GreatTruncatedIcosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/47A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of great truncated icosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Truncated Icosidodecahedrons
 <br>
<hr>
<h4>48. Möbius and Vélez-Jahn Toroid of Icosahedron</h4>
<a href="vr/Icosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/48A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Icosahedrons
 <br>
<hr>
<h4>49. Möbius and Vélez-Jahn Toroid of Icosidodecadodecahedron</h4>
<a href="vr/Icosidodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/49A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of icosidodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Icosidodecadodecahedrons
 <br>
<hr>
<h4>50. Möbius and Vélez-Jahn Toroid of Icositruncated Dodecadodecahedron</h4>
<a href="vr/IcositruncatedDodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/50A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Icositruncated Dodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Icositruncated Dodecadodecahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>51. Möbius and Vélez-Jahn Toroid of Pentakis Dodecahedron</h4>
<a href="vr/PentakisDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/51A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Pentakis Dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Pentakis Dodecahedrons
 <br>
<hr>
<h4>52. Möbius and Vélez-Jahn Toroid of Rhombicosahedron</h4>
<a href="vr/Rhombicosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/52A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Rhombicosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Rhombicosahedrons
 <br>
<hr>
<h4>53. Möbius and Vélez-Jahn Toroid of Rhombicosidodecahedron</h4>
<a href="vr/Rhombicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/53A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Rhombicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Rhombicosidodecahedrons
 <br>
<hr>
<h4>54. Möbius and Vélez-Jahn Toroid of Rhombidodecadodecahedron</h4>
<a href="vr/Rhombidodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/54A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Rhombidodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Rhombidodecadodecahedron
 <br>
<hr>
<h4>55. Möbius and Vélez-Jahn Toroid of Small Ditrigonal Dodecicosidodecahedron</h4>
<a href="vr/SmallDitrigonalDodecicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/55A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Ditrigonal Dodecicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Ditrigonal Dodecicosidodecahedrons
 <br>
<hr>
<h4>56. Möbius and Vélez-Jahn Toroid of Small Ditrigonal Icosidodecahedron</h4>
<a href="vr/SmallDitrigonalIcosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/56A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Ditrigonal Icosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Ditrigonal Icosidodecahedrons
 <br>
<hr>
<h4>57. Möbius and Vélez-Jahn Toroid of Small Dodecahemicosahedron</h4>
<a href="vr/SmallDodecahemicosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/57A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Dodecahemicosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Dodecahemicosahedrons
 <br>
<hr>
<h4>58. Möbius and Vélez-Jahn Toroid of Small Dodecicosahedron</h4>
<a href="vr/SmallDodecicosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/58A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small dodecicosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Dodecicosahedrons
 <br>
<hr>
<h4>59. Möbius and Vélez-Jahn Toroid of Small Dodecicosidodecahedron</h4>
<a href="vr/SmallDodecicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/59A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small dodecicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Dodecicosidodecahedrons
 <br>
<hr>
<h4>60. Möbius and Vélez-Jahn Toroid of Small Hexagonal Hexecontahedron</h4>
<a href="vr/SmallHexagonalHexecontahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/60A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Hexagonal Hexecontahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Hexagonal Hexecontahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>61. Möbius and Vélez-Jahn Toroid of Small Icosicosidodecahedron</h4>
<a href="vr/SmallIcosicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/61A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small icosicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Icosicosidodecahedrons
 <br>
<hr>
<h4>62. Möbius and Vélez-Jahn Toroid of Small Rhombidodecahedron</h4>
<a href="vr/SmallRhombidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/62A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Rhombidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Rhombidodecahedrons
 <br>
<hr>
<h4>63. Möbius and Vélez-Jahn Toroid of Small Snub Icosicosidodecahedron</h4>
<a href="vr/SmallSnubIcosicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/63A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Snub Icosicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Snub Icosicosidodecahedrons
 <br>
<hr>
<h4>64. Möbius and Vélez-Jahn Toroid of Small Stellated Truncated Dodecahedron</h4>
<a href="vr/SmallStellatedTruncatedDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/64A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Stellated Truncated Dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Stellated Truncated Dodecahedrons
 <br>
<hr>
<h4>65. Möbius and Vélez-Jahn Toroid of Small Triambic Icosahedron</h4>
<a href="vr/SmallTriambicIcosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/65A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Small Triambic Icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Small Triambic Icosahedrons
 <br>
<hr>
<h4>66. Möbius and Vélez-Jahn Toroid of Stellated Truncated Hexahedron</h4>
<a href="vr/StellatedTruncatedHexahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/66A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Stellated Truncated Hexahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Stellated Truncated Hexahedrons
 <br>
<hr>
<h4>67. Möbius and Vélez-Jahn Toroid of Triakis Icosahedron</h4>
<a href="vr/TriakisIcosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/67A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Triakis Icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Triakis Icosahedrons
 <br>
<hr>
<h4>68. Möbius and Vélez-Jahn Toroid of Truncated Dodecadodecahedron</h4>
<a href="vr/TruncatedDodecadodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/68A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Dodecadodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Dodecadodecahedrons
 <br>
<hr>
<h4>69. Möbius and Vélez-Jahn Toroid of Truncated Dodecahedron</h4>
<a href="vr/TruncatedDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/69A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Dodecahedrons
 <br>
<hr>
<h4>70. Möbius and Vélez-Jahn Toroid of Great Truncated Dodecahedron</h4>
<a href="vr/TruncatedGreatDodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/70A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Truncated Dodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Truncated Dodecahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>
<h4>71. Möbius and Vélez-Jahn Toroid of Great Truncated Icosahedron</h4>
<a href="vr/TruncatedGreatIcosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/71A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Great Truncated Icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Great Truncated Icosahedrons
 <br>
<hr>
<h4>72. Möbius and Vélez-Jahn Toroid of Truncated Icosahedron</h4>
<a href="vr/TruncatedIcosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/72A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Icosahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Icosahedrons
 <br>
<hr>
<h4>73. Möbius and Vélez-Jahn Toroid of Truncated Icosidodecahedron</h4>
<a href="vr/TruncatedIcosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/73A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Truncated Icosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Truncated Icosidodecahedrons
 <br>
<hr>
<h4>74. Möbius and Vélez-Jahn Toroid of Uniform Great Rhombicosidodecahedron</h4>
<a href="vr/UniformGreatRhombicosidodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/74A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Uniform Great Rhombicosidodecahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Uniform Great Rhombicosidodecahedrons
 <br>
<hr>
<h4>75. Möbius and Vélez-Jahn Toroid of Uniform Great Rhombicuboctahedron</h4>
<a href="vr/UniformGreatRhombicuboctahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/75A.png" class="foto" alt="Möbius and Vélez-Jahn Toroid of Uniform Great Rhombicuboctahedron"></a>
 <br>Möbius and Vélez-Jahn toroid modeled with 10 Uniform Great Rhombicuboctahedrons
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">back to top</a></p>


<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Möbius, Vélez-Jahn and Cairo toroids: visualization of solids with Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/torus-toroids/mobiuscairo/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Möbius, Vélez-Jahn and Cairo toroids: visualization of solids with Virtual Reality". Available in: <https://paulohscwb.github.io/torus-toroids/mobiuscairo/>, July 2025.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.14502405"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.14502405.svg" alt="DOI"></a>-->
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Torus" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Torus.html" target="_blank">https://mathworld.wolfram.com/Torus.html</a>
<br>Weisstein, Eric W. "Toroid" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Toroid.html" target="_blank">https://mathworld.wolfram.com/Toroid.html</a>
<br>McCooey, D. I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
