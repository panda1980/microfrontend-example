#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Array of application directories
apps=("menu-app" "header-app" "footer-app" "main-app")

# Loop through each app, build it, and start the preview server in a screen session
for index in "${!apps[@]}"
do
  app="${apps[$index]}"
  (
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

    # Start the preview server in a new screen session
    screen_name="preview_$app"
    echo "Starting preview for $app in screen session '$screen_name'"
    screen -dmS "$screen_name" bun run preview

    # Navigate back to the root directory
    cd ..

    echo "Preview for $app is running in screen session '$screen_name'"
    echo "------------------------------"
  )
done

echo "All applications are running in their respective screen sessions."
echo "Use 'screen -ls' to view running sessions and 'screen -r <session_name>' to reattach."
