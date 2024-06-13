module.exports = {
    app: {
        px: "b$",
        token: "",
        playing: "b$help",
    },

    opt: {
        DJ: {
            // Custom DJ role
            enabled: false,
            roleName: "DJ",
            commands: [
                "back",
                "clear",
                "filter",
                "loop",
                "pause",
                "resume",
                "seek",
                "shuffle",
                "skip",
                "stop",
                "volume",
            ],
        },
        maxVol: 100, // The maximum Volume to select (Default = 100)
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: "highestaudio",
                highWaterMark: 1 << 25,
            },
        },
    },
};
