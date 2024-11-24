#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Array of application directories
apps=("menu-app" "header-app" "footer-app" "main-app")

# Loop through each app and build it
for app in "${apps[@]}"
do
  echo "=============================="
  echo "Building $app..."
  echo "------------------------------"

  # Navigate to the app directory
  cd $app

  # Install dependencies
  echo "Installing dependencies for $app..."
  bun install

  # Build the application
  echo "Building $app..."
  bun run build

  # Navigate back to the root directory
  cd ..

  echo "Finished building $app."
  echo "------------------------------"
done

echo "=============================="
echo "All applications have been built successfully."
