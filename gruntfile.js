module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'www/sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'www/css',
          ext: '.css'
        }]
      }
    },

    concat: {
      //options: {
      //  separator: ';',
      //},
      dist: {
        src: ['www/css/*.css'],
        dest: 'www/css/style.css',
      },
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'www/css',
          src: ['style.css', '!*.min.css'],
          dest: 'www/css',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      css: {
        files: 'www/sass/*.scss',
        tasks: ['css-tasks']
      }
    }
  });

  // Load plugins
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('css-tasks', ['sass:dist', 'concat:dist', 'cssmin:dist']);

};
