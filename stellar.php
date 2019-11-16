<?php
require_once '../adodb5/adodb.inc.php';
$cabrew_array = parse_ini_file('stellar.ini', true);
$skin = $cabrew_array['application']['skin'];
$title = $cabrew_array['application']['title'];
$version = $cabrew_array['application']['smartclient_version'];
$classes = array();
$classes[] = "ClassDefaults.js";
$classes[] = "Desktop.js";
$classes[] = "Navigation.js";
$classes[] = "Class.js";
$classes[] = "Division.js";
$classes[] = "Group.js";
$classes[] = "ShowInfo.js";
echo "<html>
<head>
<script>var isc = null;</script>
<script>var isomorphicDir = '{$version}isomorphic/';</script>
<script src='{$version}isomorphic/system/modules/ISC_Core.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_Foundation.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_Containers.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_Grids.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_Forms.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_DataBinding.js'></script>
<script src='{$version}isomorphic/system/modules/ISC_RichTextEditor.js'></script>
<script src='{$version}isomorphic/skins/{$skin}/load_skin.js'></script>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<title>$title</title>
</head>
<body>
<script>
";
$content = '';
foreach($classes as $class){
	if(file_exists($class)){
		$content .= file_get_contents($class);
	}
}
echo $content;
// $now = date(DATE_RFC2822);
$now = date("Y-m-d H:m:s e O");
$str = "Stellar Notes For - {$now}";
echo 'isc.Desktop.create({data: "'. $str .'"});
</script>
</body>
</html>';
