module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        src: 'build/main.js',
        options: {
          specs: 'build/test.js',
          outfile: 'build/test/SpecRunner.html'
        }
      }
    },
    
    browserify: {
      main: {
        src: 'scripts/*.js',
        dest: 'build/main.js'
      },
      test: {
        src: 'test/*_spec.js',
        dest: 'build/test.js'
      }
    },
    
    watch: {
      scripts: {
        files: ['scripts/**/*.js', 'test/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
};
