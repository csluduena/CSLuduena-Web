<?php
// deploy.php - Archivo que recibe webhooks de GitHub
// Coloca este archivo en la raíz de tu sitio web (public_html)

// Configuración de seguridad
$secret = '23!@#ClaveSrS1'; // Cambia por una clave secreta
$logFile = '/tmp/github_webhook.log';

// Función para logging
function logMessage($message) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

// Verificar que es una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

// Obtener el payload
$payload = file_get_contents('php://input');
$data = json_decode($payload, true);

// Verificar que el payload es válido
if (json_last_error() !== JSON_OK) {
    logMessage('Error: Invalid JSON payload');
    http_response_code(400);
    exit('Invalid JSON');
}

// Verificar la firma del webhook (opcional pero recomendado)
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
if ($signature) {
    $expectedSignature = 'sha256=' . hash_hmac('sha256', $payload, $secret);
    if (!hash_equals($signature, $expectedSignature)) {
        logMessage('Error: Invalid signature');
        http_response_code(401);
        exit('Unauthorized');
    }
}

// Verificar que es un push al branch principal
$ref = $data['ref'] ?? '';
if ($ref !== 'refs/heads/main' && $ref !== 'refs/heads/master') {
    logMessage('Ignoring push to branch: ' . $ref);
    exit('Not main branch');
}

logMessage('Webhook received for push to main branch');

// Ejecutar el script de despliegue
$output = [];
$returnCode = 0;
exec('bash /path/to/deploy.sh 2>&1', $output, $returnCode);

if ($returnCode === 0) {
    logMessage('Deployment successful');
    echo 'Deployment successful';
} else {
    logMessage('Deployment failed: ' . implode("\n", $output));
    http_response_code(500);
    echo 'Deployment failed';
}
?>
