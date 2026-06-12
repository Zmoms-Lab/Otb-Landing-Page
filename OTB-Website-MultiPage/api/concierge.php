```php
<?php


header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}
$API_KEY =
    $_ENV['ANTHROPIC_API_KEY']
    ?? getenv('ANTHROPIC_API_KEY')
    ?: 'sk-ant-REPLACE_WITH_YOUR_KEY';

if (!$API_KEY) {
    http_response_code(500);
    echo json_encode([
        'error' => 'ANTHROPIC_API_KEY not configured'
    ]);
    exit;
}

$in = json_decode(file_get_contents('php://input'), true);

if (!is_array($in) || !isset($in['messages'])) {
    http_response_code(400);
    echo json_encode([
        'error' => 'messages required'
    ]);
    exit;
}

$payload = [
    'model' => 'claude-sonnet-4-20250514',
    'max_tokens' => 1000,
    'system' => isset($in['system']) ? (string)$in['system'] : '',
    'messages' => $in['messages']
];

$ch = curl_init('https://api.anthropic.com/v1/messages');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'content-type: application/json',
        'x-api-key: ' . $API_KEY,
        'anthropic-version: 2023-06-01'
    ],
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 60
]);

$resp = curl_exec($ch);

if ($resp === false) {
    $e = curl_error($ch);
    curl_close($ch);

    http_response_code(502);
    echo json_encode([
        'error' => 'Upstream: ' . $e
    ]);
    exit;
}

$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($code ?: 200);
echo $resp;
```
