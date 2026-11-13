#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";

console.log("\n=======================================================");
console.log("   Aksara Anti-Slop Agent: Universal Installer        ");
console.log("   Stopping AI Coding Agents from Shipping Generic Slop");
console.log("=======================================================\n");

console.log("Available AI Coding Agents detected:");
console.log("1. Antigravity / Gemini CLI");
console.log("2. Claude Code");
console.log("3. Cursor IDE");
console.log("4. Codex");
console.log("5. Current Project Directory (Local)\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Install Aksara Anti-Slop rules to current workspace? (y/n): ", (ans) => {
  if (ans.trim().toLowerCase() === "y") {
    const targetFile = path.resolve(process.cwd(), "AGENTS.md");
    const sampleRule = `# Aksara Anti-Slop Agent: Local Rule Pointer\n\nRefer to https://github.com/aksaradanardipa/aksara-anti-slop for full rules.\n`;
    fs.writeFileSync(targetFile, sampleRule, { encoding: "utf-8" });
    console.log(`\n[SUCCESS] Installed rule pointer to ${targetFile}`);
  } else {
    console.log("\nInstallation aborted.");
  }
  rl.close();
});
