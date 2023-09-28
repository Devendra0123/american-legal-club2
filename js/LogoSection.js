const address = "XXXXXXXXX, USA"
const contact = "+01-xxxxxxxx"

function renderLogoSection() {
    const myComponentContainer = document.getElementById('logo-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="px-[50px] py-[20px] w-full flex items-center justify-between">
        <div>
          <img src="assets/logo.png" alt="logo" class="w-[150px] object-contain" />
        </div>
  
        <div class="flex items-start gap-[50px] mr-[100px]">
          <div class="flex flex-col items-center gap-[10px] max-w-[150px]">
            <p>Address: ${address}</p>
          </div>
  
          <div class="flex flex-col items-center gap-[10px] max-w-[120px]">
            <p>${contact}</p>
          </div>
        </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderLogoSection();