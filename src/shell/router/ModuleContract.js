/*
AfriDigital Module Contract

Every module should export:

id          : unique module id
name        : display name
icon        : UI icon
component   : React component
permissions : required permissions
commands    : AfriAI commands
widgets     : dashboard widgets
routes      : internal routes
status      : active | beta | disabled

The Shell loads modules only through this contract.
No module should modify the shell directly.
*/
export default {};
