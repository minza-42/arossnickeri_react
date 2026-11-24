
<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $data): void
{
  http_response_code($status);
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

// Load PHPMailer
$autoloadPath = dirname(__DIR__, 2) . '/vendor/autoload.php';

if (!file_exists($autoloadPath)) {
  respond(500, ['success' => false, 'message' => 'Mail service is not configured.']);
}

require $autoloadPath;

// Load private SMTP configuration
$configPath = dirname(__DIR__, 2) . '/private/smtp-config.php';

if (!file_exists($configPath)) {
  respond(500, ['success' => false, 'message' => 'Mail configuration is missing.']);
}

$config = require $configPath;

// Read form fields
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate required fields
if ($name === '' || $email === '' || $message === '') {
  respond(400, [
    'success' => false,
    'message' => 'Please fill in all required fields.',
  ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(400, [
    'success' => false,
    'message' => 'Please enter a valid email address.',
  ]);
}

// Validate text lengths
if (mb_strlen($name) > 150 || mb_strlen($email) > 254 || mb_strlen($message) > 10000) {
  respond(400, [
    'success' => false,
    'message' => 'One or more fields are too long.',
  ]);
}

// Prepare email
$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = $config['host'];
  $mail->SMTPAuth = true;
  $mail->Username = $config['username'];
  $mail->Password = $config['password'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  $mail->CharSet = 'UTF-8';

  // Sender must be your authenticated mailbox
  $mail->setFrom($config['from_email'], $config['from_name']);

  // Send to Aros Snickeri
  $mail->addAddress($config['recipient']);

  // Reply directly to the person who filled in the form
  $mail->addReplyTo($email, $name);

  $mail->Subject = 'Nytt meddelande från kontaktformuläret';

  $mail->Body =
    "Nytt meddelande från Aros Snickeris webbplats\n\n" .
    "Namn: {$name}\n" .
    "E-post: {$email}\n" .
    "Telefon: {$phone}\n\n" .
    "Meddelande:\n{$message}";

  $mail->isHTML(false);

  // Handle uploaded files
  if (!empty($_FILES['files'])) {
    $files = $_FILES['files'];

    $maxFiles = 5;
    $maxFileSize = 10 * 1024 * 1024; // 10 MB
    $allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
      'application/pdf',
    ];

    if (!is_array($files['name'])) {
      respond(400, [
        'success' => false,
        'message' => 'Invalid file upload.',
      ]);
    }

    $fileCount = count($files['name']);

    if ($fileCount > $maxFiles) {
      respond(400, [
        'success' => false,
        'message' => 'You can upload a maximum of 5 files.',
      ]);
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);

    for ($i = 0; $i < $fileCount; $i++) {
      if ($files['error'][$i] === UPLOAD_ERR_NO_FILE) {
        continue;
      }

      if ($files['error'][$i] !== UPLOAD_ERR_OK) {
        respond(400, [
          'success' => false,
          'message' => 'One of the files could not be uploaded.',
        ]);
      }

      if ($files['size'][$i] > $maxFileSize) {
        respond(400, [
          'success' => false,
          'message' => 'Each file must be smaller than 10 MB.',
        ]);
      }

      $tmpPath = $files['tmp_name'][$i];

      if (!is_uploaded_file($tmpPath)) {
        respond(400, [
          'success' => false,
          'message' => 'Invalid uploaded file.',
        ]);
      }

      $mimeType = $finfo->file($tmpPath);

      if (!in_array($mimeType, $allowedMimeTypes, true)) {
        respond(400, [
          'success' => false,
          'message' => 'Only images and PDF files are allowed.',
        ]);
      }

      $originalName = basename($files['name'][$i]);

      $mail->addAttachment($tmpPath, $originalName);
    }
  }

  $mail->send();

  respond(200, [
    'success' => true,
    'message' => 'Your message has been sent successfully.',
  ]);
} catch (Exception $e) {
  error_log('Contact form mail error: ' . $mail->ErrorInfo);

  respond(500, [
    'success' => false,
    'message' => 'The message could not be sent. Please try again later.',
  ]);
}
