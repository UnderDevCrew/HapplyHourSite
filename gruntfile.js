module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
	  files: [{
          expand: true,
          cwd: 'www/assets/sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'www/assets/css/custom',
          ext: '.css'
        }]
      }
    },

    concat: {
      cssfiles: {
        src: ['www/assets/css/**/*.css'],
        dest: 'www/assets/css/custom/app.css'
      }
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'www/assets/css/custom',
          src: ['app.css', '!*.min.css'],
          dest: 'www/assets/css/custom',
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
  grunt.registerTask('css-tasks', ['sass:dist', 'cssmin:dist']);

};
