<?php
$nombre = count(glob("medias/images/galerie/*.*"));
$nbmax = 9;
$cadres = (int)$nombre/$nbmax;
$imagelist = glob("medias/images/galerie/*.*");
$minilist = glob("medias/images/galerie/mini/*.*");
echo "<div class=\"siema\">";
for ($i = 0; $i < $cadres; $i++) {
    echo "<div class=\"reaslist galerie\">";
    for ($j =0;$j<$nbmax;$j++) {
        $index = $j+$i*$nbmax;
        if($imagelist[$index]){
        echo "<figure><a href=\"$imagelist[$index]\"><img src=\"$minilist[$index]\"
         alt=\"icone lien video \" width=\"100\" class=\"videothumb\"></a></figure>";}
    }
;
     
echo "</div>";
}
echo "</div>";
?>
 
