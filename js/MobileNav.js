//const emailId = "AmericanLegalClub@gmail.com"

function renderMobileNavSection() {
    const myComponentContainer = document.getElementById('mobileNav-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="w-full flex flex-col">
          <div class="w-full text-white bg-primaryBlue w-full px-[50px] py-[10px] flex items-center justify-between">
            <div>
              <a href={mailto:${emailId}}>${emailId}</a>
            </div>
          </div>

       <div class="p-[20px] w-full flex items-center justify-between">
        <div>
          <img src="assets/logo.png" alt="logo" class="w-[150px] object-contain" />
        </div>
    
       <div  class="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-primaryBlue text-white text-lg">
        <i class="fa-solid fa-bars"></i>
       </div>
       </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderMobileNavSection();