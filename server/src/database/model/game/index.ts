import {
 Document, model, Model, Schema,
} from 'mongoose';

/*
defines what attributes will be required

*/
interface GameAttrs {
  won: string
}

/*
defines what attributes the document will have
*/
export interface GameDocument extends Document {
  won: string
}

/*
add custom build function to Model,
this interface enables typescript with mongoose

*/
interface GameModel extends Model<GameDocument> {
  // eslint-disable-next-line no-unused-vars
  build(attrs: GameAttrs): GameDocument
}

/*
create the schema

*/
const gameSchema = new Schema<GameDocument, GameModel>({
  won: {
    type: String,
    required: true,
  },
});

gameSchema.statics.build = (attrs: GameAttrs) => new Game({
  won: attrs.won,
});

export const Game = model<GameDocument, GameModel>('Game', gameSchema);
