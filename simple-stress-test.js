import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.1.0/index.js'

const TARGET_URL = "http://127.0.0.1:80/";

export const options = {
  scenarios: {
    full_stress_test: {
      executor: "constant-vus",
      vus: 200,
      duration: "10s",
    },
  },

  thresholds: {
    http_req_duration: ["p(95) < 5000"],
  },
};

export default function () {
  let res = http.get(TARGET_URL);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'result/result.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  }
}