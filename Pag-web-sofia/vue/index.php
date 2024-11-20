<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  // Permitir solicitudes CORS

require 'config.php';

// Obtener datos de la base de datos (ejemplo: obtener usuarios)
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $stmt = $pdo->query("SELECT * FROM usuarios");
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($usuarios);
}

// Agregar un usuario (POST)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['email']) && isset($data['contraseña'])) {
        $email = $data['email'];
        $contraseña = password_hash($data['contraseña'], PASSWORD_BCRYPT); // Hashear la contraseña

        $stmt = $pdo->prepare("INSERT INTO usuarios (email, contraseña) VALUES (?, ?)");
        $stmt->execute([$email, $contraseña]);
        
        echo json_encode(["message" => "Usuario creado exitosamente"]);
    } else {
        echo json_encode(["error" => "Datos incompletos"]);
    }
}

// Login (Verificar usuario)
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['email']) && isset($data['contraseña'])) {
        $email = $data['email'];
        $contraseña = $data['contraseña'];
        
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($contraseña, $user['contraseña'])) {
            echo json_encode(["message" => "Inicio de sesión exitoso"]);
        } else {
            echo json_encode(["error" => "Usuario o contraseña incorrectos"]);
        }
    } else {
        echo json_encode(["error" => "Datos incompletos"]);
    }
}
?>
