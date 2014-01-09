define("appkit/controllers/login",
    ["appkit/utils/auth0_utility", "exports"],
    function (auth0_utility_dependency, __exports__) {
        "use strict";
        var auth0_utility = auth0_utility_dependency["default"];

        __exports__["default"] = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
            listOfAvailableAuthProviders: ["Google", "Facebook", "Twitter", "GitHub"],
            actions: {
                logInWithGoogle: function() {
                    auth0_utility.login({connection: 'google-oauth2'});
                },
                logInWithTwitter: function() {
                    console.log("twitter");
                },
                logInWithFacebook: function() {
                    console.log("facebook");
                },
                logInWithGithub: function() {
                    console.log("github");
                }
            }

        });
    });