module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['src/*.js', 'src/**/*.js'],
                tasks:['browserify'],
                options: {
                    atBegin: true,
                    livrereload: true
                }
            }
        },
        browserify: {
                options: {
                    transform: [
                        ["babelify", {presets: ["es2015"], plugins: ["transform-strict-mode"]}]
                    ]
                },
                'dist/game.js': ['src/**/*.js']
        },
        concurrent: {
            target: {
                options: { logConcurrentOutput: true },
                tasks: ['connect', 'watch']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    base: '',
                    keepalive: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('dev', ['concurrent']);
    grunt.registerTask('build', ['browserify']);
};