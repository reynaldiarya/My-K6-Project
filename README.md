## 🚀 My-K6-Project

This is a load testing script built using **k6** to test the performance and resilience of a service.

-----

### 📋 Prerequisites

Before running the test, ensure you have the following installed:

1.  **k6:** The open-source load testing tool.
      * [k6 Installation Guide](https://grafana.com/docs/k6/latest/set-up/install-k6/)

-----

### ⚙️ Test Configuration

This script is configured to run a **stress test** with the following parameters:

| Parameter | Value | Description |
| :--- | :--- | :--- |
| **Target URL** | `http://127.0.0.1:80/` | The endpoint that will be tested. |
| **Executor** | `constant-vus` | Uses a constant number of *Virtual Users*. |
| **VUs (Users)** | `200` | The number of virtual users who will run the script concurrently. |
| **Duration** | `10s` | The total time the test will run. |
| **Threshold** | `p(95) < 5000ms` | The test will **fail** if the 95th percentile of the HTTP request duration exceeds 5 seconds (5000ms). |
| **Checks** | `status was 200` | Ensures that every request returns an HTTP status code of **200 OK**. |

-----

### ▶️ How to Run

1.  Open your terminal in the same directory.

2.  Execute the test using the following command:

    ```bash
    k6 run simple-stress-test.js
    ```

-----

### 📊 Test Results (Reporting)

This script uses the `handleSummary` function to generate two types of reports after the test is complete:

1.  **Text Summary (Stdout):** A summary of the results will be printed directly in your terminal.
2.  **HTML Report:** A more detailed, visual report will be created at the path:
      * `result/result.html`

You can open the `result/result.html` file in your browser to view the test data visualization.

-----

### 📝 Development

If you need to modify the script:

  * Change the `TARGET_URL` variable to test a different endpoint.
  * Adjust the `options.scenarios` property to change the load pattern (e.g., switch to `ramping-vus` or modify `vus`/`duration`).
  * Modify `thresholds` to adjust your test's Service Level Objectives (SLOs).