const net = require("net");

const data = {};

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (dataReceived) => {
    const [command, ...args] = dataReceived.toString().trim().split(" ");

    switch (command.toUpperCase()) {
      case "SET":
        const [key, value] = args;
        data[key] = value;
        socket.write("Key Created!\r\n");
        break;
      case "GET":
        const getValue = data[args[0]];
        socket.write(`${getValue ? getValue : "(nil)"}\r\n`);
        break;
      case "REMOVE":
        delete data[args[0]];
        socket.write("Removed!\r\n");
        break;
      case "APPEND":
        const [appendKey, appendValue] = args;
        if (!data[appendKey]) {
          data[appendKey] = appendValue;
        } else {
          data[appendKey] += appendValue;
        }
        socket.write("Added value!\r\n");
        break;
      case "MAPS.SET":
        const [mapKey, field, fieldValue] = args;
        if (!data[mapKey]) {
          data[mapKey] = {};
        }
        data[mapKey][field] = fieldValue;
        socket.write("OK\r\n");
        break;
      case "MAPS.GET":
        const [mapGetKey, mapField] = args;
        const mapValue = data[mapGetKey] ? data[mapGetKey][mapField] : null;
        socket.write(`${mapValue ? mapValue : "(nil)"}\r\n`);
        break;
      case "MAPS.KEYS":
        const mapKeys = data[args[0]] ? Object.keys(data[args[0]]) : [];
        socket.write(`${mapKeys.join(" ")}\r\n`);
        break;
      case "MAPS.VALUES":
        const mapValues = data[args[0]] ? Object.values(data[args[0]]) : [];
        socket.write(`${mapValues.join(" ")}\r\n`);
        break;
      default:
        socket.write("Invalid command\r\n");
    }
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

const PORT = 6379;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
