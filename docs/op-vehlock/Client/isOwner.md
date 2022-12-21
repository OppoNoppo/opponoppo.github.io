---
title: isOwner
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

isOwner is an ox_lib callback function, it may be used in all sorts of functions where a check needs te be in place to verify ownership of the plate.

:::info
plate: `string`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:isOwner', false, function(isOwner)
    if isOwner then
        -- Player is owner of plate
    else
        -- Player is not the owner of the plate, or script error.
    end
end, plate)
```

  </TabItem>
  <TabItem value="await" label="Await">

```lua showLineNumbers
local isOwner = lib.callback.await('op-vehlock:isOwner', false, plate, target)
if isOwner then
    -- Player is owner of plate
else
    -- Player is not the owner of the plate, or script error.
end
```

  </TabItem>
</Tabs>



## Example
This time the callback is used in the function giveKeys in `op-vehlock` to verify whether the target (also the player in this case) is the owner of the vehicle, in this example it is simply used to change notification.
```lua title='client.lua' {2-8} showLineNumbers
if GetPlayerServerId(PlayerId()) == target then
	lib.callback('op-vehlock:isOwner', false, function(isOwner)
		if isOwner then
			lib.notify({type = 'error', title = langSettings[language]['AlreadyHasKeys']})
		else
			lib.notify({type = 'error', title = langSettings[language]['CannotGiveYourself']})
		end
	end, ESX.Math.Trim(GetVehicleNumberPlateText(closestVehicle)))
	return
end
```