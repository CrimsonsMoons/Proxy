self.__uv$config = {
  prefix: '/sw/',              // Proxy URL prefix
  bare: '/bare/',              // Bare server location
  encodeUrl: Ultraviolet.codec.xor.encode, // URL encoding
  decodeUrl: Ultraviolet.codec.xor.decode, // URL decoding
  handler: '/uv.handler.js',   // Handler script
  bundle: '/uv.bundle.js',     // Bundled UV script
  config: '/uv.config.js',     // Configuration script (this file)
  sw: '/uv.sw.js',             // Service Worker script
};