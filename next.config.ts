import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic test files and dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
    };

    // Completely ignore the entire thread-stream test directory
    config.module.rules.push({
      test: /node_modules[/\\].*thread-stream[/\\]test[/\\]/,
      loader: 'ignore-loader'
    });

    // Ignore all test files in node_modules
    config.module.rules.push({
      test: /node_modules[/\\].*[/\\](test|spec|tests)[/\\].*\.(js|mjs|ts|tsx)$/,
      loader: 'ignore-loader'
    });

    // Ignore all files with test patterns in node_modules
    config.module.rules.push({
      test: /node_modules[/\\].*[/\\].*\.(test|spec|bench)\.(js|mjs|ts|tsx)$/,
      loader: 'ignore-loader'
    });

    // Ignore helper.js in thread-stream test directory
    config.module.rules.push({
      test: /node_modules[/\\].*thread-stream[/\\].*helper\.js$/,
      loader: 'ignore-loader'
    });

    // External packages that shouldn't be bundled
    if (!isServer) {
      config.externals = {
        ...config.externals,
        'tap': 'tap',
        'fastbench': 'fastbench',
        'desm': 'desm',
        'why-is-node-running': 'why-is-node-running',
        'pino-elasticsearch': 'pino-elasticsearch',
        'thread-stream/test': 'thread-stream/test'
      };
    }

    return config;
  },
};

export default nextConfig;
