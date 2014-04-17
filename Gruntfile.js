module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        src: 'scripts/*.js',
        options: {
          specs: 'test/*_spec.js'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
};
