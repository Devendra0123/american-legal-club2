const servicesCardData = [
    {
      icon: "assets/law-icon.png",
      title: "Specialized Creditor Defense",
      description:
        "For a non-refundable monthly fee, secure your robust line of defense against unsecured creditors. This fee ensures your access to pre-vetted attorneys who specialize in creditor defense.",
    },
    {
      icon: "assets/person-icon.png",
      title: "Pre-Negotiated Rates With Top Lawyers",
      description:
        "Our network of attorneys are skilled in creditor defense and are available at rates you can afford.",
    },
  ];

function renderServicesSection() {
    const myComponentContainer = document.getElementById('services-section');
    if (myComponentContainer) {
        const cardItems = servicesCardData?.length > 0 &&
        servicesCardData.map((item, index) => `
          <div key=${index} class="w-[300px] h-[400px] bg-gray1 flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl">
            <img src=${item.icon} alt="icon" class="w-[70px] h-[70px]" />
            <h1 class="text-primaryRed text-xl font-bold">${item.title}</h1>
            <p>${item.description}</p>
          </div>
        `).join("")
        const htmlContent = `
        <div class="flex items-center gap-[20px] mt-[-50px]">
        <div>
          <button class="bg-primaryBlue p-[10px] rounded-[4px] text-white text-xl">
            Explore Services
          </button>
        </div>
  
        <div class="flex flex-col items-center border border-slate-300 shadow-xl rounded-lg p-[20px] bg-white">
          <div>
           <div class='w-max'>
             <h1 class="text-primaryBlue text-3xl font-[800]">
              <span class="text-primaryRed">Our</span> Services
             </h1>
           <div class="w-[100px] h-[2px] rounded-[25px] bg-primaryRed" />
          </div>
          <div class="flex items-center gap-[70px] mt-[50px]">
            ${cardItems}
          </div>
        </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderServicesSection();