ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "dyenamics:ma/dye/lavender_dye" })
  allthemods.shaped("dyenamics:lavender_dye", [" D ", "   ", "D D"], { D: "dyenamics:lavender_dye" })
})
