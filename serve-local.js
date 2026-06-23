const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
const port = 4173;
const root = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function send(res, statusCode, body, headers = {}) {
  res.writeHead(statusCode, headers);
  res.end(body);
}

function resolvePath(urlPath) {
  const safePath = decodeURIComponent((urlPath || "/").split("?")[0]);
  const relativePath = safePath === "/" ? "/index.html" : safePath;
  const filePath = path.normalize(path.join(root, relativePath));

  if (!filePath.startsWith(path.normalize(root))) {
    return null;
  }

  return filePath;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);

  if (!filePath) {
    send(res, 403, "Forbidden", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    const finalPath =
      !statError && stats.isDirectory() ? path.join(filePath, "index.html") : filePath;

    fs.readFile(finalPath, (readError, data) => {
      if (readError) {
        send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
        return;
      }

      const ext = path.extname(finalPath).toLowerCase();
      send(res, 200, data, {
        "Content-Type": mimeTypes[ext] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
    });
  });
});

server.listen(port, host, () => {
  console.log(`Embemorning is running at http://${host}:${port}`);
});
