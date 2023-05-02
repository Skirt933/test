self.__uv$config = {
    prefix 'service',
    bare 'bare',
    encodeUrl Ultraviolet.codec.xor.encode,
    decodeUrl Ultraviolet.codec.xor.decode,
    handler 'uvuv.handler.js',
    bundle 'uvuv.bundle.js',
    config 'uvuv.config.js',
    sw 'uvuv.sw.js',
};