export const userInfo = {
  firstName: "Penelope",
  lastName: "Park",
  age: 30,

  socialLinks: {
    facebook: "https://www.facebook.com/penelope.park",
    twitter: "https://twitter.com/penelope_park",
    linkedin: "https://www.linkedin.com/in/penelope-park",
  },
  contactInfo: {
    email: "penelope@parkshere.com",
    phone: "555-555-5555",
    address: {
      street: "123 Park Ave",
      city: "Park City",
      state: "California",
      zip: "12345",
    },
  },
  education: [
    {
      school: "Park University",
      degree: "Bachelors of Science",
      major: "Park Design",
      year: 2008,
    },
    {
      school: "Park University",
      degree: "Masters of Science",
      major: "Park Management",
      year: 2010,
    },
  ],
  workHistory: [
    {
      company: "Park Place",
      title: "Park Manager",
      year: 2010,
      description: "Managed and designed a park.",
    },
  ],
};

const testimonials = [
  {
    quote: "Penelope is a great park designer and manager.",
    source: "John Doe",
    company: "Doe Design",
    year: 2010,
  },
  {
    quote:
      "Penelope once painted a rabbit so well that it looked like a real rabbit.",
    source: "Jane Doe",
    company: "Doe Design",
    year: 2010,
  },
  {
    quote:
      "Penelope made a porcelain dragon so fancy that I never wanted to eat it.",
    source: "John Deer",
    company: "Deer Parks",
    year: 2010,
  },
  {
    quote:
      "Penelope once made a park so beautiful that I never wanted to leave.",
    source: "Jane Deer",
    company: "Deer Parks",
    year: 2010,
  },
];

function attachEducation() {
  const educationDiv = document.querySelector("#user-education");
  educationDiv.innerHTML = `<h2> Education </h2>`;
  userInfo.education.forEach((education) => {
    educationDiv.innerHTML += `
        <div class="education">
            <p>${education.school}</p>
            <p>${education.degree}</p>
            <p>${education.major}</p>
            <p>${education.year}</p>
        </div>
        `;
  });
}

function attachTestimonials() {
  const testimonialsDiv = document.querySelector("#user-testimonials");
  testimonialsDiv.innerHTML = `<h2> Testimonials </h2>`;
  testimonials.forEach((testimonial) => {
    testimonialsDiv.innerHTML += `
            <p>${testimonial.quote}</p>
            <p>${testimonial.source}</p>
            <p>${testimonial.company}</p>
            <p>${testimonial.year}</p>
        `;
  });
}

function attachUserInfo() {
  const userInfoDiv = document.querySelector("#user-contact");
    userInfoDiv.innerHTML = `<h2> Contact </h2>`;
    userInfoDiv.innerHTML += `
        <p>${userInfo.contactInfo.email}</p>
        <p>${userInfo.contactInfo.phone}</p>
        <p>${userInfo.contactInfo.address.street}</p>
        <p>${userInfo.contactInfo.address.city}</p>
        <p>${userInfo.contactInfo.address.state}</p>
        <p>${userInfo.contactInfo.address.zip}</p>
        
        
        `;


}

// attachEducation();
// attachUserInfo();
