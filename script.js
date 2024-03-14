
// JavaScript to add necessary classes and styles for marquee
document.addEventListener('DOMContentLoaded', function () {
    const marqueeContainer = document.querySelector('.marquee-container');
    const marquee = document.querySelector('.marquee');
    const marqueeItems = document.querySelectorAll('.marquee-item');
  
    // Calculate total width of marquee
    let totalWidth = 0;
    marqueeItems.forEach(item => {
      totalWidth += item.offsetWidth;
    });
    marquee.style.width = totalWidth + 'px';
  
    // Clone images to create an infinite loop
    marqueeItems.forEach(item => {
      const clone = item.cloneNode(true);
      marquee.appendChild(clone);
    });
  });
  



  // counter 



  document.addEventListener('DOMContentLoaded', function () {
    const countupConfigs = [
      { end: 500 , targetElementId: 'countup1' },
      { end: 600, targetElementId: 'countup2' },
      { end: 200, targetElementId: 'countup3' }
    ];
    const duration = 2000; // 1 second
  
    function countUp(config) {
      const { end, targetElementId } = config;
      const targetElement = document.getElementById(targetElementId);
      const stepCount = end; // Adjusted for end value
      let count = 0;
      const interval = setInterval(() => {
        count++;
        targetElement.textContent = count;
        if (count >= stepCount) {
          clearInterval(interval);
        }
      }, duration / stepCount); // Adjusted for end value
    }
  
    function startCountUps(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('id');
          const config = countupConfigs.find(config => config.targetElementId === targetId);
          if (config) {
            countUp(config);
            observer.unobserve(entry.target);
          }
        }
      });
    }
  
    const observer = new IntersectionObserver(startCountUps, { threshold: 0.5 });
  
    document.querySelectorAll('.flex > div').forEach(div => {
      observer.observe(div);
    });
  });
  
