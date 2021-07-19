import {
 Document, model, Model, Schema,
} from 'mongoose';
import { GameStatus } from '../../types/game-status';
import { WonStatus } from '../../types/won-types';

interface GameAttrs {
  won?: WonStatus
  status: GameStatus
}

interface GameDocument extends Document {
  won?: WonStatus
  status: GameStatus
}

interface GameModel extends Model<GameDocument> {
  // eslint-disable-next-line no-unused-vars
  build(attrs: GameAttrs): GameDocument
}

const gameSchema = new Schema<GameDocument, GameModel>({
  status: {
    type: String,
    required: true,
    enum: [GameStatus],
  },
  won: {
    type: String,
    enum: [WonStatus],
  },
});

gameSchema.statics.build = (attrs: GameAttrs) => new Game({
  status: attrs.status,
});

export const Game = model<GameDocument, GameModel>('Game', gameSchema);
