module.exports = function(grunt) {
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.initConfig({

		  concat: {
		    dist: {
		      src: ['js/search.js',
		      'js/albums/controllerAlbums.js'

		      ],

		      dest: 'dist/built.js',
		    },
		  },
		});

		grunt.registerTask('default', ['foo', 'bar']);

};

