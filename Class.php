<?php
require_once 'Connect.php';
$conn = new Connect();
$dbconn = $conn->conn();
if(!$dbconn->isConnected()){
	$response = array('status' => -1, 'errorMessage' => $dbconn->errorMsg());
	echo json_encode($response);
	exit(1);
}
$where = '1=1';
//if(isset($_REQUEST['itemDetail'])){
//	$qStr = $dbconn->qStr($_REQUEST['itemDetail'], true);
//	$where .= " and ld.itemDetail like '%{$_REQUEST['itemDetail']}%' ";
//}
$sql = "SELECT * FROM Classes;";
// echo "/* {$sql} */";
$response = $dbconn->getAll($sql);
if(!$response){
	$response = array('status' => -4, 'errors' => array('errorMessage' => $dbconn->errorMsg()));
}
echo json_encode($response);
$dbconn->close();
