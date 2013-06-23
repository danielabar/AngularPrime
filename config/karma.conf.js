basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/*.js',
  'app/js/*.js',
  'test/lib/angular/angular-mocks.js',
  'test/unit/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

reporters = ['progress'];