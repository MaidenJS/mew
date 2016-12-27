<?php

$temp = $_FILES['file']['tmp_name'];
$upload_directory = __DIR__ . DIRECTORY_SEPARATOR . 'docs' . DIRECTORY_SEPARATOR;
$target_path = $upload_directory . $_FILES['file']['name'];
move_uploaded_file($temp, $target_path);