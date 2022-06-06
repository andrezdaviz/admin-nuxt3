import typegoose from "@typegoose/typegoose";
const { modelOptions, prop, getModelForClass } = typegoose;

@modelOptions({
  schemaOptions: {
    versionKey: false,
  },
})
export class Sport {
  @prop({ type: String })
  sport: string;
}

const modelSport = getModelForClass(Sport);

export default modelSport;
