'use strict';

// Base routes for default index/root path, 404 error page, and others...
exports.register = function (server, options, next) {
    
    server.route([
        {
            method: 'GET',
            path: '/',
            config: {
                handler: function(request, reply) {
                    // Render the view with the provided greeting
                    reply.view('index', {
                        title: 'Boilerplate Homepage'
                    });
                },
                id: 'index'
            }
        },
        {
            method: 'GET',
            path: '/about',
            config: {
                handler: function (request, reply) {
                    reply.view('about', { title: 'An About Page' });
                },
                id: 'about'  
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'baseRoutes'
};

