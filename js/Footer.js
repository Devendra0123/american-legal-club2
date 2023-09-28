const copyRightText = "@2023 American Legal Club";

const footerLinks = [
    {
        name: "Terms and Conditions",
        link: "/",
    },
    {
        name: "About Us",
        link: "",
    },
    {
        name: "Services",
        link: "",
    },
    {
        name: "Help Center",
        link: "",
    },
    {
        name: "Workflow",
        link: "",
    },
    {
        name: "FAQs",
        link: "",
    },
    {
        name: "Contact Us",
        link: "",
    },
]

const languageOptions = [
    {
        name: "English",
    },
    {
        name: "Germany",
    },
    {
        name: "Spanish",
    },
];

function renderFooterSection() {
    const myComponentContainer = document.getElementById('footer-section');
    if (myComponentContainer) {
        const footerMenuItems = footerLinks?.length > 0 &&
            footerLinks.map((item, index) => `
        <li key=${index} class="text-lg">${item.name}</li>
        `).join("")

        const languageData = languageOptions?.length > 0 &&
            languageOptions.map((item, index) => `
          <option key=${index}>${item.name}</option>
          `
            ).join("")
        const htmlContent = `
        <div class='w-full flex flex-col items-center gap-[30px] bg-primaryBlue pt-[120px] pb-[100px] mt-[-40px]'>
        <div class="w-[90%] flex items-center text-white px-[40px]">
        <div>
          <img
            src="assets/logo.png"
            alt="logo"
            class="w-[170px] h-[170px] object-contain "
          />
        </div>
  
        <div class="grow flex flex-col items-center gap-[30px]">
          <div class="flex flex-col items-center gap-[10px]">
            <h1 class="text-xl font-bold">Subscribe to our newsletter</h1>
            <div class="bg-white flex items-center overflow-hidden rounded-[25px]">
            <div class="flex items-center gap-[5px] px-[10px]">
              <CiMail class="text-slate-500 font-bold text-lg" />
              <input
                type="email"
                placeholder="input your email"
                class="bg-transparent"
              />
            </div>
            <button class="bg-primaryRed text-lg text-white py-[6px] px-[15px] rounded-r-[25px]">
              Subscribe
            </button>
          </div>
          </div>
  
          <ul class="flex items-center gap-[30px]">
            ${footerMenuItems}
          </ul>
        </div>
      </div>
        <div class='w-[90%] h-[2px] rounded-[25px] bg-white ' />
       
        <div class="w-[85%] flex items-center justify-between text-white px-[50px] mt-[30px]">
        <select class="text-black rounded-lg p-[5px] text-[13px] outline-none">
         ${languageData}
        </select>
  
        <div class="flex items-center opacity-75">
          <p>${copyRightText}</p>
          <ul class="flex items-center gap-[20px] ml-[30px]">
            <li class="flex items-center"><BsDot /> Privacy</li>
            <li class="flex items-center"><BsDot />Terms</li>
            <li class="flex items-center"><BsDot />Sitemap</li>
          </ul>
        </div>
  
        <div class="flex items-center gap-[20px] text-2xl">
         
        </div>
      </div>
    </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderFooterSection();