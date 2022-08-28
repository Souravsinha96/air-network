export const country_url =
  "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json";

const BASE_URL = {
  v1: "https://test.api.amadeus.com/v1",
  v2: "https://test.api.amadeus.com/v2",
};

export const loginApi = BASE_URL.v1 + "/security/oauth2/token";
export const fligtStatusApi = BASE_URL.v2 + "/schedule/flights";
export const airlinesApi = BASE_URL.v1 + "/reference-data/airlines";
