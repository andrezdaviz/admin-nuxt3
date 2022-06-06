import typegoose, { Ref } from "@typegoose/typegoose";
import { Team } from "./Team";
import { League } from "./League";

const { getModelForClass, prop, modelOptions } = typegoose;

@modelOptions({
  schemaOptions: {
    _id: false,
    versionKey: false,
  },
})
class TeamsItem {
  @prop({ ref: () => Team })
  team: Ref<Team>;

  @prop()
  odd: number;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})
class Event {
  @prop({ type: () => TeamsItem })
  teams: TeamsItem[];

  @prop()
  league: Ref<League>;

  @prop()
  timestamp: Date;

  @prop()
  oddDraw: number;
}

const modelEvent = getModelForClass(Event);

export default modelEvent;
