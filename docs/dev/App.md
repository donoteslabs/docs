---
sidebar_position: 1
---

# Apps Integration (alpha)

## Creating your App

Apps for the alpha App store are very basic, and simply from your (the developer) part we simply need a URL of a web app that can be embedded in an iframe. This means we require for you to modify your CORS to allow DoNotes to embed your content

### PHP CORS

Include this at the top of all PHP documents in your App

```php title="index.php"
<?php
// Set the appropriate headers
header("Access-Control-Allow-Origin: https://v8.donotes.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's a preflight request and respond accordingly
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // It's a preflight request, respond with 200 OK
    header('HTTP/1.1 200 OK');
    exit();
}

// Regular page content goes here
echo "Hello World!";
?>
```

### Htaccess CORS

Modify your .htaccess file to include this code:

```htaccess title=".htaccess"
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "https://v8.donotes.app"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```
