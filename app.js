var tmi = require ('tmi.js');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
      username: "VedzaBot",
      password: "api key" //https://twitchapps.com/tmi/
    },
    channels: ["radiodamdam"]
};

var client = new tmi.client(options);
var onsenfout = 0;
var caminteresse = 0;
var CountTime = 15000;



client.connect();

client.on('connected', function(address, port) {
    client.action('radiodamdam', "Wesh l'équipe");
  });

client.on("chat", function (channel, user, message, self) {


    if(message === '!esquecaminteresse' && (user["user-type"] === "mod" || user.username === channel.replace("#", "") || user.username === 'Vedzaa' )){
    onsenfout = 0
    caminteresse = 0
    client.action('radiodamdam', 'Tapez 1 si le sujet vous interesse ou 2 si vous vous en foutez');
  }

    if(message.includes('1')) {
      caminteresse++;  }
    else if (message.includes('2')) {
      onsenfout++;    }

    if(message === '!resultats') {

client.action('radiodamdam', "Ce sujet interesse " + caminteresse.toLocaleString() + ' personnes et ' + onsenfout.toLocaleString() + " personnes s'en foutent " );
}

});
