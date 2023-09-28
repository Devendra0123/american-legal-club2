const emailId = "AmericanLegalClub@gmail.com"

function renderFollowSection() {
    const myComponentContainer = document.getElementById('follow-section');
    if (myComponentContainer) {
        // Load the content of MyComponent.html directly
        const htmlContent = `
        <div class="text-white bg-primaryBlue w-full px-[50px] py-[10px] flex items-center justify-between">
        <div>
          <a href={mailto:${emailId}}>${emailId}</a>
        </div>

    
      </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderFollowSection();