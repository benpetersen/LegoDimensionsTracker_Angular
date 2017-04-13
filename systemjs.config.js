/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  var map = {
    app: 'app',
    
    // angular bundles
    '@angular':                   'node_modules/@angular',
    
    // other libraries
    'rxjs':                       'node_modules/rxjs',
    'angular-in-memory-web-api':  'node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    'angular2-cookie':            'node_modules/angular2-cookie',
    '@ng-bootstrap':              'node_modules/@ng-bootstrap'
  };
  
  var packages = {
    app: { main: './main.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js'},
    'angular2-cookie': { main: './core.js', defaultExtension: 'js'},
    '@ng-bootstrap/ng-bootstrap': {format:'cjs',  main: 'bundles/ng-bootstrap.js', defaultExtension: 'js'}
  }
  
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'router',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
  ];
  
  var ngBootstrapPackageNames = [
      'accordion',
      'alert',
      'bundles',
      'buttons',
      'carousel',
      'collapse',
      'dropdown',
      'esm',
      'modal',
      'pagination',
      'popover',
      'progressbar',
      'rating',
      'tabset',
      'timepicker',
      'tooltip',
      'typeahead',
      'util'
  ];
  
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
  }

  function ngBootstrapPackIndex(pkgName) {
    packages['@ng-bootstrap/ng-bootstrap/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  ngBootstrapPackageNames.forEach(ngBootstrapPackIndex);
  
  var config = {
    map: map,
    packages: packages
  }
  
  System.config(config);
})(this);
