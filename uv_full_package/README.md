# Ultraviolet about:blank AI Launcher Package

This package contains:

* **about_blank_uv_ai_launcher_sw_prefix.html** – main launcher page.
* **uv.config.js** – custom Ultraviolet configuration (prefix `/sw/`).
* Placeholder files for **uv.bundle.js**, **uv.sw.js**, **uv.handler.js**.

## Getting the real scripts

1. Go to <https://github.com/titaniumnetwork-dev/Ultraviolet>  
   Download the **dist** directory from a release or clone and build.
2. Copy the real **uv.bundle.js**, **uv.sw.js**, and **uv.handler.js** into this same folder, replacing the placeholders.
3. Serve the folder over HTTP/HTTPS, e.g.:

   ```bash
   python -m http.server 8080
   ```

4. Visit `http://localhost:8080/about_blank_uv_ai_launcher_sw_prefix.html`.

The Ultraviolet service worker will register and the launcher buttons will open AI sites *inside* an about:blank iframe.