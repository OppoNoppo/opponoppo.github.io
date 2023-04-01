---
title: Commands
toc_min_heading_level: 2
sidebar_position: 3
---

### op-v-addcar
This command can be used to add the car you are currently sitting in into the database. The exact mods applied on the vehicle will also be how it gets shown and sold.

:::success
op-v-addcar `[label]` `[price]` `[brand]` `[class]` `[category]` `[type]` `[instore]`
:::
* `label` - The name that gets shown, do use a space inside the label use `_` instead.
* `price` - The price of the vehicle.
* `brand` - The brand the vehicle will be under. Please check your brands table for the available brands.
* `class` - The class the vehicle will be under. Please check your classes table for the available classes.
* `category` - The category the vehicle will be under. Please check your category table for the available categories.
* `type` - The type will determine where the vehicle will be saved (boat, car, airplane etc).
* `instore` - if true the vehicle will be available in the showroom, if false it will obviously be the opposite.

### op-v-changeveh
This can be used to change any vehicle present inside the database.

:::success
op-v-changeveh `[column]` `[value]`
:::
* `column` - there are many columns available here is a list:

:::info
`label` - string.

`category` - string.

`brand` - string.

`class` - string.

`price` - integer.

`type` - string.

`instore` - boolean.

`defaultmods` - Does not need a value, only need to sit inside the vehicle.

:::

* `value` - Depending on the column the value may vary