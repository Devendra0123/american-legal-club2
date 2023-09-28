const desc1 =
    "Are you overwhelmed by debt and afraid of getting sued by your creditors? American Legal Club specializes in creditor defense. We provide reliable access to pre-vetted attorneys at pre-negotiated rates. Our primary focus is ensuring you have robust legal support should you face legal actions from unsecured creditors.";
const desc2 =
    "American Legal Club was founded to bridge the gap between legal needs and affordable solutions. Our mission is to provide a specialized line of defense against unsecured creditors. Our network of pre-vetted, highly qualified attorneys is focused on creditor defense to help you navigate the challenges of legal actions against you.";
const missionText =
    "Our mission is to revolutionize the way people think about legal help. We believe that everyone should have the means to understand and protect their rights, particularly when it comes to financial wellness and creditor defense.";

function renderAboutSection() {
    const myComponentContainer = document.getElementById('about-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="w-full bg-lightGray px-[20px] py-[50px] rounded-[5px] flex flex-col text-start">
        <div>
          <div class='w-max'>
          <h1 class="text-primaryBlue text-3xl font-[800]">
           <span class="text-primaryRed">About</span> American Legal Club
         </h1>
         <div class="w-[170px] h-[2px] rounded-[25px] bg-primaryRed" />
     </div>
        </div>
  
        <div class="w-full flex items-start justify-between gap-[50px] mt-[70px]">
          <div class="w-1/2 flex flex-col gap-[30px]">
            <p>${desc1}</p>
            <p>${desc2}</p>
  
            <div class="flex flex-col gap-[10px]">
              <h1 class="text-2xl font-[700]">Our Mission:</h1>
              <p>${missionText}</p>
            </div>
          </div>
  
          <div class="w-1/2">
            <img
              src="assets/heroImage.jpg"
              alt="mainImage"
              class="w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>
  
        <div class="mt-[20px]">
          <button class="bg-primaryRed text-white px-[15px] py-[6px] rounded-[10px] text-xl">
            Learn More
          </button>
        </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderAboutSection();