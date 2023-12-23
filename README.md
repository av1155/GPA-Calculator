# GPA Calculator

This GPA Calculator is a command-line tool developed in JavaScript for
calculating a student's GPA for a semester, as well as an updated overall GPA
based on previous cumulative GPA and total credits.

## Installation

### Prerequisites

Before running this script, ensure you have Node.js installed on your system.
You can download and install Node.js from
[Node.js official website](https://nodejs.org/).

### Setup

1. **Clone the Repository**
   - Clone the project to your local machine.

   ```bash
   git clone https://github.com/av1155/GPA-Calculator.git
   ```

   - Navigate to the project directory:

   ```bash
   cd GPA-Calculator
   ```

   - Install Dependencies
     - Run the following command in the project directory to install the
       `readline-sync` package for handling command-line inputs.

     ```bash
     npm install
     ```

## Usage

To use the GPA Calculator, navigate to the directory containing the script and
run:

```bash
node index.js
```

Follow the on-screen prompts to enter the number of courses, along with the
details for each course (course name, grade, and credit hours).

After entering all courses, the script will calculate and display the GPA for
that semester.

## Calculating Overall GPA

The script also provides an option to calculate the updated overall GPA. When
prompted:

- Enter 'Y' (Yes) to proceed with this calculation.
- You will then need to enter your current overall GPA and the total number of
  credits earned so far.

The script will then calculate and display your updated overall GPA.

## Features

- **Semester GPA Calculation**: Calculates the GPA for the semester based on the
  courses, their respective grades, and credit hours.
- **Overall GPA Calculation**: (Optional) Calculates the updated overall GPA
  when provided with the current overall GPA and total credits earned so far.
- **Input Validation**: Ensures the input for GPA and credits is within a valid
  range and format.

## Note

- The GPA calculation is based on a standard 4.0 scale.
- The script expects grades to be entered in the format (e.g., A, B+, C-).
- Decimals in GPA input should be separated by a period (e.g., 3.75).
