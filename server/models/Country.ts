import typegoose from "@typegoose/typegoose";
const { modelOptions, prop, getModelForClass } = typegoose;

@modelOptions({
  schemaOptions: {
    versionKey: false,
  },
})
export class Country {
  @prop({ type: String })
  country: string;
}

const modelCountry = getModelForClass(Country);

export default modelCountry;
