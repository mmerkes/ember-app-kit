define("appkit/utils/authentication_filter",
    ["appkit/app","exports"],
    function (App, __exports__) {
        "use strict";

        var authenticationFilter = Ember.Mixin.extend({
            isUserAuthenticated: function ()
            {
                if (! App.Session)
                {
                    return false;
                }
            }

        });
        __exports__["default"] = authenticationFilter;

    });