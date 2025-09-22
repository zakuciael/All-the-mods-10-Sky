// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods
    .custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "minecraft:netherite_shovel"
        },
        "ingredients": [
          {
            "consume": true,
            "ingredient": {
              "tag": "c:ingots/allthemodium"
            }
          },
          {
            "consume": true,
            "ingredient": {
              "tag": "c:ingots/vibranium"
            }
          },
          {
            "consume": true,
            "ingredient": {
              "tag": "c:ingots/unobtainium"
            }
          }
        ],
        "result": {
          "count": 1,
          "id": "allthemodium:alloy_shovel"
        },
        "techLevel": "draconic",
        "totalEnergy": 32000000
      })
    .id("allthemodsmodium:draconic_evolution/alloy_shovel")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.