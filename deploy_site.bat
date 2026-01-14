@echo off
echo Deploying to Cloudflare Pages...
call npx wrangler deploy
echo Deployment command finished.
pause
