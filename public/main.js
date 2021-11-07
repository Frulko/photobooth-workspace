let payload = JSON.stringify({
  name: 'Frulko',
  age: 104,
  phones: [
    '+33 0477761040',
    '+33 0633695271'
  ]
});

// payload = `Frulko`;

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:3001');

// Connection opened
socket.addEventListener('open', function (event) {
  console.log('WS.opened', event);
  // socket.send('Hello Server!');
  socket.send(payload);
});

socket.addEventListener('close', function (event) {
  console.log('WS.closed');
});

socket.addEventListener('error', function (err) {
  console.log('WS.error', err);
});

// Listen for messages
socket.addEventListener('message', function (event) {
  let { data } = event;

  try {
    data = JSON.parse(data);
  } catch (error) {
    console.error('error parsing');
  }

  console.log('>>', data);
});