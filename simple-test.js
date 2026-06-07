import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/3.0.4/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.1.0/index.js";

// Config
const SELECTED_SCENARIO = "full_stress_test"; // Change this value to select the desired scenario (e.g., "load_test", "stress_test", "spike_test", "soak_test", "concurrent_test", "full_stress_test")
const TARGET_URL = "http://127.0.0.1";

function getScenarioConfig(scenarioName) {
  const scenarios = {
    load_test: {
      executor: "constant-vus",
      vus: 50,
      duration: "5m",
      tags: { test_type: "load" },
    },
    stress_test: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "2m", target: 50 },
        { duration: "2m", target: 100 },
        { duration: "2m", target: 200 },
        { duration: "2m", target: 300 },
        { duration: "2m", target: 0 },
      ],
      tags: { test_type: "stress" },
    },
    spike_test: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "10s", target: 10 },
        { duration: "1s", target: 500 },
        { duration: "10s", target: 500 },
        { duration: "5s", target: 0 },
      ],
      tags: { test_type: "spike" },
    },
    soak_test: {
      executor: "constant-vus",
      vus: 30,
      duration: "2h",
      tags: { test_type: "soak" },
    },
    concurrent_test: {
      executor: "constant-vus",
      vus: 200,
      duration: "30s",
      tags: { test_type: "concurrent" },
    },
    full_stress_test: {
      executor: "constant-vus",
      vus: 100,
      duration: "10s",
      tags: { test_type: "simple_stress" },
    },
  };
  return scenarios[scenarioName];
}

const activeConfig = getScenarioConfig(SELECTED_SCENARIO);
if (!activeConfig) {
  throw new Error(
    `The “${SELECTED_SCENARIO}” scenario is not recognized. Please select one: load_test, stress_test, spike_test, soak_test, concurrent_test, full_stress_test`,
  );
}

export const options = {
  scenarios: {
    [SELECTED_SCENARIO]: activeConfig,
  },
  thresholds: {
    http_req_duration: ["p(95) < 2000"],
    http_req_failed: ["rate < 0.01"],
  },
};

export default function () {
  let res = http.get(TARGET_URL);
  check(res, { "status was 200": (r) => r.status == 200 });

  if (SELECTED_SCENARIO === "concurrent_test") {
    sleep(0);
  } else {
    sleep(1);
  }
}

export function handleSummary(data) {
  return {
    "result/result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}