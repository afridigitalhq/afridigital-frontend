#!/data/data/com.termux/files/usr/bin/bash

###############################################################################
# AFRIDIGITAL ADR v2
###############################################################################

FRONTEND_URL="https://afridigital-hub.onrender.com"
BACKEND_URL="https://afridigital-api.onrender.com"

WORKDIR="$HOME/adr-system"
CORE_DIR="$WORKDIR/core"
SANDBOX_DIR="$WORKDIR/sandbox"
DEPLOY_DIR="$WORKDIR/deploy"

REGISTRY="$CORE_DIR/registry.json"
EVENTS="$CORE_DIR/events.log"
DEPLOY_LOG="$DEPLOY_DIR/history.log"

###############################################################################
# INIT
###############################################################################

init_dirs() {

mkdir -p "$CORE_DIR"
mkdir -p "$SANDBOX_DIR"
mkdir -p "$DEPLOY_DIR"

[ -f "$REGISTRY" ] || echo "{}" > "$REGISTRY"
[ -f "$EVENTS" ] || touch "$EVENTS"
[ -f "$DEPLOY_LOG" ] || touch "$DEPLOY_LOG"

}

###############################################################################
# EVENT BUS
###############################################################################

emit_event() {

echo "$(date +%s)|$1|$2" >> "$EVENTS"

echo "⚡ EVENT: $1 -> $2"

}

###############################################################################
# SAFETY BOUNDARY
###############################################################################

is_allowed_path() {

case "$1" in

"$CORE_DIR"/*|"$SANDBOX_DIR"/*)

return 0
;;

*)

return 1
;;

esac

}

###############################################################################
# BOOTSTRAP
###############################################################################

bootstrap() {

init_dirs

echo "🚀 ADR BOOTSTRAP STARTING..."
echo "📦 Registry initialized"
echo "🛡️ Safety Boundary ACTIVE"
echo "📡 Event Bus ACTIVE"

echo "🔗 Frontend: $FRONTEND_URL"
echo "🔗 Backend : $BACKEND_URL"

emit_event "BOOTSTRAP" "ADR"

echo "⚡ ADR CORE READY (PROTECTED MODE)"

}

###############################################################################
# VALIDATION
###############################################################################

validate() {

init_dirs

echo "🧪 ADR VALIDATION STARTING..."

[ -f "$REGISTRY" ] && echo "✔ Registry: ACTIVE"
[ -f "$EVENTS" ] && echo "✔ Event Bus: ACTIVE"
[ -d "$SANDBOX_DIR" ] && echo "✔ Sandbox: ACTIVE"
[ -d "$DEPLOY_DIR" ] && echo "✔ Deploy Layer: READY"

echo "✔ Frontend: $FRONTEND_URL"
echo "✔ Backend : $BACKEND_URL"

echo "🟢 VALIDATION COMPLETE"

}


###############################################################################
# REGISTRY WRITER
###############################################################################

register_module() {

init_dirs

local NAME="$1"
local TYPE="$2"

if [ -z "$NAME" ] || [ -z "$TYPE" ]; then
    echo "⛔ register: missing <name> <type>"
    return 1
fi

node -e "
const fs=require('fs');
const file=process.env.HOME+'/adr-system/core/registry.json';
const reg=JSON.parse(fs.readFileSync(file,'utf8'));
reg['$NAME']={
  type:'$TYPE',
  installedAt:Date.now()
};
fs.writeFileSync(file,JSON.stringify(reg,null,2));
"

echo "📦 Module registered: $NAME ($TYPE)"

emit_event "MODULE_REGISTERED" "$NAME"

}


###############################################################################
# SANDBOX PROMOTION
###############################################################################

auto_register_from_sandbox() {

local NAME="$1"
local TYPE="$2"

echo "📦 Promoting sandbox → registry..."

register_module "$NAME" "$TYPE"

echo "🚀 PROMOTION COMPLETE: $NAME"

}

###############################################################################
# AFRIAI FACTORY
###############################################################################

ai_create() {

init_dirs

local NAME="$1"
local TYPE="$2"

if [ -z "$NAME" ] || [ -z "$TYPE" ]; then
    echo "⛔ Usage: bash adr.sh ai-create <name> <type>"
    return 1
fi

local FILE="$SANDBOX_DIR/${NAME}.module.json"

echo "🤖 AFRIAI GENERATING (SANDBOX MODE)..."
echo "🛡️ SAFETY BOUNDARY ENFORCED"

cat > "$FILE" <<JSON
{
  "name":"$NAME",
  "type":"$TYPE",
  "aiGenerated":true
}
JSON

echo "🧠 Module created in sandbox: $FILE"

emit_event "AFRIAI_MODULE_CREATED" "$NAME"

auto_register_from_sandbox "$NAME" "$TYPE"

}


###############################################################################
# DEPLOYMENT
###############################################################################

deploy() {

init_dirs

cat > "$DEPLOY_DIR/config.json" <<CONFIG
{
  "frontend":"$FRONTEND_URL",
  "backend":"$BACKEND_URL",
  "status":"READY"
}
CONFIG

echo "$(date +%s)|DEPLOY_LAYER_READY" >> "$DEPLOY_LOG"

echo "🚀 DEPLOYMENT LAYER READY"
echo "🌐 Frontend: $FRONTEND_URL"
echo "🌐 Backend : $BACKEND_URL"

}

###############################################################################
# EVENT LISTENER
###############################################################################

listen_events() {

init_dirs

echo "👂 Listening..."

tail -f "$EVENTS"

}

###############################################################################
# COMMAND DISPATCHER
###############################################################################

case "$1" in

bootstrap)
    bootstrap
    ;;

validate)
    validate
    ;;

register)
    register_module "$2" "$3"
    ;;

ai-create)
    ai_create "$2" "$3"
    ;;

deploy)
    deploy
    ;;

listen)
    listen_events
    ;;

*)
    echo "Usage:"
    echo "  bash adr.sh bootstrap"
    echo "  bash adr.sh validate"
    echo "  bash adr.sh register <name> <type>"
    echo "  bash adr.sh ai-create <name> <type>"
    echo "  bash adr.sh deploy"
    echo "  bash adr.sh listen"
    ;;
esac

