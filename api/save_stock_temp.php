<?php
include('condb.php');
$params = json_decode(file_get_contents('php://input'));
// print_r($params);exit();
$sql = "
INSERT INTO tb_stock_temp (product_id,qty,price)VALUE(:product_id , :qty ,:price)";
$product = array(
    ':product_id' => $params->id,
    ':qty' => 1,
    ':price' => $params->product_price
);
$stmt = $pdo->prepare($sql);
$stmt->execute($product);
echo json_encode(array('message' => 'success'));

// if(!empty($params->id)){

//     }
//     else{
//         $sql = "
//         INSERT INTO tb_product(product_code, product_name, product_price , product_detail, group_product_id, status) 
//         VALUES(:product_code, :product_name, :product_price , :product_detail, :group_product_id, 'use')
//         ";
//         $product = array(
//             ':product_code' => $params->product_code,
//             ':product_name' => $params->product_name,
//             ':product_price' => $params->product_price,
//             ':product_detail' => $params->product_detail,
//             ':group_product_id' => $params->group_product_id
//         );
//         $stmt = $pdo->prepare($sql);
//         $stmt->execute($product);
//     }       
//             

?>