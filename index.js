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
const assets = require( 'metalsmith-assets-copy' );

const watch = process.env.NODE_ENV === 'development';

const DATA = {
  sitename: 'Lawrence B. Almeida',
  description: 'Lisbon based technologist focused on building digital products and exploring technology\'s impact on individuals and society.',
  location: 'Lisbon, Portugal',
};

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
  .use(collections(
    {
      lastPosts: {
        pattern: 'posts/*.md',
        reverse: true,
        sortBy: 'update_date',
        limit: 6
      },
      allPosts: {
        pattern: 'posts/*.md',
        reverse: true,
        sortBy: 'update_date',
      }
    }))
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
        },
        formatDate: (date) => {
          if (typeof date === 'undefined') return;
          return `${date.getDate()} ${date.toLocaleString('en-us', { month: 'short' })} ${date.getFullYear()}`;
        },
        reverse: (array) => array.reverse(),
      }
    }
  }))
  .use(assets({
    src: './src/static',
    dest: 'static',
    replace: 'old'
  }))
  .use(assets({
    src: './src/admin',
    replace: 'old'
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
        'src/static/*',
      ]
    })
  ))
  .use(uglify())
  .build(function(err, files) {
    if (err) throw err;
  });
