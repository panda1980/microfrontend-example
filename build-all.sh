#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Array of application directories
apps=("menu-app" "header-app" "footer-app" "main-app")
pids=()

# Loop through each app, build it, and start the preview server
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

    # Start the preview server on the assigned port
    echo "Starting preview for $app "
    bun run preview &

    # Capture the PID of the preview process
    preview_pid=$!
    pids+=($preview_pid)

    # Navigate back to the root directory
    cd ..

    echo "Preview for $app is running"
    echo "------------------------------"
  )
done