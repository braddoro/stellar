<?php
require_once 'Connect.php';
$table = 'Chapters';
$primaryKey = 'chapterID';
$conn = new Connect();
$dbconn = $conn->conn();
// $dbconn->debug = true;
if(!$dbconn->isConnected()){
	$response = array('status' => -1, 'errorMessage' => $dbconn->errorMsg());
	echo json_encode($response);
	exit(1);
}
$pkval = (isset($_REQUEST[$primaryKey])) ? intval($_REQUEST[$primaryKey]) : NULL;
$operationType = (isset($_REQUEST['operationType'])) ? $_REQUEST['operationType'] : 'fetch';
switch($operationType){
case 'fetch':
	$where = '1=1';
	break;
case 'add':
	$data = array('table' => $table, 'primaryKey' => $primaryKey, 'newvals' => $_REQUEST);
	$record = $conn->buildRecordset($data);
	$dbconn->AutoExecute($table, $record, DB_AUTOQUERY_INSERT);
	$pkval = $dbconn->insert_Id();
	$where = $primaryKey . '=' . $pkval;
	break;
case 'update':
	$data = array('table' => $table, 'primaryKey' => $primaryKey, 'newvals' => $_REQUEST);
	$record = $conn->buildRecordset($data);
	$where = $primaryKey . '=' . $pkval;
	$dbconn->AutoExecute($table, $record, DB_AUTOQUERY_UPDATE, $where);
 	break;
case 'remove':
	$where = "{$primaryKey} = {$pkval}";
	$sql = "delete from {$table} where {$where};";
	$dbconn->execute($sql);
	break;
default:
	break;
}
$sql = "select * from {$table} where {$where};";
// echo "/* {$sql} */";
$response = $dbconn->getAll($sql);
// if(!$response){
// 	$response = array('status' => -4, 'errors' => array('errorMessage' => $dbconn->errorMsg()));
// }
echo json_encode($response);
$dbconn->close();
