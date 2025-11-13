
const allowedOrigins = [
  "http://localhost:5173", // ✅ Local Vite Dev Server
  "http://127.0.0.1:5173",
  "https://your-production-domain.com", // ✅ Replace with your real domain
  "https://www.your-production-domain.com",
];

export const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`⚠️ CORS blocked request from: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // ✅ all methods allowed

  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],

  credentials: true, // ✅ needed for cookies / auth tokens
  optionsSuccessStatus: 200, // ✅ For legacy browsers
};
