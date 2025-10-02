import { GameCreated, CellResolved, CommitCell } from "../generated/MinesGame/MinesGame";
import { CashedOut } from "../generated/MinesGame/MinesGame";
import { MineGame } from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

// get-or-create helper for MineGame
function getOrCreateMineGame(id: Bytes): MineGame {
  let entity = MineGame.load(id);
  if (entity == null) {
    entity = new MineGame(id);
    // minimal defaults; specific fields will be set by the handler
    entity.cumMul = BigInt.zero();
    entity.steps = 0;
    entity.active = false;
    entity.vrfPending = false;
    entity.vrfRequestId = BigInt.zero();
    entity.isMine = false;
    entity.revealedCells = [];
    entity.cashedOut = false;
    entity.cashoutAmount = BigInt.zero();
  }
  return entity as MineGame;
}

export function handleGameCreated(event: GameCreated): void {
  let id = event.transaction.hash.concatI32(event.params.player.toI32());
  let entity = getOrCreateMineGame(id);

  entity.player = event.params.player;
  entity.gameId = event.params.gameId;
  entity.stake = event.params.stake;
  let cells = event.params.totalCells.toI32();
  let tableDimensions = 0;

  if (cells == 9) tableDimensions = 0;
  if (cells == 25) tableDimensions = 1;
  if (cells == 49) tableDimensions = 2;
  if (cells == 64) tableDimensions = 3;
  entity.tableDimension = tableDimensions;
  entity.remainingCells = cells;
  entity.remainingMines = event.params.totalMines.toI32();

  // Initialize other required fields from the schema
  entity.cumMul = BigInt.fromI32(10).pow(18); // WAD
  entity.steps = 0;
  entity.active = true;
  entity.vrfPending = false;
  entity.vrfRequestId = BigInt.fromI32(0);
  entity.isMine = false;
  entity.revealedCells = [];
  entity.cashedOut = false;

  entity.save();
}

export function handleCommitCell(event: CommitCell): void {
  // TODO: Implement once ID strategy is finalized (likely player + gameId)
  let id = event.transaction.hash.concatI32(event.params.player.toI32());
  let entity = getOrCreateMineGame(id);

  entity.vrfPending = true;
  entity.revealedCells.push(event.params.cellIndex.toI32());
  entity.save();
}

export function handleCellResolved(event: CellResolved): void {
  // TODO: Implement once ID strategy is finalized (likely player + gameId)
  let id = event.transaction.hash.concatI32(event.params.player.toI32());
  let entity = getOrCreateMineGame(id);

  entity.isMine = event.params.isMine;
  entity.vrfPending = false;
  entity.vrfRequestId = BigInt.zero();
  entity.revealedCells.push(event.params.cellIndex.toI32());
  entity.save();
}

export function handleCashedOut(event: CashedOut): void {
  // TODO: Implement once ID strategy is finalized (likely player + gameId)
  let id = event.transaction.hash.concatI32(event.params.player.toI32());
  let entity = getOrCreateMineGame(id);

  entity.cashedOut = true;
  entity.cashoutAmount = event.params.amount;
  entity.active = false;
  // Reset gameplay-related state
  entity.vrfPending = false;
  entity.vrfRequestId = BigInt.zero();
  entity.isMine = false;
  entity.revealedCells = [];
  entity.steps = 0;
  entity.cumMul = BigInt.zero();
  entity.remainingCells = 0;
  entity.remainingMines = 0;
  entity.stake = BigInt.zero();
  entity.save();
}

