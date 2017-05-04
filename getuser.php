<?php
$q=$_GET["q"];

$xmlDoc = new DOMDocument();
$xmlDoc->load("Books.xml");

$x=$xmlDoc->getElementsByTagName('School');

for ($i=0; $i<=$x->length-1; $i++) {
  //Process only element nodes
  if ($x->item($i)->nodeType==1) {
    if ($x->item($i)->childNodes->item(0)->nodeValue == $q) {
      $y=($x->item($i)->parentNode);
    }
  }
}

$cd=($y->childNodes);

for ($i=0;$i<$cd->length;$i++) { 
  //Process only element nodes
  if ($cd->item($i)->nodeType==1) {
    echo("<b>" . $cd->item($i)->nodeName . ":</b> ");
    echo($cd->item($i)->childNodes->item(0)->nodeValue);
    echo("<br>");
  }
}
?>

<?php
$q=$_GET["q"];

$xmlDoc = new DOMDocument();
$xmlDoc->load("Books.xml");

$x=$xmlDoc->getElementsByTagName('School');








<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','peter','abc123','my_db');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);


echo "<table>
<th>School</th>
<th>Subject</th>
<th>Class</th>
<th>ISBN</th>
<th>Book_name</th>
<th>Book_author</th>
<th>New_price</th>
<th>Used_price</th>
</tr>;

while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['School'] . "</td>";    
    echo "<td>" . $row['Subject'] . "</td>";
    echo "<td>" . $row['Class'] . "</td>";
    echo "<td>" . $row['ISBN'] . "</td>";
    echo "<td>" . $row['Book_name'] . "</td>";
    echo "<td>" . $row['Book_author'] . "</td>";
    echo "<td>" . $row['New_price'] . "</td>";
    echo "<td>" . $row['Used_price'] . "</td>";

    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>