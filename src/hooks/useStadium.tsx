import slugify from "slugify";
import stadiumsData from "../utils/stadiums.json";

const useStadiumName = () => (team) =>
  stadiumsData[slugify(team, { lower: true })];

export default useStadiumName;
