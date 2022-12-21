---
title: hasKey
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

hasKey is an ox_lib callback function, it may be used in all sorts of functions when a player has to be verified if they have a key of a plate.

:::info
plate: `string`

identifier: `string`

isPlayerID: `bool` - `if true the identifier must be the target server id.`
:::

<Tabs>
  <TabItem value="callback" label="Callback" default>


```lua showLineNumbers
lib.callback('op-vehlock:hasKey', false, function(hasKey)
    if hasKey then
        -- Player has the correct key
    else
        -- Player does not have the correct key.
    end
end, plate, identifier, isPlayerID)
```

  </TabItem>
  <TabItem value="await" label="Await">

```lua showLineNumbers
local hasKey = lib.callback.await('op-vehlock:hasKey', false, plate, identifier, isPlayerID)
if hasKey then
    -- Player has the correct key
else
    -- Player does not have the correct key.
end
```

  </TabItem>
  <TabItem value="isPlayerId" label="isPlayerId">

:::tip
In this case the `identifier` must be a target **server** id.
:::
```lua showLineNumbers
lib.callback('op-vehlock:hasKey', false, function(hasKey)
    if hasKey then
        -- Player has the correct key
    else
        -- Player does not have the correct key.
    end
end, plate, identifier, true)
```

  </TabItem>
</Tabs>