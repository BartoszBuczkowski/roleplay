import * as alt from 'alt-client';
import * as native from 'natives';

const view = new alt.WebView('http://assets/roleplay-view/dist/index.html');
view.on('load', () => alt.log('webview loadedd'));

native.setClockTime(3, 0, 0);
