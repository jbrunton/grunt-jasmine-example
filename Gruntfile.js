module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        src: 'scripts/*.js',
        options: {
          specs: 'test/*_spec.js',
          outfile: 'SpecRunner.html',
          keepRunner: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
};
