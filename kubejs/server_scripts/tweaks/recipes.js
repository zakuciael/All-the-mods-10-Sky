// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.replaceInput({ mod: "railcraft"}, "railcraft:steel_shovel", "mekanismtools:steel_shovel")

    // Concrete from Concrete Powder using Water Buckets
    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        allthemods.shaped(
            Item.of(`minecraft:${color}_concrete`, 8),
            ['CCC','CBC','CCC'],
            {
                C: `minecraft:${color}_concrete_powder`,
                B: 'minecraft:water_bucket'
            }
        )
    });

    // Dense Uraninite Ore Energizing Recipes
    allthemods.remove({ id: 'powah:energizing/uraninite_from_ore' })
    allthemods.custom({
        "type": "powah:energizing",
        "energy": 50000,
        "ingredients": [
             {
                 "tag": "c:ores/uraninite_regular"
             }
         ],
        "result": {
            "count": 5,
            "id": "powah:uraninite"
        }
    }).id('powah:energizing/uraninite_from_ore')

    allthemods.shapeless(
        Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]', 1),
        [
            'minecraft:glass_bottle',
            'mysticalagriculture:water_essence'
        ]
    )

    allthemods.shapeless(
        Item.of('minecraft:honey_block'),
        [
            '9x mysticalagriculture:honey_essence'
        ]
    )

    allthemods.remove({ id: 'crystalix:crystalix_wand' })
    allthemods.shaped(
        Item.of('crystalix:crystalix_wand'),
        [
            '  D',
            ' S ',
        ], {
            S: '#c:rods/wooden',
            D: 'minecraft:diamond'
        }
    )

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  
