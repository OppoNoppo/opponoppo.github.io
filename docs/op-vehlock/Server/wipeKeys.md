---
title: wipeKeys
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

wipeKeys is an event function, it can be used to remove all keys from a plate.

:::info
plate: `string`
:::

<Tabs>
  <TabItem value="triggerS" label="Trigger" default>

:::tip
This event can also be called from client side by using `TriggerServerEvent`
:::
```lua showLineNumbers
TriggerEvent('op-vehlock:wipeKeys', plate)
```

  </TabItem>
</Tabs>