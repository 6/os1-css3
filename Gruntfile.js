module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          src: ['os1.scss'],
          dest: 'assets/os1.css'
        }],
        options: {
          style: 'expanded'
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
};
