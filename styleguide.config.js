const { version } = require('./package.json')

module.exports = {
  title: `Tailwind React`,
  version,
  sections: [
    {
      name: '',
      content: 'README.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Usage',
          content: 'docs/usage.md',
        },
        {
          name: 'Theming',
          content: 'docs/theming.md',
        },
      ],
    },
    {
      name: 'Components',
      components: ['src/**/index.js'],
    },
  ],
  skipComponentsWithoutExample: true,
  styles: {
    Pre: {
      pre: {
        overflow: 'scroll',
      },
    },
  },
  require: [
    'babel-polyfill',
    'tailwindcss/dist/tailwind.min.css',
    './build/styleguide.js',
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader?cacheDirectory',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.md$/,
          use: [],
        },
      ],
    },
  },
}
