module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        options: {
          specs: 'build/test.js',
          outfile: 'build/test/SpecRunner.html'
        }
      }
    },
    
    browserify: {
      release: {
        src: 'scripts/**/*.js',
        dest: 'build/main.js'
      },
      test: {
        src: 'spec/**/*.js',
        dest: 'build/test.js',
        options: {
          bundleOptions: {
            debug: true
          }
        }
      }
    },
    
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'scripts/**/*.js', 'spec/**/*.js'],
        tasks: ['browserify', 'jasmine'],
        options: {
          spawn: false,
        },
      },
    },
    
    shell: {
      debug: {
        command: "open build/test/SpecRunner.html"
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  
  grunt.registerTask('test', ['browserify:test', 'jasmine']);
  grunt.registerTask('test:debug', ['browserify:test', 'jasmine:test:build', 'shell:debug']);
  grunt.registerTask('build', ['browserify:release']);
  
};
