const Metalsmith  = require('metalsmith');
const markdown    = require('@metalsmith/markdown');
const layouts     = require('metalsmith-layouts');
const permalinks  = require('@metalsmith/permalinks');
const collections = require('metalsmith-collections');
const browserSync = require('metalsmith-browser-sync');
const sass        = require('metalsmith-sass');
const discoverPartials = require('metalsmith-discover-partials');
const msIf = require('metalsmith-if');


let watch = process.env.NODE_ENV === 'development';

Metalsmith(__dirname)
  .metadata({
    sitename: 'Lawrence B. Almeida',
    description: 'It\'s about saying »Hello« to the World.',
    generator: 'Metalsmith',
    url: 'https://mstrlaw.com/'
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
        'src/styles/*',
      ]
    })
  ))
  .build(function(err, files) {
    if (err) throw err;
  });
