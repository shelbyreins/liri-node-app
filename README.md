# **liri-node-app**

# ABOUT THE APP


Liri is .... command line application (CLI APP)....
`commands` are:

* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

<hr>

# HOW TO USE LIRI

### Installations
1. Clone Github Repository 
2. Using terminal, navigate to the the liri-node-app folder
3. Create a file .env
4. Then create a Spotify ID using https://developer.spotify.com/dashboard/
5. Add your spotify ID to the .env file and save

    ```js
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    ```

#### **Step-by-step Instructions**

1. Open your Terminal/Gitbash
2. Navigate to the directory that containes the file liri.js
4. Run one of these commands:

    **Example 1:** Run the `concert-this` command
        > `node liri.js concert-this <artist/band name here>`
    <!-- Input into terminal
    GIF of results
    Explaintion of output -->


    **Example 2:** Run the `spotify-this-song` command
        > `node liri.js spotify-this-song <song name here>`

    **Example 3:** Run the `movie-this` command
        > `node liri.js movie-this <movie name here>`

    **Example 4:** Run the `do-what-it-says` command
        > `node liri.js do-what-it-says`

# TECHNOLOGIES USED
* Javascript
* API's a
    * OMDB
    * Bands in Town
* node.js 
* Node Package Managers (NPM)
    * axios
    * dotenv
    * file-system
    * moment
    * node-spotify-api
* Git
* Github
    
