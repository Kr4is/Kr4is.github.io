AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI based Software Developer",
    cardImage: "assets/images/experience-page/cinfo.jpeg",
    place: "Cinfo",
    time: "(May, 2020 - present)",
    desp: "<li>Development AI based applications for realtime broadcasting.</li> <li>C, C++, Python, CMake, Ffmpeg, OpenCV, GitFlow, Cuda, Keras, PyTorch, Docker, MlFlow.</li>",
  },
  {
    title: "Java Developer",
    cardImage: "assets/images/experience-page/sopra-steria.jpeg",
    place: "Sopra Steria",
    time: "(Sep, 18 - Sep, 19)",
    desp: "<li>Development trafic control applications for the Paris metro for RATP.</li><li>Java, Spring, RabbitMQ, Python, MongoDB, PostgreSQL, OpenGL, Git, Jenkins.</li>",
  },
  {
    title: "Curricular Intern",
    cardImage: "assets/images/experience-page/oesia-networks.png",
    place: "Oesia Networks",
    time: "(Feb - May, 18)",
    desp:"<li>Cloud platforms study and Internet of Things (IOT).</li><li>Amazon Web Services, Microsoft Azure, Google Cloud Platform, Python, Raspberry Pi.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "FOSDEM",
    cardImage: "assets/images/experience-page/fosdem.png",
    description:
      "Attendant to the different talks and workshops of the event and to the waffle tasting in the city of Brussels.",
  },
  {
    title: "GPUL Labs",
    cardImage: "assets/images/experience-page/gpul-labs.jpeg",
    description:
      "Organizer of activities such as workshops and talks on new technologies for people with advanced knowledge in them. ",
  },
  {
    title: "GPUL School",
    cardImage: "assets/images/experience-page/gpul-school.png",
    description:
      "Organizer and mentor of activities such as workshops and introductory talks on technologies necessary for the newest people in the world of informatics .",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hackathiño mobilidade sostible",
    subtitle: "Mentor",
    image: "assets/images/experience-page/hackathon-mobilidade.jpg",
    desp: "I was responsible for guiding the hackathon participants on the different stages and processes to be carried out during the event.",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
