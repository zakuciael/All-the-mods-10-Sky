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

})