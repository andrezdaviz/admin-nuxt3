import typegoose, { Ref } from "@typegoose/typegoose";
import { Country } from "./Country";
import { Sport } from "./Sport";

const { prop, getModelForClass, modelOptions } = typegoose;

@modelOptions({
  schemaOptions: {
    versionKey: false,
  },
})
export class League {
  @prop({ type: String })
  league: string;

  @prop({ ref: () => Sport })
  sport: Ref<Sport>;

  @prop({ ref: () => Country })
  country: Ref<Country>;
}

const modelLeague = getModelForClass(League);

export default modelLeague;
