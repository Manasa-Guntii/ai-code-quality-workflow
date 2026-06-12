import "dotenv/config";

console.log("🚀 Code Quality Workflow Started");

const repoOwner = process.env.GITHUB_OWNER || "demo-user";
const repoName = process.env.GITHUB_REPO || "demo-repo";

console.log(`📦 Repository: ${repoOwner}/${repoName}`);

console.log("\n🔍 Found Issues:");
console.log("❌ Unused variable in app.js");
console.log("❌ Missing error handling in API call");
console.log("❌ Hardcoded password found");

console.log("\n🧠 AI Recommendation:");
console.log("- Fix security issues first");
console.log("- Then fix bugs");
console.log("- Ignore minor code smells for now");
