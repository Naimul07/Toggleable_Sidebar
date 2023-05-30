document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
});

//Dynamically rendering elements
//Be able to generate the menu items from a JavaScript object

const menuItems = [
  { icon: 'bx bx-home-alt', name: 'Home', url: 'index.html' },
  { icon: 'bx bxs-calendar', name: 'Calendar', url: 'calendar.html' },
  { icon: 'bx bx-message-rounded-dots', name: 'Message', url: 'message.html' },
  { icon: 'bx bx-store', name: 'Project', url: 'project.html' },
  { icon: 'bx bxs-cog', name: 'Settings', url: 'settings.html' }
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
  // link.classList.toggle('active', item.url === currentURL || item.url === currentURL.split('#')[0]);

  link.appendChild(icon);
  link.appendChild(name);
  listItem.appendChild(link);
  menuContainer.appendChild(listItem);

});



//History api applied
class HistoryManager {
  back() {
    window.history.back();
  }
/* 
  backTo(n) {
    window.history.go(n);
  } */

  forward() {
    window.history.forward();
  }

  getHistory() {
    alert(window.history.length);
  }
}

// Usage
const historyManager = new HistoryManager();
function next() {
  historyManager.forward();    // Call the forward() method

}
function backward() {
  historyManager.back();       // Call the back() method
 
}


