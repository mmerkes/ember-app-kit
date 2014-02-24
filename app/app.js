define("appkit/app",
    ['ember/resolver','appkit/utils/register_components', "exports"],
    function (dependency1, registerComponentsDep, __exports__) {
        "use strict";
        var Resolver = dependency1["default"];
        var registerComponents = registerComponentsDep["default"];

        Ember.ENV.MODEL_FACTORY_INJECTIONS = true;
        var App = Ember.Application.extend({
            MODEL_FACTORY_INJECTIONS: true,
            LOG_ACTIVE_GENERATION: true,
            LOG_MODULE_RESOLVER: true,
            LOG_TRANSITIONS: true,
            LOG_TRANSITIONS_INTERNAL: true,
            LOG_VIEW_LOOKUPS: true,
            modulePrefix: 'appkit', // TODO: loaded via config
            Resolver: Resolver['default']
        });


       App.initializer({
            name: 'authentication',
            initialize: function(container, application) {
                registerComponents(container);
                Ember.SimpleAuth.setup(application);
            }
        });

        Ember.RSVP.configure('onerror', function (error) {
            // ensure unhandled promises raise awareness.
            // may result in false negatives, but visibility is more important
            if (error instanceof Error) {
                Ember.Logger.assert(false, error);
                Ember.Logger.error(error.stack);
            }
        });

        __exports__["default"] = App;
    });
