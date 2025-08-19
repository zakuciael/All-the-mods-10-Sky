// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.shaped(
        Item.of('functionalstorage:max_storage_upgrade', 8),
        [
            'NNN',
            'NsN',
            'NNN'
        ],
        {
            N: 'functionalstorage:netherite_upgrade',
            s: 'allthetweaks:atm_star_shard'
        }
    )

    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 2147483647,
            ingredients: [
                Ingredient.of('draconicevolution:dragon_heart').toJson(),
                Ingredient.of('draconicevolution:draconic_reactor_core').toJson(),
                Ingredient.of('allthetweaks:atm_star').toJson(),
                Ingredient.of('draconicevolution:draconic_reactor_core').toJson(),
                Ingredient.of('draconicevolution:dragon_heart').toJson()
            ],
            result: {
                count: 1,
                id: 'draconicevolution:creative_op_capacitor'
            }
        }
    ).id('allthemods:energizing/draconicevolution_creative_power_source')

    allthemods.custom(
        {
            type: 'powah:energizing',
            energy: 2147483647,
            ingredients: [
                Ingredient.of('draconicevolution:dragon_heart').toJson(),
                Ingredient.of('draconicevolution:chaotic_capacitor').toJson(),
                Ingredient.of('allthetweaks:atm_star').toJson(),
                Ingredient.of('draconicevolution:chaotic_capacitor').toJson(),
                Ingredient.of('draconicevolution:dragon_heart').toJson()
            ],
            result: {
                count: 1,
                id: 'draconicevolution:creative_capacitor'
            }
        }
    ).id('allthemods:energizing/draconicevolution_creative_capacitor')


})
