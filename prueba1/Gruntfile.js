grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  log: {
    foo: [1, 2, 3],
    bar: 'hello world',
    baz: false
  },

	concat: {
		options: {
			stripBanners: true,
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
	    },
	    dist: {
	      src: ['src/project.js'],
	      dest: 'dist/built.js',
	    },
  	},

  	uglify: {
    options: {
      mangle: {
        except: []
      }
    },
    my_target: {
      files: {
        'dist/output.min.js': ['src/input.js']
      }
    }
  }

});

grunt.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});

grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  if (arguments.length === 0) {
    grunt.log.writeln(this.name + ", no args");
  } else {
    grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  }
});