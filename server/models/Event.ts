import typegoose, { PropType, Ref } from "@typegoose/typegoose";

const { getModelForClass, prop, modelOptions } = typegoose;
import { Team } from "./Team";
import { League } from "./League";

//const { getModelForClass, prop, modelOptions , Ref} = typegoose;

@modelOptions({
  schemaOptions: {
    _id: false,
    versionKey: false,
  },
})
class Item {
  @prop({ ref: () => Team })
  team_id: Ref<Team>;

  @prop({ type: Number })
  odd: number;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})
class Event {
  @prop({ type: () => Item }, PropType.ARRAY)
  teams: Item[];

  @prop({ ref: () => League })
  league_id: Ref<League>;

  @prop({ type: Date })
  timestamp: Date;

  @prop({ type: Number })
  oddDraw: number;
}

const modelEvent = getModelForClass(Event);

export default modelEvent;
