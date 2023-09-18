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
const servicesList = document.querySelector('.services');
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
      <p>Subject: ${serviceInput.value}</p>
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
    title: 'Commercial Cleaning',
    info: `Are you looking for quality regular cleaning services for your offices, retail stores,
    restaurants, or any industrial facilities.?  Don’t look any further, A-Z Fellas cleaning
    services has an experienced team of cleaners to provide high-quality services with
    attention to detail and an unbeatable customer experience. We offer tailored packages
    to suit your budget and requirements, ensuring that your workspace is always clean and tidy.`,
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image2.jpeg',
    title: 'Domestic cleaning',
    info: `A-Z Fellas cleaning services has an experienced team of cleaners to provide high-quality
    services for your residence and living spaces. We aim to maintain a clean and
    comfortable environment for you and your family, covering tasks like house cleaning,
    vacuuming, kitchen, and bathroom cleaning and all personalized to meet the specific
    needs and preferences of individual households.`,
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image3.jpeg',
    title: 'Move In/Out Cleaning',
    info: `Moving into a new home is an exciting experience, but it can also be a stressful one.
    From packing and unpacking to cleaning and organizing, there’s a lot to do before you
    can settle in. We use techniques to get your home clean quickly and efficiently, leaving
    you with one less thing to worry about.`,
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image4.jpeg',
    title: 'Deep Cleaning',
    info: `Deep cleaning involves using specialized tools and techniques to reach the nooks and
    crannies that are not usually reached during regular cleaning. Every individual spends
    about one-third of their life indoors, so deep cleaning your home is one of the best ways
    to make sure that your family is breathing easy and staying safe in their home.`,
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image5.jpeg',
    title: 'Mold removing',
    info: `Our team of experienced professionals specializes in safely identifying the leads to the
    mold and then isolating these affected areas, then move on to remove the mold clean
    the disinfect the affected area and surrounding surfaces to prevent mold from
    returning. Finally preventing these areas from mold by addressing the underlying
    causes of mold growth.`,
  },
  {
    price: '$200-$1000',
    imagePath: 'utils/gallary/image5.jpeg',
    title: 'Garden maintenance',
    info: `Garden maintenance is essential to ensure that outdoor spaces remain beautiful and
    functional throughout the year. Our team of expertise will take care and upkeep of your
    garden or outdoor space to keep it healthy, attractive, and functional. We provide lawn
    care, pruning &amp; trimming, weeding, planting and transplanting, seasonal clean-up,
    design and renovation.`,
  },
];

let elements = '';
services.forEach((item) => {
  elements += `
  <div class="service-item">
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

servicesList.innerHTML = elements;

const showInfo = (e) => {
  const parentElement = e.closest('.service-item');
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
