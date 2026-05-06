# My K6 Project

A streamlined load testing suite for benchmarking web application performance using Grafana k6.

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/k6-load_testing-7D64FF.svg" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E.svg" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## Description

My K6 Project provides a robust and straightforward load testing environment to evaluate the performance and reliability of web applications under stress. Built on Grafana k6, it enables developers and system administrators to simulate concurrent user traffic, monitor response times, and evaluate system stability. The project automatically generates comprehensive HTML reports, making it an excellent tool for benchmarking different technology stacks against specific hardware or container configurations.

## Features

- **High Concurrency Simulation** - Generate concurrent virtual users to accurately stress test web applications and identify bottlenecks
- **Automated Visual Reporting** - Generate detailed HTML performance reports automatically using the integrated `k6-reporter`
- **Performance Thresholds** - Enforce strict performance metrics, ensuring request durations remain under specified limits
- **Terminal Summaries** - Receive immediate, color-coded performance metrics directly in your standard output
- **Framework Agnostic** - Benchmark any HTTP endpoint regardless of the underlying backend technology or infrastructure

## Tech Stack

- **Testing Engine**: Grafana k6
- **Language**: JavaScript (ES6 modules)
- **Reporting Extensions**: k6-reporter, k6-summary

## Installation

### Prerequisites

- [Grafana k6](https://k6.io/docs/get-started/installation/) installed on your operating system

### Steps

1. Clone the repository to your local machine

```bash
git clone https://github.com/reynaldiarya/My-K6-Project.git
cd My-K6-Project
```

2. Ensure the results directory exists

```bash
mkdir -p result
```

## Configuration

The load testing parameters can be customized directly within the `simple-stress-test.js` file. Open the file and adjust the following configurations to match your testing requirements:

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `TARGET_URL` | The HTTP endpoint to be tested | `http://127.0.0.1:80/` |
| `options.scenarios.full_stress_test.vus` | Number of concurrent virtual users | `200` |
| `options.scenarios.full_stress_test.duration` | The total duration of the stress test | `10s` |
| `options.thresholds.http_req_duration` | Acceptable request duration limits | `p(95) < 5000` |

## Usage

To initiate the load test, run the following command in your terminal from the project root:

```bash
k6 run simple-stress-test.js
```

Upon completion, k6 will output a text summary to your terminal and save a detailed graphical HTML report at `result/result.html`. You can open this HTML file in any modern web browser to review the test metrics.

## Project Structure

```text
/
├── result/                   # Directory containing generated HTML performance reports
└── simple-stress-test.js     # The core k6 load testing execution script
```

## Scripts / Commands

| Command | Description |
|---------|-------------|
| `k6 run simple-stress-test.js` | Execute the load test and generate performance reports |

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add specific feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for detailed terms and conditions.

## Author

Reynaldi Arya