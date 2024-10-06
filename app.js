const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const image = document.getElementById("image");
const countries = document.getElementById("countryContainer");
const subRegion = document.getElementById("subregion");
const darkMode = document.getElementById("darkMode");
const backBtn = document.getElementById("backBtn");
const region = document.getElementById("region");
const filterByRegion = document.getElementById("filter");
const countries2 = document.getElementById("countries2");
// const regionColor = document.querySelector(".regionColor");

const where = document.querySelector(".wherer");
// const searchIcon = documen.getElementById("searchIcon");

function dark() {
  darkMode.classList.toggle("darkMode");
  where.classList.toggle("where");
  // regionColor.classList.toggle("regionColor");
  // where.style.background.toggle = "black";
}

searchInput.addEventListener("change", () => {
  countries2.innerHTML = "";
  let searchValue = searchInput.value;

  countries.innerHTML = "";

  fetch(` https://restcountries.com/v3.1/name/${searchValue}`)
    .then((data) => data.json())
    .then((data) => {
      const native = data[0].name;
      const objectNative = native;

      const nativeArray = objectNative.nativeName;

      const out = Object.values(nativeArray);

      const nativeName = out[0].common;

      const object = data[0].currencies;

      const objectObj = Object.keys(object);

      const obj = Object.keys(object[objectObj]);

      const currency = object[objectObj[0]][obj[0]];

      const symbol = object[objectObj[0]][obj[1]];

      const objLang = data[0].languages;

      const language = Object.values(objLang);

      let htmlVar = `
  



  <div class= "flexed">
    <div class= "countryDesigns">
    
          <div class= "flagFlex">

            <img class= "flaged"  src="${data[0].flags.svg}"/>
          
          </div>

        <div class = "countryContent">
          <h2> ${data[0].name.common}</h2>
          <div class= "flexs">
          <div class="side">
           <p><strong> Native Name :</strong> ${nativeName}</p>
          <p> <strong> Population :</strong> ${data[0].population}</p>

          <p><strong> Region : </strong> ${data[0].region}</p>
          <p> <strong>SubRegion : </strong> ${data[0].subregion}</p>
          <p><strong> Capital : </strong> ${data[0].capital}</p>
          </div>
          <div class ="sided">
          <p> <strong>Top Level Region :</strong> ${data[0].tld}</p>
          <p><strong> Currency : </strong> ${currency}, ${symbol} </p>
          <p> <strong>Languages : </strong> ${language}</p>
          </div>
          </div>
        </div>
        
    </div>
  </div>
  `;
      countries.innerHTML += htmlVar;
    });
});

//Filter BY Region
region.addEventListener("change", () => {
  countries.innerHTML = "";
  countries2.innerHTML = "";
  let regionValue = region.value;

  fetch(`https://restcountries.com/v3.1/region/${regionValue}`)
    .then((data) => data.json())
    .then((data) => {
      data.forEach((element) => {
        let htmlVariable = `

   <div class="regionFlex">
      <div class="region">
                <div class= "flagRegion">

                  <img class= "flag" width="600px" src="${element.flags.svg}"/>
                
                </div>

                <div class= "regionText regionColor">
                        <h2> ${element.name.common} </h2>
                        <p> <strong>Population :</strong> ${element.population}</p>
                        <p> <strong>Region :</strong> ${element.region}</p>
                        
                        <p> <strong>Capital :</strong> ${element.capital}</p>

                </div>
        </div>
   </div>
       
      
      
      `;

        countries2.innerHTML += htmlVariable;
      });
    });
});

fetch(`https://restcountries.com/v3.1/all`)
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      countries.innerHTML = "";
      // countries2.innerHTML = "";

      let htmlVariable = `

      <div class="all">
           <div>

            <img class= "flagAll" src="${element.flags.svg}"/>
          
          </div>

           <div class= "allText">
            <h2> ${element.name.common} </h2>
            <p> Population : ${element.population}</p>
          <p> Region : ${element.region}</p>
          
          <p> Capital : ${element.capital}</p>

        </div>

      </div>
       
      
      
      `;

      countries2.innerHTML += htmlVariable;
    });
  });

// fetch(`https://restcountries.com/v3.1/all`)
// .then((data)=>data.json())
// .then(())
// // backBtn.style.visibility = "visible";
// searchInput.style.visibility = "hidden";
// searchBtn.style.visibility = "hidden";
// backBtn.style.display = "block";
