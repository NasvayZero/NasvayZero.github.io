<?php
header('Content-Type: application/json');

sleep(rand(2, 5)); 

$response = [
    'status' => 'success',
    'message' => 'Данные успешно обработаны!',
    'timestamp' => date('Y-m-d H:i:s')
];

echo json_encode($response);
?>
