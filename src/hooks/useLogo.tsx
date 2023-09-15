import slugify from "slugify";
import logosData from "../utils/logos.json";

const useLogoSrc = () => (team) => logosData[slugify(team, { lower: true })];

export default useLogoSrc;
