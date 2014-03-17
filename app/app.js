import Resolver from 'ember/resolver';
import registerComponents from 'appkit/utils/register_components';


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
    initialize: function (container, application) {
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

export default App;
