const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Events = Matter.Events,
  Bounds = Matter.Bounds;

// Create an engine
const engine = Engine.create();

// Create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight - 2,
    wireframes: false,
    background: "transparent",
  },
});

// Add all images to the world

for (let i = 0; i < skillsIcons.length; i++) {
  const img = Bodies.circle(300, 200, 30, {
    restitution: 0.5, // Bouncy ball
    render: {
      sprite: {
        texture: skillsIcons[i],
        xScale: 1,
        yScale: 1,
      },
    },
  });
  Composite.add(engine.world, img);
}

console.log(skillsIcons.length);

// Add invisible bounds (walls)
const wallThickness = 50;

const leftWall = Bodies.rectangle(
  -wallThickness / 2,
  window.innerHeight / 2,
  wallThickness,
  window.innerHeight,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);

const rightWall = Bodies.rectangle(
  window.innerWidth + wallThickness / 2,
  window.innerHeight / 2,
  wallThickness,
  window.innerHeight,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);

const topWall = Bodies.rectangle(
  window.innerWidth / 2,
  -wallThickness / 2,
  window.innerWidth,
  wallThickness,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);

const bottomWall = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight + wallThickness / 2,
  window.innerWidth,
  wallThickness,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);

// Add all bodies to the world
Composite.add(engine.world, [bottomWall, leftWall, rightWall, topWall]);

// Add mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
});

Composite.add(engine.world, mouseConstraint);

// Keep the mouse in sync with rendering
render.mouse = mouse;

// Run the engine
// Engine.run(engine);
Matter.Runner.run(engine);

// Run the renderer
Render.run(render);
