# Mortgage Calculator Aura Component

## Overview

This Salesforce Aura component is a Mortgage Calculator that allows users to calculate their monthly mortgage payments based on the loan amount, interest rate, and loan term. It also includes a Pie Chart visualization to provide a graphical representation of the mortgage breakdown.

## Features

- Calculate monthly mortgage payments.
- Visualize the mortgage breakdown with a Pie Chart.
- Easily configurable and customizable within Salesforce.

## Installation

To install this Aura Component in your Salesforce organization, follow these steps:

1. Clone this repository or download the source code.

2. Use the Salesforce CLI (SFDX) to deploy the Aura Component to your Salesforce org.

```bash
sfdx force:source:deploy -p path/to/source
```

3. Add the Aura Component to your Lightning App or Page.

## Usage

1. Navigate to the Lightning App or Page where you want to add the Mortgage Calculator.

2. Add the Mortgage Calculator Aura `Main.app` to the page layout.

3. Configure the component properties as needed, such as setting the default loan amount, interest rate, and loan term.

4. Save the changes to the page layout.

5. Access the page with the Mortgage Calculator, and users can start using it to calculate mortgage payments.

## Configuration

You can customize the Mortgage Calculator Aura Component by modifying its attributes. To do this, open the component in Salesforce Lightning App Builder, and adjust the following attributes:

- `loanAmount`: The default loan amount.
- `interestRate`: The default interest rate.
- `loanTerm`: The default loan term (in years).

## Pie Chart Visualization

The Pie Chart visualization provides a graphical representation of the mortgage breakdown, showing the proportion of principal and interest in each monthly payment.

## Issues

If you encounter any issues or have suggestions for improvement, please open an issue on this GitHub repository.

## License

This Mortgage Calculator Aura Component is released under the MIT License - see the [LICENSE](LICENSE) file for

