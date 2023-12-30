default:
    just --list

tauri-prod:
    cargo tauri

tauri-dev:
    cargo tauri dev

build target:
    just {{ if target == "dev" { "tauri-dev" } else if target == "prod" { "tauri-prod" } else { "default" } }}
