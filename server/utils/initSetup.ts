import Country from "../models/Country";
import Sport from "../models/Sport";
import League from "../models/League";
import Team from "../models/Team";

export const createCountries = async () => {
  try {
    const count = await Country.estimatedDocumentCount();
    if (count > 0) return;
    const { countries } = await $fetch(
      "https://www.thesportsdb.com/api/v1/json/2/all_countries.php"
    );

    const values = countries;
    const docs = await Promise.all([
      values.map(async (val) => {
        await new Country({ country: val.name_en }).save();
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
};

export const createSports = async () => {
  try {
    const count = await Sport.estimatedDocumentCount();
    if (count > 0) return;
    const { sports } = await $fetch(
      "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
    );
    const values = sports;
    const docs = await Promise.all([
      values.map(async (val) => {
        await new Sport({ sport: val.strSport }).save();
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
};

export const createLeague = async () => {
  try {
    const count = await League.estimatedDocumentCount();
    if (count > 0) return;

    const sports = await Sport.find();
    const countries = await Country.find();

    for (const sport of sports) {
      for (const country of countries) {
        const { countries: leagues } = await $fetch(
          `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${country.country}&s=${sport.sport}`
        );

        const values = leagues;
        if (values) {
          values.map(async (val) => {
            await new League({
              league: val.strLeague,
              sport: sport._id,
              country: country._id,
            }).save();
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const createTeams = async () => {
  try {
    const count = await Team.estimatedDocumentCount();
    if (count > 0) return;
    const sports = await Sport.find();
    const countries = await Country.find();

    const continents = [
      "Europe",
      "Worldwire",
      "North America",
      "South America",
      "Central America",
      "Asia",
      "Oceania",
      "Africa",
    ];

    for (const country of countries) {
      if (continents.find((c) => c === country.country)) continue;
      await new Team({ team: country.country }).save();
      for (const sport of sports) {
        const { teams } = await $fetch(
          `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?c=${country.country}&s=${sport.sport}`
        );

        const values = teams;
        if (values) {
          values.map(async (val) => {
            await new Team({
              team: val.strTeam,
            }).save();
          });
        }
      }
    }

    console.log("hecho");
  } catch (error) {}
};

export const addOthersCountries = async () => {
  try {
    const count = await Country.findOne({ country: "North America" });
    if (count) return;
    const values = await Promise.all([
      await new Country({ country: "North America" }).save(),
      await new Country({ country: "South America" }).save(),
      await new Country({ country: "Central America" }).save(),
      await new Country({ country: "Asia" }).save(),
      await new Country({ country: "Oceania" }).save(),
      await new Country({ country: "Africa" }).save(),
    ]);
  } catch (error) {}
};
