# BallPhysicsAndSortingAlgorithmJavaScript

## This is a very simple ball Physics simulation:
![image](https://github.com/user-attachments/assets/c08975ba-ad9c-47f2-8772-8918b932d3ff)
## With an aditional visualisation of a sorting algorithm:
![image](https://github.com/user-attachments/assets/28b13301-9cfd-4226-9818-28906dd4bbfb)

## Environment
It is coded in Java Scrpit using the P5 library, wich you can download in most coding environments, or use the online editor at "https://editor.p5js.org".

## ball.js
This file defines a ball class, which models the behavior of a ball in a physics simulation. Key features include:

- Constructor: Initializes the ball with a position, random velocity, constant acceleration (gravity), diameter, radius, and random color.
- Update Method: Updates the ball's position and velocity based on its current velocity and acceleration.
- Show Method: Renders the ball on the screen using the p5.js library's fill and circle functions.

## BallPhysicsAndSortingAlgorithm.js
This file contains the main logic for running the ball physics simulation and a sorting algorithm visualization. Key components include:

- Global Variables:
  - Various settings and controls for the simulation, such as "balls", "diameter", "amountOfBalls", "enlargement", "behaviour", "offset", "amountSlider", "startButton", "hasSetupAccured", "simulationRunning", "simulationIndex", "bars", "barWidth", "sortIndex", "highlightBar".
- Setup Function:
  - Initializes the canvas and user interface elements (sliders, buttons) for controlling the simulation.
- Draw Function:
  - Continuously updates the canvas. Depending on the value of simulationIndex, it either runs the ball simulation or the sorting algorithm visualization.
- Ball Simulation Functions:
  - checkCollisions: Checks for collisions between the balls and the boundaries, adjusts their velocity and position accordingly, and changes their color and diameter upon collision.
  - ballSimulation: Manages the update and display of the balls, and calls the collision check function.
  - ballSimulationSetup: Initializes the balls for the simulation based on the current settings.
- Sorting Algorithm Functions:
  - sortingAlgorithms: Implements a simple sorting algorithm (likely bubble sort) that sorts an array of bars and highlights the bars being compared.
  - sortingAlgorithmsSetup: Initializes the array of bars to be sorted.
