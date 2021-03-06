const showcase = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', function () {
  addProject();
});

function addProject() {
  let displayProjects = projects.map((project) => {
    return `<div class = 'container-block container-before'>
        <a target = '_blank' href = '${project.url}'>
        <img alt = '${project.title}' src = '${project.img}'>
        <span class = 'description'>${project.title}</span>
            </a>
            </div>`;
  });
  displayProjects = displayProjects.join('');
  showcase.innerHTML = displayProjects;
}

const projects = [
  {
    title: 'Article Preview Component',
    url: 'https://article-preview-component-six.vercel.app/',
    img: 'article-preview-component/design/desktop-design.jpg',
  },
  {
    title: 'Fylo data storage component',
    url: 'https://fylo-data-storage-component-phi-three.vercel.app/',
    img: 'previews/fylo-component.jpg',
  },
  {
    title: 'Coding bootcamp testimonials slider',
    url: 'https://testimonials-slider-sand.vercel.app/',
    img: 'previews/testimonials-slider.jpg',
  },
  {
    title: 'Four card feature section',
    url: 'https://four-card-feature-section-ten-orpin.vercel.app/',
    img: 'previews/four-card.jpg',
  },
  {
    title: 'Base Apparel coming soon page',
    url: 'https://coming-soon-frontendmentor.vercel.app/',
    img: 'previews/coming-soon.jpg',
  },
  {
    title: 'Intro component with sign-up form',
    url: 'https://intro-component-with-signup-form-eta.vercel.app/',
    img: 'previews/intro-sign-up.jpg',
  },
  {
    title: 'Single price grid component',
    url: 'https://single-price-component-livid.vercel.app/',
    img: 'previews/price-grid.jpg',
  },
  {
    title: 'Ping single column coming soon page',
    url: 'https://ping-coming-soon-page-git-master.alihany.vercel.app/',
    img: 'previews/ping-single.jpg',
  },
  {
    title: 'Huddle landing page with feature blocks',
    url: 'https://huddle-landing-page-phi-azure.vercel.app/',
    img: 'previews/huddle-feature.jpg',
  },
  {
    title: 'Huddle landing page with introductory',
    url: 'https://huddle-landing-page-single-page.vercel.app/',
    img: 'previews/huddle-single.jpg',
  },
  {
    title: 'Fylo page with two column layout',
    url: 'https://fylo-landing-page-pi-sooty.vercel.app/',
    img: 'previews/fylo-two-columns.jpg',
  },
  {
    title: 'Dashboard with theme switcher',
    url: 'https://social-media-dashboard-lovat.vercel.app/',
    img: 'previews/dashboard.jpg',
  },
  {
    title: 'Insure landing page',
    url: 'https://insure-landing-page-dun-nine.vercel.app/',
    img: 'previews/insure-landing-page.jpg',
  },
  {
    title: 'Pricing component with toggle',
    url: 'https://pricing-component-orpin.vercel.app/',
    img: 'previews/pricing-component.jpg',
  },
  {
    title: 'Project tracking intro component',
    url: 'https://project-tracking-intro-iota.vercel.app/',
    img: 'previews/project-track.jpg',
  },
  {
    title: 'Clipboard landing page',
    url: 'https://clipboard-landing-page-wine.vercel.app/',
    img: 'previews/clipboard-landing.jpg',
  },
  {
    title: 'Fylo dark theme landing page',
    url: 'https://fylo-dark-theme-landing-page-sooty.vercel.app/',
    img: 'previews/fylo-dark.jpg',
  },
];
