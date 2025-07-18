const os = require("os");

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (interface.family === "IPv4" && !interface.internal) {
        console.log(`IP Local encontrado: ${interface.address}`);
        console.log(`Configure no mobile: http://${interface.address}:3333`);
        console.log(`Arquivo: mobile/src/services/api.ts`);
        return interface.address;
      }
    }
  }

  console.log("Nenhum IP local encontrado");
  return "localhost";
}

console.log("Descobrindo IP da máquina local...\n");
getLocalIP();
