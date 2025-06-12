<link rel="stylesheet" href="../../scripts/style1.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../vr/salas/imagens/icone.png">
<h2>Toros e toroides: visualização dos sólidos com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/torus-toroids/regulartetrag/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais sólidos:</option>
		<option value="../../basic/pt-br/">Toros e toroides</option>
		<option value="../../tetragonal/pt-br/">Toroides tetragonais</option>
		<option value="../../iris/pt-br/">Toroides de íris</option>
		<option disabled value="../../regulartetrag/pt-br/">Toroides tetragonais regulares</option>
		<!--<option value="../../mobius-cairo/pt-br/">Toroides de Mobius e Cairo</option>
		<option value="../../hexagonal/pt-br/">Toroides hexagonais</option>
		<option value="../../heptagonal/pt-br/">Dodecaedros heptagonais</option>
		<option value="../../regular1/pt-br/">Toroides poligonais regulares 1</option>
		<option value="../../regular2/pt-br/">Toroides poligonais regulares 2</option>
		<option value="../../regular3/pt-br/">Toroides poligonais regulares 3</option>
		<option value="../../rings/pt-br/">Anéis toroides</option>
		<option value="../../regular4/pt-br/">Toroides poligonais regulares 4</option>
		<option value="../../regular5/pt-br/">Toroides poligonais regulares 5</option>-->
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p1"></p>
  <h2 align="center"><img src="../vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Toroides tetragonais regulares</h2>
Um sólido toroidal ou toroide é um poliedro orientável sem autointerseções que tem gênero maior que zero (o que significa que contém um ou mais buracos). O gênero (G) de um poliedro orientável está relacionado ao número de vértices (V), faces (F) e arestas (E) da seguinte forma:
<center>V + F − E = 2 − 2 * G</center>
Este trabalho mostra toroides tetragonais regulares modelados em 3D, com as visualizações que podem ser acessadas com recursos em salas de Realidade Virtual imersivas.
 <p align="center"><a href="#m3d">Modelos 3D</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../../pt-br/">Página Inicial</a></p>
 <hr>
  <p align="center"><img src="../vr/salas/videos/reg1.gif" style="max-width: 45%; border-radius:5px; margin-right:15px" loading="lazy" alt="VR de toroides tetragonais regulares"/><img src="../vr/salas/videos/reg2.gif" style="max-width: 45%; border-radius:5px;" loading="lazy" alt="VR de toroides tetragonais regulares"/></p>  
<hr>
<h3 id="m3d" align="center">3D models</h3>
<!--<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXgcL9RxOVEfCA1KDLByHZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<h4>1. Toroide tetragonal regular triangular</h4>
<a href="../vr/Regular3TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/1A.png" class="foto" alt="Toroide tetragonal regular triangular"></a>
 <br><b>faces:</b> 12 trapézios
 <br><b>vértices:</b> 12
 <br><b>arestas:</b> 24
 <br>
<hr>
<h4>2. Toroide tetragonal regular quadrado</h4>
<a href="../vr/Regular4TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/2A.png" class="foto" alt="Toroide tetragonal regular quadrado"></a>
 <br><b>faces:</b> 16 trapézios
 <br><b>vértices:</b> 16
 <br><b>arestas:</b> 32
 <br>
<hr>
<h4>3. Toroide tetragonal senoidal regular quadrado</h4>
<a href="../vr/Regular4TetragonalToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/3A.png" class="foto" alt="Toroide tetragonal senoidal regular quadrado"></a>
 <br><b>faces:</b> 32 triângulos
 <br><b>vértices:</b> 16
 <br><b>arestas:</b> 40
 <br>
<hr>
<h4>4. Toroide tetragonal regular pentagonal</h4>
<a href="../vr/Regular5TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/4A.png" class="foto" alt="Toroide tetragonal regular pentagonal"></a>
 <br><b>faces:</b> 20 trapézios
 <br><b>vértices:</b> 20
 <br><b>arestas:</b> 40
 <br>
<hr>
<h4>5. Toroide tetragonal regular estrelado pentagonal</h4>
<a href="../vr/Regular5TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/5A.png" class="foto" alt="Toroide tetragonal regular estrelado pentagonal"></a>
 <br><b>faces:</b> 40 trapézios
 <br><b>vértices:</b> 40
 <br><b>arestas:</b> 80
 <br>
<hr>
<h4>6. Toroide tetragonal regular estrelado pentagonal v2</h4>
<a href="../vr/Regular5TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/6A.png" class="foto" alt="Toroide tetragonal regular estrelado pentagonal"></a>
 <br><b>faces:</b> 80 triângulos
 <br><b>vértices:</b> 40
 <br><b>arestas:</b> 120
 <br>
<hr>
<h4>7. Toroide tetragonal regular hexagonal</h4>
<a href="../vr/Regular6TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/7A.png" class="foto" alt="Toroide tetragonal regular hexagonal"></a>
 <br><b>faces:</b> 24 trapézios
 <br><b>vértices:</b> 24
 <br><b>arestas:</b> 48
 <br>
<hr>
<h4>8. Toroide tetragonal regular estrelado hexagonal</h4>
<a href="../vr/Regular6TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/8A.png" class="foto" alt="Toroide tetragonal regular estrelado hexagonal"></a>
 <br><b>faces:</b> 48 trapézios
 <br><b>vértices:</b> 48
 <br><b>arestas:</b> 96
 <br>
<hr>
<h4>9. Toroide tetragonal regular estrelado hexagonal v2</h4>
<a href="../vr/Regular6TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/9A.png" class="foto" alt="Toroide tetragonal regular estrelado hexagonal"></a>
 <br><b>faces:</b> 96 triângulos
 <br><b>vértices:</b> 48
 <br><b>arestas:</b> 144
 <br>
<hr>
<h4>10. Toroide tetragonal senoidal regular hexagonal</h4>
<a href="../vr/Regular6TetragonalToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/10A.png" class="foto" alt="Toroide tetragonal senoidal regular hexagonal"></a>
 <br><b>faces:</b> 48 triângulos
 <br><b>vértices:</b> 24
 <br><b>arestas:</b> 72
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
<h4>11. Toroide tetragonal regular senoidal estrelado hexagonal</h4>
<a href="../vr/Regular6TetragonalStarToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/11A.png" class="foto" alt="Toroide tetragonal regular senoidal estrelado hexagonal"></a>
 <br><b>faces:</b> 96 triângulos
 <br><b>vértices:</b> 48
 <br><b>arestas:</b> 144
 <br>
<hr>
<h4>12. Toroide tetragonal regular heptagonal</h4>
<a href="../vr/Regular7TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/12A.png" class="foto" alt="Toroide tetragonal regular heptagonal"></a>
 <br><b>faces:</b> 28 trapézios
 <br><b>vértices:</b> 28
 <br><b>arestas:</b> 56
 <br>
<hr>
<h4>13. Toroide tetragonal regular estrelado heptagonal</h4>
<a href="../vr/Regular7TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/13A.png" class="foto" alt="Toroide tetragonal regular estrelado heptagonal"></a>
 <br><b>faces:</b> 56 trapézios
 <br><b>vértices:</b> 56
 <br><b>arestas:</b> 112
 <br>
<hr>
<h4>14. Toroide tetragonal regular estrelado heptagonal v2</h4>
<a href="../vr/Regular7TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/14A.png" class="foto" alt="Toroide tetragonal regular estrelado heptagonal"></a>
 <br><b>faces:</b> 112 triângulos
 <br><b>vértices:</b> 56
 <br><b>arestas:</b> 168
 <br>
<hr>
<h4>15. Toroide tetragonal regular octogonal</h4>
<a href="../vr/Regular8TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/15A.png" class="foto" alt="Toroide tetragonal regular octogonal"></a>
 <br><b>faces:</b> 32 trapézios
 <br><b>vértices:</b> 32
 <br><b>arestas:</b> 64
 <br>
<hr>
<h4>16. Toroide tetragonal regular estrelado octogonal</h4>
<a href="../vr/Regular8TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/16A.png" class="foto" alt="Toroide tetragonal regular estrelado octogonal"></a>
 <br><b>faces:</b> 64 trapézios
 <br><b>vértices:</b> 64
 <br><b>arestas:</b> 128
 <br>
<hr>
<h4>17. Toroide tetragonal regular estrelado octogonal v2</h4>
<a href="../vr/Regular8TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/17A.png" class="foto" alt="Toroide tetragonal regular estrelado octogonal"></a>
 <br><b>faces:</b> 128 triângulos
 <br><b>vértices:</b> 64
 <br><b>arestas:</b> 192
 <br>
<hr>
<h4>18. Toroide tetragonal senoidal regular octogonal</h4>
<a href="../vr/Regular8TetragonalToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/18A.png" class="foto" alt="Toroide tetragonal senoidal regular octogonal"></a>
 <br><b>faces:</b> 64 triângulos
 <br><b>vértices:</b> 32
 <br><b>arestas:</b> 96
 <br>
<hr>
<h4>19. Toroide tetragonal regular senoidal estrelado octogonal</h4>
<a href="../vr/Regular8TetragonalStarToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/19A.png" class="foto" alt="Toroide tetragonal regular senoidal estrelado octogonal"></a>
 <br><b>faces:</b> 128 triângulos
 <br><b>vértices:</b> 64
 <br><b>arestas:</b> 192
 <br>
<hr>
<h4>20. Toroide tetragonal regular eneagonal</h4>
<a href="../vr/Regular9TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/20A.png" class="foto" alt="Toroide tetragonal regular eneagonal"></a>
 <br><b>faces:</b> 36 trapézios
 <br><b>vértices:</b> 36
 <br><b>arestas:</b> 72
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
<h4>21. Toroide tetragonal regular estrelado eneagonal</h4>
<a href="../vr/Regular9TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/21A.png" class="foto" alt="Toroide tetragonal regular estrelado eneagonal"></a>
 <br><b>faces:</b> 72 trapézios
 <br><b>vértices:</b> 72
 <br><b>arestas:</b> 144
 <br>
<hr>
<h4>22. Toroide tetragonal regular estrelado eneagonal v2</h4>
<a href="../vr/Regular9TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/22A.png" class="foto" alt="Toroide tetragonal regular estrelado eneagonal"></a>
 <br><b>faces:</b> 144 triângulos
 <br><b>vértices:</b> 72
 <br><b>arestas:</b> 216
 <br>
<hr>
<h4>23. Toroide tetragonal regular decagonal</h4>
<a href="../vr/Regular10TetragonalToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/23A.png" class="foto" alt="Toroide tetragonal regular decagonal"></a>
 <br><b>faces:</b> 40 trapézios
 <br><b>vértices:</b> 40
 <br><b>arestas:</b> 80
 <br>
<hr>
<h4>24. Toroide tetragonal regular estrelado decagonal</h4>
<a href="../vr/Regular10TetragonalStarToroid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/24A.png" class="foto" alt="Toroide tetragonal regular estrelado decagonal"></a>
 <br><b>faces:</b> 80 trapézios
 <br><b>vértices:</b> 80
 <br><b>arestas:</b> 160
 <br>
<hr>
<h4>25. Toroide tetragonal regular estrelado decagonal v2</h4>
<a href="../vr/Regular10TetragonalStarToroid1.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/25A.png" class="foto" alt="Toroide tetragonal regular estrelado decagonal"></a>
 <br><b>faces:</b> 160 triângulos
 <br><b>vértices:</b> 80
 <br><b>arestas:</b> 240
 <br>
<hr>
<h4>26. Toroide tetragonal senoidal regular decagonal</h4>
<a href="../vr/Regular10TetragonalToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/26A.png" class="foto" alt="Toroide tetragonal senoidal regular decagonal"></a>
 <br><b>faces:</b> 80 triângulos
 <br><b>vértices:</b> 40
 <br><b>arestas:</b> 120
 <br>
<hr>
<h4>27. Toroide tetragonal regular senoidal estrelado decagonal</h4>
<a href="../vr/Regular10TetragonalStarToroidSin.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/27A.png" class="foto" alt="Toroide tetragonal regular senoidal estrelado decagonal"></a>
 <br><b>faces:</b> 160 triângulos
 <br><b>vértices:</b> 80
 <br><b>arestas:</b> 240
 <br>
<hr>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Regular tetragonal toroids: visualization of solids with Virtual Reality</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/torus-toroids/regulartetrag/pt-br/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Regular tetragonal toroids: visualization of solids with Virtual Reality". Disponível em: <https://paulohscwb.github.io/torus-toroids/regulartetrag/pt-br/>, Maio de 2025.</p>
<!--<a target="_blank" href="https://doi.org/10.5281/zenodo.14502405"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.14502405.svg" alt="DOI"></a>-->
<br><br><b>Referências:</b>
<br>Weisstein, Eric W. "Torus" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Torus.html" target="_blank">https://mathworld.wolfram.com/Torus.html</a>
<br>Weisstein, Eric W. "Toroid" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/Toroid.html" target="_blank">https://mathworld.wolfram.com/Toroid.html</a>
<br>McCooey, D. I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
