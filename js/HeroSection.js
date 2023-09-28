
function renderHeroSection() {
    const myComponentContainer = document.getElementById('hero-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="relative w-full h-[85vh] flex justify-center">
        <img
          src="assets/heroImage.jpg"
          alt="heroImage"
          class="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[-1]"
        />
        <div class="w-max absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-primaryRed/10 p-[20px] rounded-[5px]">
          <h1
            style={{
              lineHeight: "1.5",
            }}
            class="text-4xl font-[800]"
          >
            <span class="text-primaryRed">Secure Your Peace of Mind</span>
            with Legal Support <br />
            That Stands Between You and Your
            <br /> Unsecured Creditors
          </h1>
        </div>
  
        <div class="absolute bottom-[70px] right-[20px] transform translate-y-[100%]">
          <div class="w-[350px] bg-primaryBlue/75 text-white text-xl font-bold relative p-[20px] rounded-[10px]">
          <div class="triangle" />
        <p>
        At American Legal Club, we offer unparalleled legal support through a network of seasoned attorneys, all at a pre-negotiated, affordable monthly rate. Get peace of mind today!
            </p>
      </div>
        </div>
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderHeroSection();