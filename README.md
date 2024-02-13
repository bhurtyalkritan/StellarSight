# StellarSight

## Introduction
This document provides setup and usage instructions for the Infinite Starfield project, an interactive web-based visualization that simulates an infinite starfield with moving stars and planets. Users can navigate the visualization by dragging to pan and using the mouse wheel to zoom in and out.

## Project Structure
The project consists of two main files:

- `index.html`: The HTML document that hosts the canvas on which the starfield is rendered.
- `starfield.js`: The JavaScript file that contains the logic for generating and animating the stars and planets, handling user inputs, and dynamically resizing the canvas.

## Setup Instructions

### HTML Setup
Include the following HTML code in your `index.html` file to set up the canvas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Infinite Starfield</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>
<canvas id="starfield"></canvas>
<script src="starfield.js"></script>
</body>
</html>```

## JavaScript Setup

The `starfield.js` script is responsible for creating the starfield effect. This script initializes the canvas, sets up event listeners for user interactions like resizing the window, panning with the mouse, and zooming with the mouse wheel. It also contains functions for generating and drawing stars and planets on the canvas.

## Usage

To use the Infinite Starfield visualization:

1. Open `index.html` in a web browser.
2. Click and drag the mouse to pan across the starfield.
3. Scroll with the mouse wheel to zoom in and out of the starfield.
4. Observe how the canvas automatically adjusts its size when the browser window is resized.

## Customization

You can customize the appearance and behavior of the starfield by modifying `starfield.js`. For example, you can change:

- The number of stars and planets generated.
- The size range for stars and planets.
- The color of planets by adjusting their hue, saturation, and lightness values.

## Contributing

We welcome contributions from everyone! If you're interested in helping improve the Infinite Starfield project, here are some ways you can contribute:

### Reporting Bugs

- Open an issue on GitHub describing the bug.
- Include details about how to reproduce the bug, and if possible, include screenshots or error messages.

### Suggesting Enhancements

- Have an idea to make Infinite Starfield better? Open an issue on our GitHub page with your suggestions.

### Submitting Changes

- Fork the repository on GitHub.
- Create a new branch for your changes.
- Make your changes and commit them with clear and concise commit messages.
- Push your changes to your fork and submit a pull request to the main Infinite Starfield repository.
- In your pull request, describe the changes you've made and any testing you've done.

### Getting Started

Not sure where to start? Look for open issues labeled `good first issue` or `help wanted`. These are great for getting familiar with the project and making your first contribution.

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. Your pull request will be reviewed by the maintainers, and feedback will be given accordingly. Once approved, your pull request will be merged into the project.

Thank you for your interest in contributing to the Infinite Starfield project! Your efforts make this project better for everyone.
