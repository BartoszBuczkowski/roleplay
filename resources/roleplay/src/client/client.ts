import * as alt from 'alt-client';
import * as native from 'natives';

let view = new alt.WebView('http://resource/html/index.html');

native.setClockTime(3, 0, 0);
