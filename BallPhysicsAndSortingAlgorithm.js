let balls = [];
let diameter = 30;
let amountOfBalls = 10;
let enlargement = 15;
let behaviour = true;
let offset = 35;
let amountSlider;
let startButton;
let hasSetupAccured;
let simulationRunning;
let simulationIndex = 0;
let bars = [];
let barWidth = 10;
let sortIndex = 0;
let highlightBar;

function setup() {
  createCanvas(550, 550);
  amountSlider = createSlider(0, 9);
  enlargementSlider = createSlider(0, 30);
  behaviourButton = createButton("behaviour");
  behaviourButton.mousePressed(() => {
    behaviour = !behaviour;
  });
  startButton = createButton("start");
  startButton.mousePressed(() => {
    simulationRunning = !simulationRunning;
    hasSetupAccured = false;
  });
  simulationIndexButton = createButton("switch simulation");
  simulationIndexButton.mousePressed(() => {
    if (simulationIndex < 1) {
      simulationIndex++;
    } else {
      simulationIndex = 0;
    }
  });
}

function draw() {
  background(220);
  if (simulationIndex === 0) {
    fill(240);
    circle(width / 2, height / 2, height * 0.9);
    fill(0);
    text("Amount: " + (amountSlider.value() + 1).toString(), 0, height - 5);
    text(
      "Enlargement: " + enlargementSlider.value().toString(),
      140,
      height - 5
    );
    if (behaviour) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    square(267, height - 10, 10);
  } else if (simulationIndex === 1) {
    for (let i = 0; i < bars.length; i++) {
      fill(240);
      if (i === highlightBar) {
        fill(255, 0, 0);
      }
      if (i === highlightBar + 1) {
        fill(0, 255, 0);
      }
      if (i === sortIndex) {
        fill(255, 255, 50);
      }
      rect(width * 0.1 + i * barWidth, height * 0.8, barWidth, -bars[i] * 10);
    }
  }

  if (simulationRunning && simulationIndex === 0) {
    ballSimulation();
  } else if (simulationRunning && simulationIndex === 1) {
    sortingAlgorithms();
  }
}
function checkCollisions() {
  for (let ball of balls) {
    if (
      sqrt(
        (width / 2 - ball.position.x) * (width / 2 - ball.position.x) +
          (height / 2 - ball.position.y) * (height / 2 - ball.position.y)
      ) >=
      height * 0.45 - ball.diameter / 2
    ) {
      if (ball.diameter >= height * 0.9 - enlargement) {
        ball.position.x = width / 2;
        ball.position.y = height / 2;
        ball.diameter = height * 0.9;
      } else {
        let lot = createVector(
          -(width / 2 - ball.position.x) /
            sqrt(
              (width / 2 - ball.position.x) * (width / 2 - ball.position.x) +
                (height / 2 - ball.position.y) * (height / 2 - ball.position.y)
            ),
          -(height / 2 - ball.position.y) /
            sqrt(
              (width / 2 - ball.position.x) * (width / 2 - ball.position.x) +
                (height / 2 - ball.position.y) * (height / 2 - ball.position.y)
            )
        );

        let dx = ball.velocity.x;
        let dy = ball.velocity.y;

        ball.velocity.x = dx - lot.x * 2 * (dx * lot.x + dy * lot.y);
        ball.velocity.y = dy - lot.y * 2 * (dx * lot.x + dy * lot.y);

        ball.color = createVector(
          Math.random() * 255,
          Math.random() * 255,
          Math.random() * 255
        );

        ball.diameter += enlargement;

        ball.position.x -= lot.x * enlargement;
        ball.position.y -= lot.y * enlargement;
      }
    }
  }
}
function ballSimulation() {
  if (!hasSetupAccured) {
    ballSimulationSetup();
    hasSetupAccured = true;
  }
  checkCollisions();

  for (let ball of balls) {
    ball.show();
    ball.update();
  }
}

function ballSimulationSetup() {
  amountOfBalls = amountSlider.value();
  enlargement = enlargementSlider.value();
  balls = [];
  if (behaviour) {
    for (let i = -amountOfBalls / 2; i <= amountOfBalls / 2; i++) {
      balls[i + amountOfBalls / 2] = new ball(
        width / 2 + i * offset,
        height / 2,
        diameter
      );
      balls[i + amountOfBalls / 2].velocity = createVector(0, 0);
    }
  } else {
    for (let i = 0; i < amountOfBalls; i++) {
      balls[i] = new ball(width / 2, height / 2, diameter);
    }
  }
}

function sortingAlgorithms() {
  if (!hasSetupAccured) {
    sortingAlgorithmsSetup();
    hasSetupAccured = true;
  }
  if (bars[sortIndex] > bars[sortIndex + 1]) {
    let value = bars[sortIndex];
    bars[sortIndex] = bars[sortIndex + 1];
    bars[sortIndex + 1] = value;
    highlightBar = sortIndex;
  }
  if (sortIndex >= bars.length) {
    sortIndex = 0;
  } else {
    sortIndex++;
  }
}

function sortingAlgorithmsSetup() {
  bars = [];
  for (let i = 1; i < amountSlider.value() * 4 + 1; i++) {
    bars[i - 1] = i;
  }
  for (let i = 0; i < 100; i++) {
    let r1 = int(Math.random() * amountSlider.value() * 4);
    let value = bars[r1];
    let r2 = int(Math.random() * amountSlider.value() * 4);
    bars[r1] = bars[r2];
    bars[r2] = value;
  }
}
