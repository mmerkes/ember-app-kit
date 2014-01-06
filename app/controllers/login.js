define("appkit/controllers/login",
    ["exports"],
    function (__exports__) {
        "use strict";
        __exports__["default"] = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
            listOfAvailableAuthProviders: ["Google", "Facebook", "Twitter", "GitHub"]
        });
    });