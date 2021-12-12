const Metalsmith  = require('metalsmith');
const markdown    = require('@metalsmith/markdown');
const layouts     = require('metalsmith-layouts');
const permalinks  = require('@metalsmith/permalinks');
const collections = require('metalsmith-collections');
const browserSync = require('metalsmith-browser-sync');
const sass        = require('metalsmith-sass');
const discoverPartials = require('metalsmith-discover-partials');
const msIf = require('metalsmith-if');
const uglify = require('metalsmith-uglify');

const watch = process.env.NODE_ENV === 'development';

const DATA = {
  sitename: 'Lawrence B. Almeida',
  description: 'Lawrence is a technologist that focuses on building digital products and exploring technology\'s impact on individuals and society.',
  location: 'Lisbon, Portugal',
}

Metalsmith(__dirname)
  .metadata({
    // Meta
    generator: 'Metalsmith',
    // Homepage data
    ...DATA,
  })
  .source('./src')
  .destination('./dist')
  .clean(true)
  // .use(collections({
  //   posts: 'posts/*.md'
  // }))
  .use(sass())
  .use(markdown())
  .use(permalinks())
  .use(discoverPartials({
    directory: './src/partials/',
    pattern: /\.hbs$/
  }))
  .use(layouts({
    directory: './src/layouts',
    engineOptions: {
      helpers: {
        formattedDate: function(date) {
          return new Date(date).toLocaleDateString();
        }
      }
    }
  }))
  .use(msIf(
    watch,
    browserSync({
      server: 'dist',
      files: [
        'src/*',
        'src/layouts/*',
        'src/partials/*',
        'src/scripts/*',
        'src/styles/*',
      ]
    })
  ))
  .use(uglify({
    concat: {
        file: 'home.min.js',
    },
    removeOriginal: true
  }))
  // .use(uglify({ root: 'js' }))
  .build(function(err, files) {
    if (err) throw err;
  });
