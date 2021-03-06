export default Ember.Route.extend({
    model: function () {
        return {
            listWithBadges: Ember.A([
                Ember.Object.create({title: 'Inbox', badge: '45'}),
                Ember.Object.create({title: 'Sent', badge: '33'})
            ]),
            colors: ['red', 'yellow', 'blue', 'green']
        };
    }
});