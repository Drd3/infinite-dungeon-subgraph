import {
  CombatResolved as CombatResolvedEvent,
  CoordinatorSet as CoordinatorSetEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardCredited as RewardCreditedEvent,
  RewardsWithdrawn as RewardsWithdrawnEvent,
  RoundEnded as RoundEndedEvent,
  RoundStarted as RoundStartedEvent,
  WarriorPurchased as WarriorPurchasedEvent
} from "../generated/InfiniteDungeon/InfiniteDungeon"
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
} from "../generated/schema"

export function handleCombatResolved(event: CombatResolvedEvent): void {
  let entity = new CombatResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.bossElement = event.params.bossElement
  entity.bossHp = event.params.bossHp
  entity.totalDamage = event.params.totalDamage
  entity.victory = event.params.victory

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCoordinatorSet(event: CoordinatorSetEvent): void {
  let entity = new CoordinatorSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vrfCoordinator = event.params.vrfCoordinator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardCredited(event: RewardCreditedEvent): void {
  let entity = new RewardCredited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.player = event.params.player
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsWithdrawn(event: RewardsWithdrawnEvent): void {
  let entity = new RewardsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundEnded(event: RoundEndedEvent): void {
  let entity = new RoundEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.vrfRequestId = event.params.vrfRequestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundStarted(event: RoundStartedEvent): void {
  let entity = new RoundStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.startingPrizePool = event.params.startingPrizePool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWarriorPurchased(event: WarriorPurchasedEvent): void {
  let entity = new WarriorPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundId = event.params.roundId
  entity.player = event.params.player
  entity.element = event.params.element
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
