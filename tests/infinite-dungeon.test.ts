import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CombatResolved } from "../generated/schema"
import { CombatResolved as CombatResolvedEvent } from "../generated/InfiniteDungeon/InfiniteDungeon"
import { handleCombatResolved } from "../src/infinite-dungeon"
import { createCombatResolvedEvent } from "./infinite-dungeon-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let roundId = BigInt.fromI32(234)
    let bossElement = 123
    let bossHp = BigInt.fromI32(234)
    let totalDamage = BigInt.fromI32(234)
    let victory = "boolean Not implemented"
    let newCombatResolvedEvent = createCombatResolvedEvent(
      roundId,
      bossElement,
      bossHp,
      totalDamage,
      victory
    )
    handleCombatResolved(newCombatResolvedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("CombatResolved created and stored", () => {
    assert.entityCount("CombatResolved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CombatResolved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "roundId",
      "234"
    )
    assert.fieldEquals(
      "CombatResolved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bossElement",
      "123"
    )
    assert.fieldEquals(
      "CombatResolved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bossHp",
      "234"
    )
    assert.fieldEquals(
      "CombatResolved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalDamage",
      "234"
    )
    assert.fieldEquals(
      "CombatResolved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "victory",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
