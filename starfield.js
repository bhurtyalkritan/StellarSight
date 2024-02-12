
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}


resizeCanvas();
window.addEventListener('resize', resizeCanvas);


let stars = [];
let planets = [];


let offsetX = 0, offsetY = 0;
let scale = 1;


function generateStar(visibleLeft, visibleRight, visibleTop, visibleBottom) {
  return {
    x: Math.random() * (visibleRight - visibleLeft) + visibleLeft,
    y: Math.random() * (visibleBottom - visibleTop) + visibleTop,
    size: Math.random() * 1.5 
  };
}

// Generate a single planet
function generatePlanet(visibleLeft, visibleRight, visibleTop, visibleBottom) {
  return {
    x: Math.random() * (visibleRight - visibleLeft) + visibleLeft,
    y: Math.random() * (visibleBottom - visibleTop) + visibleTop,
    size: Math.random() * 5 + 3, // Size range between 3 and 8
    color: `hsl(${Math.random() * 360}, 100%, 50%)` // Random hue, full saturation, 50% lightness
  };
}

// Function to generate stars and planets within the current viewport
function generateObjectsInView() {
  const visibleLeft = -offsetX / scale;
  const visibleTop = -offsetY / scale;
  const visibleRight = visibleLeft + window.innerWidth / scale;
  const visibleBottom = visibleTop + window.innerHeight / scale;

  // Generate stars if needed, with a higher density
  const maxStars = 2000; // Maximum number of stars
  while (stars.length < maxStars) {
    stars.push(generateStar(visibleLeft, visibleRight, visibleTop, visibleBottom));
  }

  // Generate planets if needed, with a much lower density
  const maxPlanets = 50; // Maximum number of planets
  while (planets.length < maxPlanets) {
    planets.push(generatePlanet(visibleLeft, visibleRight, visibleTop, visibleBottom));
  }

  // Remove stars and planets that are too far outside of the visible area for performance
  const buffer = 100; // Buffer area outside the visible area where objects are allowed to exist
  stars = stars.filter(star => star.x >= visibleLeft - buffer && star.x <= visibleRight + buffer &&
                               star.y >= visibleTop - buffer && star.y <= visibleBottom + buffer);
  planets = planets.filter(planet => planet.x >= visibleLeft - buffer && planet.x <= visibleRight + buffer &&
                                     planet.y >= visibleTop - buffer && planet.y <= visibleBottom + buffer);
}


function draw() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
  ctx.fillStyle = 'black';
  ctx.fillRect(-offsetX / scale, -offsetY / scale, canvas.width / scale, canvas.height / scale);

  generateObjectsInView();

  stars.forEach(star => {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  planets.forEach(planet => {
    ctx.fillStyle = 'orange'; 
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.size, 0, Math.PI * 2);
    ctx.fill();
  });
}


canvas.addEventListener('mousedown', () => {
  function onMouseMove(e) {
    offsetX += e.movementX;
    offsetY += e.movementY;
    draw(); 
  }
  
  canvas.addEventListener('mousemove', onMouseMove);
  
  canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', onMouseMove);
  }, { once: true });
});

canvas.addEventListener('wheel', (e) => {
  const zoomIntensity = 0.01;
  const wheelDelta = e.deltaY;
  const zoom = Math.exp(wheelDelta * zoomIntensity);
  scale *= zoom;
  scale = Math.min(Math.max(0.1, scale), 4); 
  draw(); 
});


function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();
