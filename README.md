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

- **Selectable Scenarios** - Choose from multiple built-in test scenarios (Load, Stress, Spike, Soak, Concurrent, and Full Stress) with a simple config switch.
- **High Concurrency Simulation** - Generate concurrent virtual users to accurately stress test web applications and identify bottlenecks.
- **Automated Visual Reporting** - Generate detailed HTML performance reports automatically using the integrated `k6-reporter`.
- **Performance Thresholds** - Enforce strict performance metrics (p95 request duration limits and error rates).
- **Terminal Summaries** - Receive immediate, color-coded performance metrics directly in your standard output.
- **Framework Agnostic** - Benchmark any HTTP endpoint regardless of the underlying backend technology or infrastructure.

## Tech Stack

- **Testing Engine**: Grafana k6
- **Language**: JavaScript (ES6 modules)
- **Reporting Extensions**: k6-reporter, k6-summary

## Installation

### Prerequisites

- [Grafana k6](https://k6.io/docs/get-started/installation/) installed on your operating system.

### Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/reynaldiarya/My-K6-Project.git
   cd My-K6-Project
   ```

2. Ensure the results directory exists:
   ```bash
   mkdir -p result
   ```

## Configuration

The load testing parameters can be customized directly within the simple-test.js file.

### 1. Select Scenario & Target

Open simple-test.js and adjust the following configurations:

- `SELECTED_SCENARIO`: Choose which test pattern to run.
- `TARGET_URL`: The target HTTP/HTTPS endpoint to run the test against.

```javascript
// Config
const SELECTED_SCENARIO = "full_stress_test"; // Choose: load_test, stress_test, spike_test, soak_test, concurrent_test, full_stress_test
const TARGET_URL = "http://127.0.0.1";
```

### 2. Scenario Options Reference

Here is a summary of the predefined scenarios available in the script:

| Scenario Name | Executor | VUs / Pattern | Duration | Best For |
|---|---|---|---|---|
| `load_test` | `constant-vus` | 50 VUs | 5m | Benchmarking steady traffic load |
| `stress_test` | `ramping-vus` | Ramp up to 300 VUs | 10m | Finding the breaking point of the app |
| `spike_test` | `ramping-vus` | Sudden burst to 500 VUs | 26s | Simulating flash sales or event launches |
| `soak_test` | `constant-vus` | 30 VUs | 2h | Checking for memory leaks or degradation over time |
| `concurrent_test` | `constant-vus` | 200 VUs | 30s | Simultaneous access testing (sleep=0) |
| `full_stress_test`| `constant-vus` | 100 VUs | 10s | Quick sanity check under medium load |

## Usage

To initiate the load test, run the following command in your terminal from the project root:

```bash
k6 run simple-test.js
```

Upon completion, k6 will output a text summary to your terminal and save a detailed graphical HTML report at `result/result.html`. You can open this HTML file in any modern web browser to review the test metrics.

## Project Structure

```text
/
├── result/                   # Directory containing generated HTML performance reports
└── simple-test.js            # The core k6 load testing execution script containing all scenarios
```

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
