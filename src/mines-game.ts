import { GameCreated } from "../generated/MinesGame/MinesGame";
import { MineGame } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleGameCreated(event: GameCreated): void {
  let entity = new MineGame(
    event.transaction.hash.concatI32(event.params.player.toI32())
  );

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
  entity.cashoutAmount = BigInt.fromI32(0);

  entity.save();
}

export function handleCellResolved(event: CellResolved): void {

  // Generate the get or create

   entity.cells.push(event.params.cellId.toI32());
   entity.save()
}