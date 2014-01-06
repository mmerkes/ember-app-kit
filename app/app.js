define("appkit/app",
    ["resolver", "exports"],
    function (dependency1, __exports__) {
        "use strict";
        var Resolver = dependency1["default"];

        var App = Ember.Application.extend(Bootstrap.Register, {
            LOG_ACTIVE_GENERATION: true,
            LOG_MODULE_RESOLVER: true,
            LOG_TRANSITIONS: true,
            LOG_TRANSITIONS_INTERNAL: true,
            LOG_VIEW_LOOKUPS: true,
            modulePrefix: 'appkit', // TODO: loaded via config
            Resolver: Resolver['default']
        });

        Ember.Application.initializer({
            name: "authentication",

            initialize: function(container, application) {
                Ember.SimpleAuth.setup(container, application);
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
