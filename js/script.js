const countrys = [
  {
    id: 1,
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    population: 11750,
    flag: "https://flagcdn.com/wf.svg",
  },
  {
    id: 2,
    name: "Iceland",
    capital: "Reykjavik",
    population: 366425,
    flag: "https://flagcdn.com/is.svg",
  },
  {
    id: 3,
    name: "Luxembourg",
    capital: "Luxembourg",
    population: 632275,
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    id: 4,
    name: "Mali",
    capital: "Bamako",
    population: 20250834,
    flag: "https://flagcdn.com/ml.svg",
  },
  {
    id: 5,
    name: "Comoros",
    capital: "Moroni",
    population: 869595,
    flag: "https://flagcdn.com/km.svg",
  },
  {
    id: 6,
    name: "Australia",
    capital: "Canberra",
    population: 25687041,
    flag: "https://flagcdn.com/au.svg",
  },
  {
    id: 7,
    name: "Estonia",
    capital: "Tallinn",
    population: 1331057,
    flag: "https://flagcdn.com/ee.svg",
  },
  {
    id: 8,
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    id: 9,
    name: "Belarus",
    capital: "Minsk",
    population: 9398861,
    flag: "https://flagcdn.com/by.svg",
  },
  {
    id: 10,
    name: "Guyana",
    capital: "Georgetown",
    population: 786559,
    flag: "https://flagcdn.com/gy.svg",
  },
];

let countriesAll = document.querySelector(".countries");

let search = document.querySelector(".search-input");

function renderCountries(arr) {
  countriesAll.innerHTML = "";
  let countries = arr.map((country) => {
    return `
        <div class="country max-w-[350px] w-full flex flex-col rounded-xl px-2 py-3 shadow-md hover:shadow-2xl dark:bg-white">
        <img class="w-full h-[200px] object-cover rounded-lg" src="${country.flag}" alt="${country.name}">
        <h2 class="text-black mt-2">Country:${country.name}</h2>
        <p class="text-black">Capital:${country.capital}</p>
        <p class="text-black">Population:${country.population}</p>
        <p class="text-black">${country.id}</p>
        <div class="country-more flex items-center justify-start mt-3 gap-2">
        <button class="likeButton w-[40px] h-[40px] flex items-center justify-center bg-gray-800 rounded-lg  hover:cursor-pointer text-white" data-id =${country.id}>
        <svg class="w-[50%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="z-0" fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button class="saveButton w-[40px] h-[40px] flex items-center justify-center bg-gray-800 rounded-lg hover:cursor-pointer text-white" data-id =${country.id}>
        <svg class="w-[50%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 19.2674V7.84496C19 5.64147 17.4253 3.74489 15.2391 3.31522C13.1006 2.89493 10.8994 2.89493 8.76089 3.31522C6.57467 3.74489 5 5.64147 5 7.84496V19.2674C5 20.6038 6.46752 21.4355 7.63416 20.7604L10.8211 18.9159C11.5492 18.4945 12.4508 18.4945 13.1789 18.9159L16.3658 20.7604C17.5325 21.4355 19 20.6038 19 19.2674Z" stroke="currentColor" fill="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button class="more h-[40px] flex items-center justify-center bg-gray-800 rounded-lg px-2 hover:bg-white border-[1px] border-white hover:cursor-pointer text-white hover:text-gray-800 hover:border-black" data-id =${country.id}>More</button>
        <div class="extra-info hidden">
        <div class="relative w-[90%] md:w-[80%] lg:w-[60%]">
        <button class="absolute right-0 top-0 md:right-[34px] md:top-[34px] closeBtn bg-black text-white p-1 rounded-md">
        <svg class="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="currentColor"/>
        </svg>
        </button>  
        <div class="p-5 bg-white">
        <img class="w-full h-[250px] object-cover rounded-lg" src="${country.flag}" alt="${country.name}">
        <div class="text-black mt-2 flex items-center gap-3">
            <span class="w-[20px] h-[20px]"><svg fill="#000000" viewBox="0 0 24 24" id="home-alt-3" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon id="secondary" points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11" style="fill: #ffffff; stroke-width: 2;"></polygon><polygon id="primary" points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon></g></svg></span>
            <span>: ${country.name}</span>
        </div>
        <div class="text-black flex items-center gap-3">
            <span class="w-[20px] h-[20px]"><svg class="w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V4.08296C8.16229 4.55904 6 7.027 6 10V10.2676C5.4022 10.6134 5 11.2597 5 12H4C2.34315 12 1 13.3431 1 15V19C1 20.1046 1.89543 21 3 21H6C6 21.5523 6.44771 22 7 22H17C17.5523 22 18 21.5523 18 21H21C22.1046 21 23 20.1046 23 19V15C23 13.3431 21.6569 12 20 12H19C19 11.2597 18.5978 10.6134 18 10.2676V10C18 7.027 15.8377 4.55904 13 4.08296V2ZM12 6C9.79086 6 8 7.79086 8 10H16C16 7.79086 14.2091 6 12 6ZM7 13V12H8H16H17V13H7ZM6 15C5.44772 15 5 14.5523 5 14H4C3.44772 14 3 14.4477 3 15V19H6V15ZM16 15V20H15V17.25C15 16.5596 14.5523 16 14 16C13.4477 16 13 16.5596 13 17.25V20H11V17.25C11 16.5596 10.5523 16 10 16C9.44772 16 9 16.5596 9 17.25V20H8V15H16ZM18 15V19H21V15C21 14.4477 20.5523 14 20 14H19C19 14.5523 18.5523 15 18 15Z" fill="#000000"></path> </g></svg></span>
            <span>: ${country.capital}</span></div>
        <div class="text-black flex items-center gap-3">
            <span class="w-[20px] h-[20px]"><svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.953,46.506c-1.385-2.83-2.117-6.008-2.117-9.192c0-1.743,0.252-3.534,0.768-5.468c0.231-0.87,0.521-1.702,0.847-2.509 c-1.251-0.683-2.626-1.103-4.101-1.103c-5.47,0-9.898,5.153-9.898,11.517c0,4.452,2.176,8.305,5.354,10.222L5.391,56.217 c-0.836,0.393-1.387,1.337-1.387,2.392v10.588c0,1.419,0.991,2.569,2.21,2.569h7.929V60.656c0-3.237,1.802-6.172,4.599-7.481 l10.262-4.779C28.624,47.792,28.273,47.161,27.953,46.506z"></path> <path d="M60.137,34.801h34.092v-0.001c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761c0,0,0-0.001,0-0.001 l0-6.43h0c0-0.973-0.789-1.761-1.761-1.761c-0.002,0-0.004,0.001-0.006,0.001v-0.005H56.133c1.614,2.114,2.844,4.627,3.526,7.435 C59.874,33.168,60.03,33.999,60.137,34.801z"></path> <path d="M95.996,66.436c0-0.973-0.789-1.761-1.761-1.761c-0.002,0-0.004,0.001-0.006,0.001v-0.005H72.007v7.095v1.994 c0,0.293-0.016,0.582-0.045,0.867h22.267v-0.001c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761l0-0.001 L95.996,66.436L95.996,66.436z"></path> <path d="M94.235,44.762c-0.002,0-0.004,0.001-0.006,0.001v-0.005H58.944c-0.159,0.419-0.327,0.836-0.514,1.249 c-0.364,0.802-0.773,1.569-1.224,2.297l10.288,4.908c0.781,0.378,1.473,0.897,2.078,1.503h24.657v-0.001 c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761c0,0,0-0.001,0-0.001l0-6.43h0 C95.996,45.55,95.207,44.762,94.235,44.762z"></path> <path d="M65.323,57.702l-11.551-5.51l-4.885-2.33c2.134-1.344,3.866-3.418,5-5.917c0.899-1.984,1.435-4.231,1.435-6.631 c0-1.348-0.213-2.627-0.512-3.863c-1.453-5.983-6.126-10.392-11.736-10.392c-5.504,0-10.106,4.251-11.648,10.065 c-0.356,1.333-0.602,2.72-0.602,4.189c0,2.552,0.596,4.93,1.609,7c1.171,2.4,2.906,4.379,5.018,5.651l-4.678,2.178l-11.926,5.554 c-1.037,0.485-1.717,1.654-1.717,2.959v11.111v1.994c0,1.756,1.224,3.181,2.735,3.181h42.417c1.511,0,2.735-1.424,2.735-3.181 v-1.994V60.656C67.019,59.355,66.349,58.198,65.323,57.702z"></path> </g> </g></svg></span>
            <span>: ${country.population}</span></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        `;
  });
  countriesAll.innerHTML = countries.join("");
}
renderCountries(countrys);

search.addEventListener("keyup", (evt) => {
  let value = evt.target.value.toLowerCase().trim();
  let filteredCountries;

  if (Number(value)) {
    filteredCountries = countrys.filter(
      (country) =>
        country.id == Number(value) ||
        country.population.toString().includes(value)
    );
  } else {
    filteredCountries = countrys.filter(
      (country) =>
        country.name.toLowerCase().includes(value) ||
        country.capital.toLowerCase().includes(value)
    );
  }

  if (filteredCountries.length > 0) {
    renderCountries(filteredCountries);
  } else {
    countriesAll.innerHTML =
      "<p class='text-black text-center text-2xl dark:text-white'>No countries found</p>";
  }
});

let fiindCapital = document.querySelector(".select-capital");
function searchCapiptal(arr) {
  let capitals = arr.map((item) => item.capital);
  capitals.forEach((element) => {
    let option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    fiindCapital.appendChild(option);
  });
  fiindCapital.addEventListener("change", () => {
    let selected = fiindCapital.value;
    if (selected === "all") {
      renderCountries(countrys);
    } else {
      let selectedCountry = countrys.find(
        (country) => country.capital === selected
      );
      renderCountries([selectedCountry]);
    }
  });
}
searchCapiptal(countrys);

let likedCountries = [];
let likeCounts = document.querySelector(".likeCounts");

let savedCountries = [];
let savedCounts = document.querySelector(".savedCounts");

let body = document.querySelector("body");
let countries = document.querySelector(".countries");

countries.addEventListener("click", (event) => {
  let moreButton = event.target.closest(".more");
  if (moreButton) {
    event.preventDefault();

    let countryElement = event.target.closest(".country");
    let extraInfo = countryElement.querySelector(".extra-info");
    extraInfo.addEventListener("click", (evt) => {
        console.log(evt.target.classList.contains(".extra-info"));
        if (evt.target.classList.contains("extra-info")) {
            extraInfo.classList.add("hidden");
            body.classList.remove("scroll");
        }
    });
    extraInfo.classList.remove("hidden");
    body.classList.add("scroll");

    let closeBtn = countryElement.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      extraInfo.classList.add("hidden");
      body.classList.remove("scroll");
    });
  }

  let likeButton = event.target.closest(".likeButton");
  if (likeButton) {
    event.preventDefault();
    likeButton.classList.toggle("bg-white");
    likeButton.classList.toggle("text-red-700");
    likeButton.classList.toggle("border-[1px]");
    likeButton.classList.toggle("bg-gray-800");
    likeButton.classList.toggle("text-white");
    likeButton.classList.toggle("border-red-700");

    let countryId = likeButton.dataset.id;
    let country = countrys.find((country) => country.id == countryId);
    if (country) {
      if (!likedCountries.includes(country)) {
        likedCountries.push(country);
      }
    }

    let count = Number(likeCounts.textContent);
    if (likeButton.classList.contains("bg-white")) {
      count += 1;
    } else {
      count -= 1;
    }
    likeCounts.textContent = count;
  }

  let saveButton = event.target.closest(".saveButton");
  if (saveButton) {
    event.preventDefault();

    saveButton.classList.toggle("bg-white");
    saveButton.classList.toggle("text-gray-700");
    saveButton.classList.toggle("border-[1px]");
    saveButton.classList.toggle("bg-gray-800");
    saveButton.classList.toggle("text-white");
    saveButton.classList.toggle("border-gray-700");

    let countryId = saveButton.dataset.id;
    let country = countrys.find((country) => country.id == countryId);
    if (country) {
      if (!savedCountries.includes(country)) {
        savedCountries.push(country);
      }
    }
    let count = Number(savedCounts.textContent);
    if (saveButton.classList.contains("bg-white")) {
      count += 1;
    } else {
      count -= 1;
    }
    savedCounts.textContent = count;
  }
});
