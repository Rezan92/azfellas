const slider = document.querySelector('.review-slider');
const leftArrow = document.querySelector('.review-left');
const rightArrow = document.querySelector('.review-right');
const controlList = document.querySelectorAll('.review-controls li');
const controlListParent = document.querySelector('.review-controls ul');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const serviceInput = document.querySelector('#service');
const messageInput = document.querySelector('#message');
const contactForm = document.querySelector('#contact-form');
const messageInfo = document.querySelector('.message-info');
const pricesList = document.querySelector('.prices');
let sectionIndex = 0;

const setIndex = (sectionIndex) => {
  const selectedList = document.querySelector('.review-controls .selected');
  selectedList?.classList.remove('selected');
  slider.style.transform = `translate(${sectionIndex * -100}%)`;
};

const navigateRight = () => {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 0;
  setIndex(sectionIndex);
  controlListParent.children[sectionIndex].classList.add('selected');
};

let intervalId = setInterval(navigateRight, 4000);

Array.from(controlList).forEach((li, i) => {
  li.addEventListener('click', () => {
    sectionIndex = i;
    setIndex(sectionIndex);
    li.classList.add('selected');
  });
});

rightArrow?.addEventListener('click', () => {
  clearInterval(intervalId);
  navigateRight();
  intervalId = setInterval(navigateRight, 4000);
});

leftArrow?.addEventListener('click', () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 2;
  setIndex(sectionIndex);
  controlListParent.children[sectionIndex].classList.add('selected');
});

const sendEmail = (event) => {
  event.preventDefault();
  Email.send({
    SecureToken : "69e0ff3e-7397-45e0-8304-8b1722ead3b9",
    To : 'a-z_fellas@outlook.com',
    From : "azfellas@gmail.com",
    Subject: serviceInput.value,
    Body: `
      <p>Name: ${nameInput.value}</p>
      <p>Phone: ${phoneInput.value}</p>
      <p>Email: ${emailInput.value}</p>
      <p>Message: ${messageInput.value}</p>
      `,
}).then((m) => {
    if (m === 'OK') {
      messageInfo?.classList.add('visible');
      contactForm.reset();
      setTimeout(() => {
        messageInfo?.classList.remove('visible');
      }, 6000);
    }
  });
};

const services = [
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image1.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image2.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image3.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image4.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image5.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image5.jpeg',
    title: 'image title here',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
];

let elements = '';
services.forEach((item) => {
  elements += `
  <div class="price-item">
  <h4>${item.price}</h4>
  <div class="image-container">
    <img src="${item.imagePath}" alt="" />
  </div>
  <h3 onclick="showInfo(this)">${item.title}</h3>
  <span onclick="showInfo(this)">Read More</span>
  <p>${item.info}</p>
</div>
  `;
});

pricesList.innerHTML = elements;

const showInfo = (e) => {
  const parentElement = e.closest('.price-item');
  const infoElement = parentElement.lastElementChild;
  const heightValue = infoElement.style.height;
  if (heightValue === '0px'|| heightValue === '') {
    infoElement.style.height = '100%';
    infoElement.style.padding = '1rem';
  } else {
    parentElement.addEventListener('click', () => {
      infoElement.style.height = '0';
      infoElement.style.padding = '0 1rem';
    });
  }

  infoElement.addEventListener('click', () => {
    infoElement.style.height = '0';
    infoElement.style.padding = '0 1rem';
  });
};
