import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CombatResolved,
  CoordinatorSet,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RewardCredited,
  RewardsWithdrawn,
  RoundEnded,
  RoundStarted,
  WarriorPurchased
} from "../generated/InfiniteDungeon/InfiniteDungeon"

export function createCombatResolvedEvent(
  roundId: BigInt,
  bossElement: i32,
  bossHp: BigInt,
  totalDamage: BigInt,
  victory: boolean
): CombatResolved {
  let combatResolvedEvent = changetype<CombatResolved>(newMockEvent())

  combatResolvedEvent.parameters = new Array()

  combatResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  combatResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "bossElement",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(bossElement))
    )
  )
  combatResolvedEvent.parameters.push(
    new ethereum.EventParam("bossHp", ethereum.Value.fromUnsignedBigInt(bossHp))
  )
  combatResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDamage",
      ethereum.Value.fromUnsignedBigInt(totalDamage)
    )
  )
  combatResolvedEvent.parameters.push(
    new ethereum.EventParam("victory", ethereum.Value.fromBoolean(victory))
  )

  return combatResolvedEvent
}

export function createCoordinatorSetEvent(
  vrfCoordinator: Address
): CoordinatorSet {
  let coordinatorSetEvent = changetype<CoordinatorSet>(newMockEvent())

  coordinatorSetEvent.parameters = new Array()

  coordinatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "vrfCoordinator",
      ethereum.Value.fromAddress(vrfCoordinator)
    )
  )

  return coordinatorSetEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent =
    changetype<OwnershipTransferRequested>(newMockEvent())

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createRewardCreditedEvent(
  roundId: BigInt,
  player: Address,
  amount: BigInt
): RewardCredited {
  let rewardCreditedEvent = changetype<RewardCredited>(newMockEvent())

  rewardCreditedEvent.parameters = new Array()

  rewardCreditedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  rewardCreditedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  rewardCreditedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardCreditedEvent
}

export function createRewardsWithdrawnEvent(
  player: Address,
  amount: BigInt
): RewardsWithdrawn {
  let rewardsWithdrawnEvent = changetype<RewardsWithdrawn>(newMockEvent())

  rewardsWithdrawnEvent.parameters = new Array()

  rewardsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  rewardsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardsWithdrawnEvent
}

export function createRoundEndedEvent(
  roundId: BigInt,
  vrfRequestId: BigInt
): RoundEnded {
  let roundEndedEvent = changetype<RoundEnded>(newMockEvent())

  roundEndedEvent.parameters = new Array()

  roundEndedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  roundEndedEvent.parameters.push(
    new ethereum.EventParam(
      "vrfRequestId",
      ethereum.Value.fromUnsignedBigInt(vrfRequestId)
    )
  )

  return roundEndedEvent
}

export function createRoundStartedEvent(
  roundId: BigInt,
  startTime: BigInt,
  endTime: BigInt,
  startingPrizePool: BigInt
): RoundStarted {
  let roundStartedEvent = changetype<RoundStarted>(newMockEvent())

  roundStartedEvent.parameters = new Array()

  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  roundStartedEvent.parameters.push(
    new ethereum.EventParam(
      "startingPrizePool",
      ethereum.Value.fromUnsignedBigInt(startingPrizePool)
    )
  )

  return roundStartedEvent
}

export function createWarriorPurchasedEvent(
  roundId: BigInt,
  player: Address,
  element: i32,
  tier: i32
): WarriorPurchased {
  let warriorPurchasedEvent = changetype<WarriorPurchased>(newMockEvent())

  warriorPurchasedEvent.parameters = new Array()

  warriorPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  warriorPurchasedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  warriorPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "element",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(element))
    )
  )
  warriorPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return warriorPurchasedEvent
}
