# My Redis Clone Server

This is a simple server, inspired by this challenge:
[(5) Build a Redis clone client/server (Strings: set,get,remove,append, maps: set,get,keys,values)](https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges-round-2)

## How to Use

1. **Installation:**

   - Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
   - Clone this repository to your local machine using `git clone`.

2. **Initialization:**

   - Navigate to the project directory in the terminal.
   - Run `npm install` to install dependencies (in this case, there are no additional dependencies).
   - Run `npm start` to start the server.

3. **Testing the Server:**

   - You can test the server using telnet or by creating a Node.js client to connect to the server and programmatically send commands.

4. **Supported Commands:**
   - `SET key value`: Sets a value for a key.
   - `GET key`: Gets the value associated with a key.
   - `REMOVE key`: Removes a key and its value.
   - `APPEND key value`: Appends a value to the end of the existing value of a key.
   - `MAPS.SET key field value`: Sets a value for a field in a map (hash).
   - `MAPS.GET key field`: Gets the value of a field in a map.
   - `MAPS.KEYS key`: Gets all the keys of a map.
   - `MAPS.VALUES key`: Gets all the values of a map.

## Some test logs

```
telnet localhost 6379
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
SET names
OK
append names Foo
OK
append names Bar
OK
get names
FooBar
maps.set some
OK
maps.keys

maps.values foo

maps.set foo bar zoo
OK
maps.set foo bar mas
OK
maps.get foo
(nil)
maps.get foo bar
mas
maps.set foo foo ok
OK
maps.keys

maps.get foo foo
ok
maps.key foo
Invalid command
maps.keys foo
bar foo
maps.values foo
mas ok
```

## What is Redis?

Redis is an open-source, in-memory database known for its speed and flexibility. It is often used as a caching layer, messaging system, or real-time data structure database. Here are some of the key use cases of Redis:

- Caching: Redis is commonly used as a caching layer due to its high speed and ability to store data in memory. It can help reduce load on underlying databases, improving application performance.

- Queues and Pub/Sub: Redis supports data structures for queues and pub/sub (publish/subscribe). This makes it useful for building asynchronous messaging systems such as task queues, real-time notifications, and communication between components of a distributed system.

- Real-Time Data Storage: Due to its ability to store complex data types like lists, sets, hashes, and sorted sets, Redis is suitable for use cases requiring fast access to real-time data, such as real-time analytics, visitor counters, content ranking, and more.

- Sessions and Session Caching: Redis is often used to store user sessions in web applications, which can significantly improve performance and scalability by allowing sessions to be accessed quickly and efficiently.

- Geolocation and Indexing: Redis supports geospatial data structures, making it useful for applications needing geolocation functionalities such as storing and querying location data.

- Access Control and Authentication: Redis can be used to store authentication tokens and manage access control in applications, providing a fast and scalable solution for user authentication and authorization.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
