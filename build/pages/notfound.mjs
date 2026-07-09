const body = `
<section class="hero bg-navy-grad !pb-20 !pt-24">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-blob b1"></div>
  <div class="hero-blob b2"></div>
  <div class="hero-blob b3"></div>
  <div class="container-site relative z-[1] text-center">
    <span class="hero-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-green inline-block"></span>&nbsp;Error 404</span>
    <h1 class="text-white text-[36px] md:text-[56px] mb-5">Page Not <span class="shimmer">Found</span></h1>
    <p class="text-white/75 text-lg max-w-lg mx-auto mb-10">The page you are looking for does not exist or may have been moved. Let&rsquo;s get you back on track.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="index.html" class="btn btn-primary">Back to Home <i class="bi bi-arrow-right"></i></a>
      <a href="contact.html" class="btn btn-outline">Contact Us</a>
    </div>
  </div>
</section>
`;

export default {
  file: '404.html',
  active: '',
  title: 'Page Not Found | KANGARO TECH',
  description: 'The page you are looking for could not be found.',
  body,
};
