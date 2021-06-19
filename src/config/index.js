//Server
const server = {
    song: "https://itunes.apple.com",
}

//Environment
const env = {
    development: {
        songServer: `${server.song}`,
    }
}

//Api
const api = {
    artist: {
        search: '/search'
    },
}

export default {
    ...env['development'],
    ...api
}

