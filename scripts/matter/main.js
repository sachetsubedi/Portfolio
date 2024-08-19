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

// Create two bodies (ball and box)
const ball = Bodies.circle(300, 200, 40, {
  restitution: 0.9, // Bouncy ball
  render: {
    fillStyle: "blue",
  },
});

const box = Bodies.rectangle(500, 200, 80, 80, {
  restitution: 0.7, // Some bounce
  render: {
    fillStyle: "red",
  },
});

// Add ground
const ground = Bodies.rectangle(400, 590, 810, 30, {
  isStatic: true,
  render: {
    fillStyle: "transparent",
  },
});

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
Composite.add(engine.world, [
  ball,
  box,
  bottomWall,
  leftWall,
  rightWall,
  topWall,
]);

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
