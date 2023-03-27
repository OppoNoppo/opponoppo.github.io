---
title: How To
toc_min_heading_level: 2
position: 1
---

:::info
Migrating will only apply for moving from any version to `3.0.0` to the new data system.
:::

### 1 Moving old files into migrating folder
To begin the migrating process, please make sure you have both versions available, your old version < `3.0.0` and the newest version of keymaster.

To migrate we first have to move all the old configs (`vehicles.lua` and `prices.lua`) into the folder `migrating/`.

### 2 Executing the SQL
If you haven't executed the sql already make sure you do, the file can be found in the folder `sql/`.

### 3 Execute the Command
To start the migrating to the database, you can simply type `op-v-migrate` inside the server console.