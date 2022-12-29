const {client} = require("../primary/client");
const Distube = require("distube").default;
const fs = require("fs");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { DeezerPlugin } = require("@distube/deezer");

/*["addSong", "addList", "playSong"].forEach((player) => {
    require(`./player/${player}`)(client)
})*/

client.colour = 0x17BEBB;
client.player = new Distube(client, {
    searchSongs: 1,
    emitNewSongOnly: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin(), new DeezerPlugin(), new YtDlpPlugin({ update: true })],
  });