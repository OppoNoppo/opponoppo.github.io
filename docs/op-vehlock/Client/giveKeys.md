---
title: giveKeys
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

giveKeys is an ox_lib callback function, it may be used in all sorts of functions where a player needs the keys of an vehicle.

:::info
plate: `string`

target: `integer`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:giveKeys', false, function(success)
    if success then
        -- Player has received key
    else
        -- Player already has key or script error.
    end
end, plate, target)
```

  </TabItem>
  <TabItem value="await" label="Await">

```lua showLineNumbers
local success = lib.callback.await('op-vehlock:giveKeys', false, plate, target)
if success then
    -- Player has received key
else
    -- Player already has key or script error.
end
```

  </TabItem>
</Tabs>



# Example
This time the callback is used when a vehicle is made e.g. when spawning a police vehicle. It will give the key of that vehicle to the player executing the code.
```lua title='client.lua' {5-11} showLineNumbers
local function SpawnVehicle(x,y,z,h,car)
    lib.requestModel(car)
    local veh = CreateVehicle(GetHashKey(car), x,y,z,h,true,false)
    if veh then
        lib.callback('op-vehlock:giveKeys', false, function(success)
            if success then
                lib.notify({type = 'success', title = 'You now have the keys'})
            else
                lib.notify({type = 'inform', title = 'You already have the keys to this vehicle'})
            end
        end, ESX.Math.Trim(GetVehicleNumberPlateText(veh)), GetPlayerServerId(PlayerId()))
    end
end
```