<link rel="stylesheet" type="text/css" href="dropzone.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
<script type="text/javascript" src="dropzone.js"></script>

<div id="myId" class="dropzone"></div>

<script type="text/javascript">
	$('div#myId').dropzone({ 
		url: 'action.php'
	});
</script>

<!-- <form action="/file-upload" class="dropzone">
	<div class="fallback">
		<input type="file" name="file" />
	</div>
</form> -->
<?php

echo $upload_directory = __DIR__ . DIRECTORY_SEPARATOR . 'docs' . DIRECTORY_SEPARATOR;

echo '<br>';

echo $_SERVER['HTTP_HOST']. $_SERVER['SERVER_NAME'];
?>
