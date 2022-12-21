---
title: removeKeysID
toc_min_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

removeKeysID is an event function, it can be used to remove a key of a player serverid.

<Tabs>
  <TabItem value="triggerS" label="Trigger" default>

:::info
data: `table` {plate = `trimmed version of vehicle plate`, identifier = `identifier of player to remove keys from`}
:::
:::tip
This event can also be called from client side by using `TriggerServerEvent`
:::
```lua showLineNumbers
TriggerEvent('op-vehlock:removeKeysID', data)
```

  </TabItem>
</Tabs>