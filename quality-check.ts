import "dotenv/config";

console.log("🚀 Code Quality Workflow Started");

const repo = `${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}`;

console.log("\n📦 Repository:", repo);

// fake issues (we will replace with real SonarQube later)
const issues = [
  "❌ Unused variable in app.js",
  "❌ Missing error handling in API call",
  "❌ Hardcoded password found"
];

console.log("\n🔍 Found Issues:");
issues.forEach(i => console.log(i));

// simple rule engine
console.log("\n🧠 AI Recommendation:");
console.log("- Fix security issues first");
console.log("- Then fix bugs");
console.log("- Ignore minor code smells for now");
