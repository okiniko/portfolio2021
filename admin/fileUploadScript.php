<?php
require "thumbimage.class.php";
 
    
    $currentDirectory = dirname(__FILE__);
    $uploadDirectory = "/../medias/images/galerie/";
    $miniDirectory = "/../medias/images/galerie/mini/";
    $errors = []; // Store errors here
    $filenewname = $_POST['the_newname'];
    $fileExtensionsAllowed = ['jpeg','jpg','png']; // These will be the only file extensions allowed 
    $fileName = $_FILES['the_file']['name'];
    $fileSize = $_FILES['the_file']['size'];
    $fileTmpName  = $_FILES['the_file']['tmp_name'];
    $fileType = $_FILES['the_file']['type'];
    $fileExtension = strtolower(end(explode('.',$fileName)));

    $uploadPath = $currentDirectory . $uploadDirectory .$filenewname.".". $fileExtension; 
    $miniPath = $currentDirectory . $miniDirectory .$filenewname."_mini.". $fileExtension;
    if (isset($_POST['submit'])) {

      if (! in_array($fileExtension,$fileExtensionsAllowed)) {
        $errors[] = "This file extension is not allowed. Please upload a JPEG or PNG file";
      }

      if ($fileSize > 4000000) {
        $errors[] = "File exceeds maximum size (10MB)";
      }

      if (empty($errors)) {
        $didUpload = move_uploaded_file($fileTmpName, $uploadPath);
        $objThumbImage = new ThumbImage($uploadPath);
        $objThumbImage->createThumb($miniPath, 125);
        if ($didUpload) {
          
          echo "The file " . basename($fileName) . " has been uploaded";
        } else {
          echo $currentDirectory.$uploadDirectory.basename($fileName);
        }
      } else {
        foreach ($errors as $error) {
          echo $error . "These are the errors" . "\n";
        }
      }

    }
?>