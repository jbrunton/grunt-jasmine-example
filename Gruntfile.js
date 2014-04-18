module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        src: 'scripts/*.js',
        options: {
          specs: 'test/*_spec.js',
          outfile: 'test/SpecRunner.html'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
};
