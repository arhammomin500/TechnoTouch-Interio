# Deploys the public website to Cloudflare Pages (technotouchinterio.com).
# Only files the site actually uses are uploaded — backups, PDFs, README, videos
# and unused logo drafts in this folder stay private.
#
# Usage (from this folder):  .\deploy.ps1
#   .\deploy.ps1 -PrepareOnly   builds .deploy without uploading (to check what goes live)
# First time on a machine:   wrangler login

param([switch]$PrepareOnly)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$out = Join-Path $PSScriptRoot '.deploy'
if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory $out | Out-Null

# Pages: every .html except backups (index-backup.html, index-before-*.html)
Get-ChildItem -File -Filter *.html |
  Where-Object { $_.Name -notmatch '^index-(backup|before-)' } |
  Copy-Item -Destination $out

# Styles and scripts
Get-ChildItem -File -Include *.css, *.js -Path * | Copy-Item -Destination $out

# Static files referenced by the pages
$static = @(
  'sitemap.xml', 'robots.txt',
  'favicon.ico', 'apple-touch-icon.png', 'icon-192.png', 'og-image.jpg',
  'icon-only.png', 'logo-icon.png', 'logo-brand.png'
)
foreach ($f in $static) { Copy-Item $f -Destination $out }

# Photos
Copy-Item -Recurse 'assets' -Destination $out

$files = (Get-ChildItem $out -Recurse -File).Count
$mb = [math]::Round((Get-ChildItem $out -Recurse -File | Measure-Object Length -Sum).Sum / 1MB, 1)
Write-Host "Prepared $files files ($mb MB) in .deploy"
if ($PrepareOnly) { return }

wrangler pages deploy $out --project-name=technotouchinterio --branch=main --commit-dirty=true
