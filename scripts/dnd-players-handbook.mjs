import initTableOfContents from "./apps/table-of-contents.mjs";
import PlayersHandbookJournalSheet from "./apps/journal-sheet.mjs";
import {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules
} from './references.mjs';

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {

  // Adding module symbols to module namespace
  const module = game.modules.get("dnd-players-handbook-pt-br");
  module.apps = {};
  module.dataModels = {};

  // Creating PHB config object
  CONFIG.PHB = {};

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(JournalEntry, "dnd-players-handbook-pt-br", PlayersHandbookJournalSheet, {
    types: ["base"],
    label: "Player's Handbook",
    makeDefault: false
  });

  initTableOfContents();

  foundry.utils.mergeObject(CONFIG.DND5E.abilities, replacementAbilityReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.skills, replacementSkillReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.spellSchools, replacementSpellSchoolReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, replacementRules, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, replacementConditionTypes, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, newRules);
});
