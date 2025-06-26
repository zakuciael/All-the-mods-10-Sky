ServerEvents.recipes(event => {


    let addCasting = (input, consumecast, fluidamount, fluidtag, outputamount, output) => {
        event.custom(
        {
        "type": "productivemetalworks:block_casting",
        "cast": {
          "item": input
        },
        "consume_cast": consumecast,
        "fluid": {
          "amount": fluidamount,
          "tag": fluidtag
        },
        "result": {
          "count": outputamount,
          "id": output
        }
    }
)
}

addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_emerald', 1, 'geore:budding_emerald')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_diamond', 1, 'geore:budding_diamond')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_gold', 1, 'geore:budding_gold')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_iron', 1, 'geore:budding_iron')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_copper', 1, 'geore:budding_copper')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_redstone', 1, 'geore:budding_redstone')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_lapis', 1, 'geore:budding_lapis')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_carbon', 1, 'geore:budding_coal')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_quartz', 1, 'geore:budding_quartz')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_ancient_debris', 1, 'geore:budding_ancient_debris')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_aluminum', 1, 'geore:budding_aluminum')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_tin', 1, 'geore:budding_tin')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_silver', 1, 'geore:budding_silver')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_uranium', 1, 'geore:budding_uranium')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_platinum', 1, 'geore:budding_platinum')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_osmium', 1, 'geore:budding_osmium')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_nickel', 1, 'geore:budding_nickel')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_lead', 1, 'geore:budding_lead')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_zinc', 1, 'geore:budding_zinc')
addCasting('allthecompressed:red_sand_1x', true, 900, 'c:molten_quartz', 1, 'geore:budding_black_quartz')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_ruby', 1, 'geore:ruby')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_sapphire', 1, 'geore:budding_sapphire')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_topaz', 1, 'geore:budding_topaz')
addCasting('allthecompressed:sand_1x', true, 900, 'c:molten_amethyst', 1, 'minecraft:budding_amethyst')
})