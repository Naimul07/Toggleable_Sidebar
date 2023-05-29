document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("active");
});

//Dynamically rendering elements
//Be able to generate the menu items from a JavaScript object
/* const menuItems = [
    { icon: 'bx bxs-calendar', name: 'Calendar', url: '#' },
    { icon: 'bx bx-message-rounded-dots', name: 'Added dynamically', url: '#' },
    { icon: 'bx bx-store', name: 'Project', url: '#' },
  ];
  
  const menuContainer = document.getElementById('menuItems');
  
  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');
    const name = document.createElement('span');
  
    icon.className = item.icon;
    name.className = 'link_name';
    name.textContent = item.name;
    link.href = item.url;
  
    link.appendChild(icon);
    link.appendChild(name);
    listItem.appendChild(link);
    menuContainer.appendChild(listItem);
  });
   */
 /*  const menuItems = [
    { icon: 'bx bx-home-alt', name: 'Home', url: '#' },
    { icon: 'bx bxs-calendar', name: 'Calendar', url: '#' },
    { icon: 'bx bx-message-rounded-dots', name: 'Message', url: '#' },
    { icon: 'bx bx-store', name: 'Project', url: '#' },
    { icon: 'bx bxs-cog', name: 'Settings', url: '#' }
  ];
  
  const menuContainer = document.getElementById('menuItems');
  const currentURL = window.location.href;
  
  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');
    const name = document.createElement('span');
  
    icon.className = item.icon;
    name.className = 'link_name';
    name.textContent = item.name;
    link.href = item.url;
    link.classList.toggle('active', item.url === currentURL);
  
    link.appendChild(icon);
    link.appendChild(name);
    listItem.appendChild(link);
    menuContainer.appendChild(listItem);
  
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetURL = event.target.href;
      navigateTo(targetURL);
    });
  });
  
  function navigateTo(url) {
    history.pushState(null, null, url);
    // Perform additional actions based on the URL navigation
  }
   */
  const menuItems = [
    { icon: 'bx bx-home-alt', name: 'Home', url: '#' },
    { icon: 'bx bxs-calendar', name: 'Calendar', url: '#calendar' },
    { icon: 'bx bx-message-rounded-dots', name: 'Message', url: '#message' },
    { icon: 'bx bx-store', name: 'Project', url: '#project' },
    { icon: 'bx bxs-cog', name: 'Settings', url: '#settings' }
  ];
  
  const menuContainer = document.getElementById('menuItems');
  const currentURL = window.location.href;
  
  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');
    const name = document.createElement('span');
  
    icon.className = item.icon;
    name.className = 'link_name';
    name.textContent = item.name;
    link.href = item.url;
    link.classList.toggle('active', item.url === currentURL || item.url === currentURL.split('#')[0]);
  
    link.appendChild(icon);
    link.appendChild(name);
    listItem.appendChild(link);
    menuContainer.appendChild(listItem);
  
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetURL = event.target.href;
      navigateTo(targetURL);
    });
  });
  
  function navigateTo(url) {
    history.pushState(null, null, url);
    handleMenuSelection(url);
  }
  
  function handleMenuSelection(url) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.classList.toggle('active', link.href === url || link.href === url.split('#')[0]);
    });
  }
  
  window.addEventListener('popstate', () => {
    handleMenuSelection(window.location.href);
  });
  