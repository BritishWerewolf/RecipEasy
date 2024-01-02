default:
    just --list

##########
# Build

[private]
tauri-prod:
    cargo tauri

[private]
tauri-dev:
    cargo tauri dev

# target=["dev", "prod"]
build target:
    just {{ if target == "dev" { \
        "tauri-dev"              \
    } else if target == "prod" { \
        "tauri-prod"             \
    } else {                     \
        "default"                \
    } }}

##########
# Packages

# Install a dependency to the backend.
backend package:
    #!/usr/bin/env bash
    set -euxo pipefail
    cd src-tauri
    cargo add {{package}}

# Install a dev dependency to the backend.
backend-dev package:
    #!/usr/bin/env bash
    set -euxo pipefail
    cd src-tauri
    cargo add --dev {{package}}

# Install a dependency to the frontend.
frontend package:
    npm i {{package}}

# Install a dev dependency to the frontend.
frontend-dev package:
    npm i -D {{package}}
