function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = countryInfo("Spain", 47, "Madrid");
const country2 = countryInfo("United States", 331, "Washington, D.C.");
const country3 = countryInfo("China", 1444, "Beijing");

console.log(country1);
console.log(country2);
console.log(country3);
