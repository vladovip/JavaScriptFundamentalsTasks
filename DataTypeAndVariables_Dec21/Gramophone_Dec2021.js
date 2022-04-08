function solve(band, album, song) {

    let bandLength = band.length;
    let albumLength = album.length;
    let songLength = song.length;
    let songDurationInSeconds = (albumLength * bandLength * songLength) / 2;
    let plateTotalRotations = songDurationInSeconds / 2.5;

    console.log(`The plate was rotated ${Math.ceil(plateTotalRotations)} times.`)

    // albumName.length * bandName.length) * song name.length / 2


}
solve('Black Sabbath', 'Paranoid', 'War Pigs');

