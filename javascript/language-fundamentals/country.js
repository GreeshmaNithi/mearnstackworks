var indiaData=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20,
        77
      ],
      "demonym": "Indian",
      "area": 3287590,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "hu": "India"
      },
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
  ]

//   //print country name
//   let countryname=indiaData[0].name
//   console.log(countryname);
// //   console.log(indiaData[0]);
//   //print bordersname
//   let border=indiaData[0].borders
//   console.log(border);
// //   console.log(indiaData[0]);

//   //print currencyname and currency symbol seperately
//   let currancyName=indiaData[0].currencies[0].name
//   console.log(currancyName);
// //   console.log(indiaData[0]);

//   let symbol=indiaData[0].currencies[0].symbol
//   console.log(symbol);
// //   console.log(indiaData[0]);

//   //print population
//   let pop=indiaData[0].population
//   console.log(pop);
// //   console.log(indiaData[0]);

//   //print capital
//   let capital=indiaData[0].capital
//   console.log(capital);
// //   console.log(indiaData[0]);
//   //print laguages name
//   let language=indiaData[0].languages
//   console.log(language);
//   //print flag
//   let flag=indiaData[0].flags
//   console.log(flag);



  let countryname=indiaData[0].name
  let border=indiaData[0].borders
  let currancyName=indiaData[0].currencies[0].name
  let symbol=indiaData[0].currencies[0].symbol
  let pop=indiaData[0].population
  let capital=indiaData[0].capital
let language=indiaData[0].languages
let flag=indiaData[0].flags


var finalData={countryname,border,currancyName,symbol,pop,capital,language,flag}
console.log(finalData);




