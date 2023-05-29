document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("active");
});

//Dynamically rendering elements
//Be able to generate the menu items from a JavaScript object
const menuItems = [
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
  
