const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]

let countriesAll = document.querySelector(".countries");

let search = document.querySelector(".search-input")

function renderCountries(arr) {
    countriesAll.innerHTML = "";
    let countries = arr.map(country => {
        const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(country.name)}`;
        
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button class="absolute right-0 top-0 md:right-[-34px] md:top-[-34px] closeBtn bg-white p-1 rounded-md">
        <svg class="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
        </svg>
        </button>  
        <iframe class="wiki-frame w-full h-[400px] rounded-lg" src="${wikiUrl}" frameborder="0"></iframe>
        </div>
        </div>
        </div>
        </div>
        `
    })
    countriesAll.innerHTML = countries.join("");
}
renderCountries(countrys);

search.addEventListener("keyup", (evt) => {
    let value = evt.target.value.toLowerCase();
    let filteredCountries;
    
    if (Number(value)) {
        filteredCountries = countrys.filter(country => 
            country.id == Number(value) || 
            country.population.toString().includes(value)
        );
    } else {
        filteredCountries = countrys.filter(country => 
            country.name.toLowerCase().includes(value) || 
            country.capital.toLowerCase().includes(value)
        );
    }
    
    if (filteredCountries.length > 0) {
        renderCountries(filteredCountries);
    } else {
        countriesAll.innerHTML = "<p class='text-black text-center text-2xl'>No countries found</p>";
    }
});


let fiindCapital = document.querySelector(".select-capital");
function searchCapiptal(arr) {
    let capitals = arr.map(item => item.capital);
    capitals.forEach(element => {
        let option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        fiindCapital.appendChild(option);
    });
    fiindCapital.addEventListener("change", ()=>{
        let selected = fiindCapital.value;
        if (selected === "all") {
            renderCountries(countrys);
        }
        else{
            let selectedCountry = countrys.find(country => country.capital === selected);
            renderCountries([selectedCountry])
        }
    })
}
searchCapiptal(countrys);

let body = document.querySelector("body")

let moreButtons = document.querySelectorAll(".more");

moreButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); 
        let countryElement = button.closest(".country");
        
        let extraInfo = countryElement.querySelector(".extra-info");
        extraInfo.classList.remove("hidden");
        body.classList.toggle("scroll");
        if (!extraInfo.classList.contains("hidden")) {
            extraInfo.scrollIntoView({ behavior: "smooth" });
        }
        
        let closeBtn = countryElement.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
            extraInfo.classList.add("hidden");
            body.classList.toggle("scroll");
        })
    });
});



let likedCountries = []
let likeCounts = document.querySelector(".likeCounts");
let likeButtons = document.querySelectorAll(".likeButton");
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        button.classList.toggle("bg-white");
        button.classList.toggle("text-red-700");
        button.classList.toggle("border-[1px]");
        button.classList.toggle("bg-gray-800");
        button.classList.toggle("text-white");
        button.classList.toggle("border-red-700");
        
        
        let countryId = button.dataset.id;
        let country = countrys.find(country => country.id == countryId);
        if (country) {
            if (!likedCountries.includes(country)) {
                likedCountries.push(country);
            } 
        }
        let count = Number(likeCounts.textContent);
        
        if (button.classList.contains("bg-white")) {
            count += 1; 
        } else {
            count -= 1;
        }
        likeCounts.textContent = count;
    })
})


let savedCountries = []
let savedCounts = document.querySelector(".savedCounts");
let savedButtons = document.querySelectorAll(".saveButton");
savedButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        button.classList.toggle("bg-white");
        button.classList.toggle("text-black");
        button.classList.toggle("bg-gray-800");
        button.classList.toggle("text-white");
        button.classList.toggle("border-[1px]");
        button.classList.toggle("border-gray-800");
        
        let countryId = button.dataset.id;
        let country = countrys.find(country => country.id == countryId);
        if (country) {
            if (!savedCountries.includes(country)) {
                savedCountries.push(country);
            } 
        }
        let count = Number(savedCounts.textContent);
        
        if (button.classList.contains("bg-white")) {
            count += 1; 
        } else {
            count -= 1;
        }
        savedCounts.textContent = count;
    })
})