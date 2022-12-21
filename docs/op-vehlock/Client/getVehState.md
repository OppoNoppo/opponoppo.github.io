---
title: getVehState
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

getVehState is an ox_lib callback function, it may be used in all sorts of functions to check the state of a plate.

:::info
plate: `string`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:getVehState', false, function(isLocked)
	if isLocked then
        -- Plate is locked
    else
        -- Plate is unlocked
    end
end, plate)
```

  </TabItem>
  <TabItem value="await" label="Await">


```lua showLineNumbers
local isLocked = lib.callback.await('op-vehlock:getVehState', false, plate)
if isLocked then
    -- Plate is locked
else
    -- Plate is unlocked
end
```

  </TabItem>
</Tabs>