const API_URL = process.env.REACT_APP_API_URL;

// fallback safety (VERY IMPORTANT for deployment errors)
const FALLBACK_URL = "http://localhost:8000";

export const API = API_URL || FALLBACK_URL;