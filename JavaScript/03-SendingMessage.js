// Sends a message to the queue
//
// Requirements:
//   - URL of an existing queue
//   - Message to send as string

import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const QUEUE_URL = `${SQS_ENDPOINT_URL}/queue/test-queue`;
const MESSAGE = {
    one: 'uno',
    two: 'dos',
    three: 'tres'
};

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new SendMessageCommand({
    QueueUrl: QUEUE_URL,
    MessageBody: JSON.stringify(MESSAGE)
});

const response = await client.send(command);
console.log(response);