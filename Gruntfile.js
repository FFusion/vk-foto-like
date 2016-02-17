// Generated by CoffeeScript 1.7.1
module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    config: {
      dist: 'build',
      dependig: 'bower_components'
    },
    clean: {
      build: {
        dot: true,
        files: [
          {
            src: ['.tmp', '<%= config.dist %>/*']
          }
        ]
      }
    },
    useminPrepare: {
      build: {
        files: [
          {
            src: 'index.html'
          }
        ],
        options: {
          dest: '<%= config.dist %>'
        }
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true,
        sourceMap: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/app/',
            src: '**/*.js',
            dest: '.tmp/concat/app/'
          }
        ]
      }
    },
    concat: {
      options: {
        sourceMap: true
      }
    },
    uglify: {
      options: {
        report: 'min',
        mangle: false,
        sourceMap: true,
        sourceMapIncludeSources: true
      }
    },
    usemin: {
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/assets/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= config.dist %>']
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '',
            dest: '<%= config.dist %>',
            src: ['.htaccess', '*.html', 'components/**/*.html', 'directives/views/**/*.html', 'image/**/**']
          }, {
            expand: true,
            dot: true,
            cwd: '<%= config.dependig %>/ionicons',
            dest: '<%= config.dist %>/assets/styles',
            src: ['fonts/**/**']
          }
        ]
      }
    }
  });
  return grunt.registerTask('build', ['clean:build', 'useminPrepare:build', 'concat', 'ngAnnotate', 'copy:build', 'uglify', 'cssmin', 'usemin']);
};

//# sourceMappingURL=Gruntfile.map