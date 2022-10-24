import * as alt from 'alt-server';
import { RadioStation } from 'altv-enums';

alt.on('playerConnect', (player) => {
   alt.log('~gl~[playerConnect]~w~', 'player:~cl~', player.name);

   player.model = 'mp_m_freemode_01';
   player.spawn(0, 0, 72);

   alt.log(
      'player streamSyncedMeta:',
      player.hasStreamSyncedMeta('test') // any player's meta will be internally cleared on hot reload restart
   );
   // will be cleared on hot reload restart
   player.setStreamSyncedMeta('test', 123);

   alt.setTimeout(() => {
      const veh = new alt.Vehicle('Bus', 0, 5, 71, 0, 0, 0);
      veh.activeRadioStation = RadioStation.LosSantosRockRadio;
      player.setIntoVehicle(veh, 1);
   }, 1000);
});
