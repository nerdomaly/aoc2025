# Advent of Code 2025

This project is set up to solve the Advent of Code 2025 puzzles using TypeScript.

## Project Structure

- `src/`: This directory contains the source code for each day's puzzle.
  - `day01/`: Each day has its own directory.
    - `index.ts`: The main TypeScript file for the day's puzzle.
    - `input.txt`: The puzzle input for the day.

## How to Use

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a new day's folder:**
   Copy the `src/day01` directory to a new directory for the current day (e.g., `src/day02`).

3. **Add puzzle input:**
   Paste your puzzle input into the `input.txt` file for the corresponding day.

4. **Run the code:**
   To run the code for a specific day, use the `npm run dev` script followed by the day number:
   ```bash
   npm run dev -- 1
   ```
   Replace `1` with the day you want to run.

5. **Build the project:**
   To compile all TypeScript files to JavaScript, run:
   ```bash
   npm run build
   ```
   The compiled files will be in the `dist/` directory.
