import typegoose from "@typegoose/typegoose";
const { modelOptions, prop, getModelForClass } = typegoose;

@modelOptions({
  schemaOptions: {
    versionKey: false,
    toJSON: { virtuals: true },
  },
})
export class Sport {
  @prop({ type: String })
  sport: string;

  public get text() {
    return this.sport;
  }
}

const modelSport = getModelForClass(Sport);

export default modelSport;
