module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each ID
        svg: {
          viewBox: '0 0 32 32',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        },
      },
      default: {
        files : {
          'nice-things.svg': ['svgo_live/*.svg'],
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', ['svgstore']);

};
