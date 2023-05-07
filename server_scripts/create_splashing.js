// priority: 1000
ServerEvents.recipes((event) => {
  event.remove({ id: "create:crushing/gravel" });

  event.recipes.create.crushing({
    ingredients: [Ingredient.of("#forge:gravel")],
    results: [
      Item.of("minecraft:coal").withChance(0.5),
      Item.of("minecraft:raw_iron").withChance(0.45),
      Item.of("create:raw_zinc").withChance(0.35),
      Item.of("mekanism:raw_osmium").withChance(0.2),
      Item.of("thermal:raw_lead").withChance(0.13),
      Item.of("thermal:raw_tin").withChance(0.13),
    ],
    processingTime: 600,
  });

  event.recipes.create.crushing(
    [
      Item.of("minecraft:raw_iron").withChance(0.19),
      Item.of("thermal:raw_lead").withChance(0.15),
    ],
    "create:scorchia"
  );

  event.recipes.create.milling(
    [
      Item.of("minecraft:raw_iron").withChance(0.19),
      Item.of("thermal:raw_lead").withChance(0.15),
    ],
    "create:scorchia"
  );

  event.recipes.create.crushing(
    [
      Item.of("minecraft:raw_gold").withChance(0.22),
      Item.of("thermal:raw_tin").withChance(0.17),
      Item.of("mekanism:raw_osmium").withChance(0.15),
    ],
    "create:scoria"
  );

  event.recipes.create.milling(
    [
      Item.of("minecraft:raw_gold").withChance(0.22),
      Item.of("thermal:raw_tin").withChance(0.17),
      Item.of("mekanism:raw_osmium").withChance(0.15),
    ],
    "create:scoria"
  );

  event.recipes.create.crushing(
    [
      Item.of("minecraft:raw_copper").withChance(0.24),
      Item.of("thermal:raw_silver").withChance(0.13),
    ],
    "create:veridium"
  );

  event.recipes.create.milling(
    [
      Item.of("minecraft:raw_copper").withChance(0.24),
      Item.of("thermal:raw_silver").withChance(0.13),
    ],
    "create:veridium"
  );
});
