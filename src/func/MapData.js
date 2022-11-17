export function mapData(twitterCountries, twitterPopulationFollowers) {
  return {
    type: "choropleth",
    locationmode: "country names",
    locations: twitterCountries,
    z: twitterPopulationFollowers,
    text: twitterCountries,
    colorscale: "Blues",
  };
}
export default mapData;
