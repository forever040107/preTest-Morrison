module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            ignoreExisting: true,
            ext: 'tsx',
          },
        },
      ],
    })

    return config
  },
}
