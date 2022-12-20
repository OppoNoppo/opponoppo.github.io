---
title: getKeysOnPlate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

getKeysOnPlate is an ox_lib callback function, it may be used in all sorts of functions to check what keys are registered to a plate

:::info
plate: `string`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:getKeysOnPlate', false, function(Keys)
  if #Keys > 0 then
    -- there are keys and returns array
    --[[
    Keys = {
      {
        plate = string,
        identifier = string,
        key_combo = string
      }, ...
    }
  ]]
  else
    -- no keys registered to this plate
  end
end, plate)
```

  </TabItem>
  <TabItem value="await" label="Await">


```lua showLineNumbers
local Keys = lib.callback.await('op-vehlock:getKeysOnPlate', false, plate)
if #Keys > 0 then
  -- there are keys and returns array
  --[[
    Keys = {
      {
        plate = string,
        identifier = string,
        key_combo = string
      }, ...
    }
  ]]
else
  -- no keys registered to this plate
end
```

  </TabItem>
</Tabs>