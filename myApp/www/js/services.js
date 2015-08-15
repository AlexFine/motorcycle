angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: '10 Mile Race',
        map: '',
        person: 'Ends 08/17/2015',
        description: 'Ride ten miles safely as fast as you can! Compete against anybody else in the world for the fastest times!'
        //rides: ['one', 'two', 'three'],
        
  }, {
        id: 1,
        name: 'August Miles Challenge',
        map: '',
        description: 'How many miles can you ride this August? Beat everyone and show you own the bike!',
        person: 'Ends 09/01/2015',
        
  }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});