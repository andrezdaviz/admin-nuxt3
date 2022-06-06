import typegoose from "@typegoose/typegoose";
const { getModelForClass, modelOptions, prop } = typegoose;

@modelOptions({
  schemaOptions: {
    versionKey: false,
  },
})
export class Team {
  @prop({ type: String })
  team: string;
}

const modelTeam = getModelForClass(Team);

export default modelTeam;
