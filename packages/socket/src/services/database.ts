// Simulated database save function
export async function saveMessageToDatabase({ channel, message, userId }) {
  console.log(
    `Saving message from ${userId} in channel ${channel}: ${message}`
  );
}
