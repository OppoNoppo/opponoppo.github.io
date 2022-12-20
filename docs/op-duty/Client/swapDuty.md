---
title: swapDuty
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

swapDuty is an ox_lib callback function, it gets the players current jobname and swaps it to the job specified in the configuration.

:::tip
* Return: `table`
  * status: `bool`,
  * was: `string`, -- old job
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:getKeysOnPlate', false, function(result)
  if result.status then
    -- state change success
  else
    -- state change unsuccessfull
  end
end)
```

  </TabItem>
  <TabItem value="await" label="Await">


```lua showLineNumbers
local swaps = lib.callback.await('op-duty:swapDuty', false)
if swaps.status then
  -- state change success
else
  -- state change unsuccessfull
end
```

  </TabItem>
</Tabs>