/* global ic */
var auth0 = new Auth0({
    domain:                 'classycocktails.auth0.com',
    clientID:               'fAbwn9OyanKTAwzITEBRtZ26VA9mjtz3',
    callbackURL:            'http://localhost:8000/authcallback',
    callbackOnLocationHash: true
});

auth0.parseHash(window.location.hash, function (profile, id_token) {
    console.log(profile);
    console.log(id_token);
});
export default auth0;