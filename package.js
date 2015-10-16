Package.describe({
  name: 'hwangc:framework7',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Framework7 integration',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hwangc/meteor-framework7',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('Framework7/dist/js/framework7.js', 'client');
  api.addFiles([
    'Framework7/dist/css/framework7.ios.colors.css',
    'Framework7/dist/css/framework7.ios.css'
  ],'client');
  api.addAssets([
    'Framework7/dist/img/i-f7-ios.png',
    'Framework7/dist/img/i-f7-material.png',
    'Framework7/dist/img/i-form-calendar-ios.svg',
    'Framework7/dist/img/i-form-calendar-material.svg',
    'Framework7/dist/img/i-form-comment-ios.svg',
    'Framework7/dist/img/i-form-comment-material.svg',
    'Framework7/dist/img/i-form-email-ios.svg',
    'Framework7/dist/img/i-form-email-material.svg',
    'Framework7/dist/img/i-form-gender-ios.svg',
    'Framework7/dist/img/i-form-gender-material.svg',
    'Framework7/dist/img/i-form-name-ios.svg',
    'Framework7/dist/img/i-form-name-material.svg',
    'Framework7/dist/img/i-form-password-ios.svg',
    'Framework7/dist/img/i-form-password-material.svg',
    'Framework7/dist/img/i-form-settings-ios.svg',
    'Framework7/dist/img/i-form-settings-material.svg',
    'Framework7/dist/img/i-form-tel-ios.svg',
    'Framework7/dist/img/i-form-tel-material.svg',
    'Framework7/dist/img/i-form-toggle-ios.svg',
    'Framework7/dist/img/i-form-toggle-material.svg',
    'Framework7/dist/img/i-form-url-ios.svg',
    'Framework7/dist/img/i-form-url-material.svg'
  ],'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hwangc:framework7');
  api.addFiles('framework7-tests.js');
});
