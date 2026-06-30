#!/data/data/com.termux/files/usr/bin/bash

LOG_FILE="afri-ai-trace.log"

trace() {
  echo "[AFRI-TRACE] $(date '+%Y-%m-%d %H:%M:%S') :: $1" >> $LOG_FILE
}

trace_error() {
  echo "[AFRI-ERROR] $(date '+%Y-%m-%d %H:%M:%S') :: $1" >> $LOG_FILE
}

echo "🧠 AfriAI Trace Layer Active"
trace "TRACE SYSTEM STARTED"

# capture Node crashes globally (VERY important for your issue)
export NODE_OPTIONS="--trace-uncaught --trace-warnings"

# optional: log last exit code if script wraps execution
trap 'trace_error "EXIT CODE $? at line $LINENO"' ERR
