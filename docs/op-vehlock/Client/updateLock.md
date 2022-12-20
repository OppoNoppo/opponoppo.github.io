---
title: updateLock
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

updateLock is an ox_lib callback function, it may be used in all sorts of functions where a vehicle with plate x needs its lock state to be changed.

:::info
plate: `string`

state: `bool`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:updateLock', false, function(result)
    if result then
        -- Stage change has been changed
    else
        -- This should not happen, tho if it is you can handle an error here.
    end
end, plate, state)
```

  </TabItem>
  <TabItem value="await" label="Await">

```lua showLineNumbers
local result = lib.callback.await('op-vehlock:updateLock', false, plate, state)
if result then
    -- Stage change has been changed
else
    -- This should not happen, tho if it is you can handle an error here.
end
```

  </TabItem>
</Tabs>



# Example
This time the callback is used when a vehicle being locked, in this specific example it unlocks the plate
```lua title='client.lua' {2-12} showLineNumbers
if isLocked then
    lib.callback('op-vehlock:updateLock', false, function(result)
	    if result then
	    	if not isLockpick then TaskPlayAnim(PlayerPedId(), 'anim@mp_player_intmenu@key_fob@', "fob_click", 8.0, 8.0, -1, 48, 1, false, false, false) end
	    	StartVehicleHorn(veh, 30, GetHashKey('NORMAL'), false)
	    	SetVehicleDoorsLocked(veh, 0)
	    	lib.notify({type = 'success', title = (langSettings[language]['NowOpen']):format(plate)})
            -- ...
	    else
	    	print('error with plate '..plate)
	    end
    end, plate, false)
else
    -- ...
end
```