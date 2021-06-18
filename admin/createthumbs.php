
<?php
require "thumbimage.class.php";

        $imagelist = glob("../medias/images/galerie/*.*");
        $miniPath = "../medias/images/galerie/mini/";
        
        foreach($imagelist as $image){
           
        $objThumbImage = new ThumbImage($image);
        $objThumbImage->createThumb($miniPath.basename($image), 125);
        
    }
    echo "done";
    ?>