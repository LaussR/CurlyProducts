<?php
$host = 'localhost';
$dbname = 'usuarios';
$username = 'root';
$password = ''; // Si tu base de datos no tiene contraseña, deja vacío.

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Error de conexión: ' . $e->getMessage();
    die();
}
?>
