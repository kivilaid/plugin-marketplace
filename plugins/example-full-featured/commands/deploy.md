# Deploy Command

Guide the user through a deployment checklist.

When this command is invoked, help the user prepare for deployment by:

1. Checking if all tests are passing
2. Verifying that the build completes successfully
3. Reviewing recent changes (git log)
4. Confirming that all files are committed
5. Asking which environment they want to deploy to (staging/production)

Provide clear step-by-step guidance and wait for user confirmation before proceeding with each step.

**Important**: Do not actually deploy anything - this is a checklist helper only. The user must run their own deployment commands.
