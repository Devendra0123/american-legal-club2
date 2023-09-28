const navLinks = [
    {
        name: "Home",
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
        name: "Workflow",
        link: "",
    },
    {
        name: "Contact Us",
        link: "",
    },
    {
        name: "FAQs",
        link: "",
    },
];

function renderNavbarSection() {
    const myComponentContainer = document.getElementById('navbar-section');
    if (myComponentContainer) {
        const navItems = navLinks.map((item, index) => `
        <li key=${index}>
            ${item.name}
        </li>
    `).join('');
        const htmlContent = `
        <div class='bg-primaryBlue flex items-center justify-center text-white p-[15px]'>
            <ul class='flex items-center gap-[40px]'>
             ${navItems}
            </ul>
            </div>
        `;
        myComponentContainer.innerHTML = htmlContent;
    }
}

// Call the rendering function
renderNavbarSection();