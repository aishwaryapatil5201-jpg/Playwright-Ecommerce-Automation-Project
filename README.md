# Playwright E-Commerce Automation Project

## Project Overview

This project automates end-to-end test scenarios for an e-commerce application using Playwright with TypeScript. It follows the Page Object Model (POM) design pattern to improve code reusability, maintainability, and readability.

## Tech Stack

- **Programming Language:** TypeScript
- **Automation Tool:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Test Data Management:** Separate test data files
- **Reporting:** Playwright HTML Reporter
- **CI/CD:** GitHub Actions workflow

## Project Structure

```text
Playwright-Ecommerce-Automation-Project/
├── .github/
│   └── workflows/
├── fixtures/
│   └── basefixture.ts
├── pages/
│   ├── Loginpage.ts
│   ├── HomePage.ts
│   ├── ElectronicsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── ConfirmPage.ts
├── test-data/
│   └── checkoutData.ts
├── tests/
│   ├── login.spec.ts
│   ├── homepage.spec.ts
│   ├── electronics.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── confirm.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Automated Test Scenarios

- Login functionality
- Homepage navigation
- Electronics category navigation
- Product selection
- Add to Cart functionality
- Cart validation
- Checkout process
- Billing address submission
- Order confirmation

## Framework Features

- Page Object Model implementation
- Custom Playwright fixtures
- Reusable page objects
- Data-driven testing
- Centralized test data management
- Playwright assertions
- HTML test reports
- Screenshots and videos on test failures
- Trace collection for debugging
- GitHub Actions workflow

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/aishwaryapatil5201-jpg/Playwright-Ecommerce-Automation-Project.git
```

Navigate to the project directory:

```bash
cd Playwright-Ecommerce-Automation-Project
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run tests on Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --project=chromium --headed
```

## View HTML Report

```bash
npx playwright show-report
```

## Application Under Test

Practice application: https://shop.qaautomationlabs.com/

## Author

Aishwarya Patil

GitHub: https://github.com/aishwaryapatil5201-jpg
