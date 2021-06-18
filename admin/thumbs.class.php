<?php
// thumbimage.class.php
class ThumbImage
{
    private $source;
 
    public function __construct($sourceImagePath)
    {
        $this->source = $sourceImagePath;
    }
 
    public function createThumb($destImagePath, $thumbWidth=100)
    {
        $sourceImage = imagecreatefromjpeg($this->source);
        $orgWidth = imagesx($sourceImage);
        $orgHeight = imagesy($sourceImage);
        $thumbHeight = $thumbWidth;
        $destImage = imagecreatetruecolor($thumbWidth, $thumbWidth);
        imagecopyresampled($destImage, $sourceImage, 0, 0, 0, 0, $thumbWidth, $thumbWidth, $orgWidth, $orgHeight);
        imagejpeg($destImage, $destImagePath);
        imagedestroy($sourceImage);
        imagedestroy($destImage); 
    }
}