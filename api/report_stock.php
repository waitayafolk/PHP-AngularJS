<?php
include('condb.php');
$params = json_decode(file_get_contents('php://input'));

    $sql =" SELECT tb_product.* , 
    SUM(tb_bill_sale_detail.qty) AS stock_out,
    SUM(tb_stock_detail.qty) AS stock_in
    FROM tb_product 
    LEFT JOIN tb_bill_sale_detail ON tb_bill_sale_detail.product_id = tb_product.id
    LEFT JOIN tb_stock_detail ON tb_stock_detail.product_id = tb_product.id
    WHERE tb_product.status = 'use' 
    GROUP BY tb_bill_sale_detail.qty , tb_stock_detail.qty
    ORDER BY tb_product.id DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $stock_product = $stmt->fetchAll();
        echo json_encode(array('stock_product' => $stock_product));
?>
