module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      option: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'www/assets/sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'www/assets/css',
          ext: '.css'
        }]
      }
    },

    concat: {
      cssfiles: {
        src: ['www/assets/css/*.css'],
        dest: 'www/assets/css/app.css',
      },
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'www/assets/css',
          src: ['app.css', '!*.min.css'],
          dest: 'www/assets/css',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      css: {
        files: 'www/**/*.scss',
        tasks: ['css-tasks']
      }
    }
  });

  // Load plugins
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('css-tasks', ['sass:dist', 'concat:cssfiles', 'cssmin:dist']);

};
