const data = [
    {
      icon: "assets/icon3.png",
      title: "Peace of Mind",
      description:
        "Legal complexities can be daunting. We provide you with a safety net of legal experts.",
    },
    {
      icon: "assets/icon4.png",
      title: "Cost-Efficiency",
      description:
        "Our members enjoy expert legal services at a fraction of traditional costs.",
    },
    {
      icon: "assets/icon5.png",
      title: "Expert Network",
      description:
        "Gain access to a curated network of lawyers who specialize in creditor defense and financial wellness..",
    },
    {
      icon: "assets/icon6.png",
      title: "What Sets Us Apart ?",
      description:
        "Unlike traditional legal firms, we operate on a subscription-based model, connecting you to our pre-vetted network of attorneys specializing in creditor defense and financial wellness.",
    },
  ];

function renderWhyChooseSection() {
    const myComponentContainer = document.getElementById('whyChoose-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="bg-lightGray flex flex-col items-center gap-[20px] p-[30px] rounded-lg mt-[50px]">
        <h1 class="text-3xl font-[900] text-center">
          Why Choose American Legal <br />
          Club <span class="text-primaryRed">?</span>
        </h1>
  
        <div>
        <div class="flex justify-center items-center gap-[20px]">
        <div class="flex flex-col gap-[30px]">
          <div class="bg-primaryBlue w-[280px] h-[300px] text-white flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl">
            <img src=${data[0].icon} alt="icon" class="w-[70px] h-[70px]" />
            <h1 class="text-primaryRed text-xl font-bold">${data[0].title}</h1>
            <p>${data[0].description}</p>
          </div>
          <div class="bg-white w-[280px] h-[300px] flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl">
            <img src=${data[1].icon} alt="icon" class="w-[70px] h-[70px]" />
            <h1 class="text-primaryRed text-xl font-bold">${data[1].title}</h1>
            <p>${data[1].description}</p>
        </div>
        </div>
        <div>
          <div class="bg-lightBlue w-[280px] h-[370px] flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl">
          <img src=${data[2].icon} alt="icon" class="w-[70px] h-[70px]" />
          <h1 class="text-primaryRed text-xl font-bold">${data[2].title}</h1>
          <p>${data[2].description}</p>
      </div>
        </div>
        <div>
          <div>
          <div class="bg-lightOrange w-[280px] h-[640px] text-xl flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl">
          <img src=${data[3].icon} alt="icon" class="w-[70px] h-[70px]" />
          <h1 class="text-primaryRed text-xl font-bold">${data[3].title}</h1>
          <p>${data[3].description}</p>
      </div>
        </div>
      </div>
        </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderWhyChooseSection();