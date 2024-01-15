// Receive messages from the queue
//
// Requirements:
//   - URL of an existing queue
//
// Note:
//   It is important to keep in mind that receiving a message from the SQS queue doesn’t automatically delete it.
//   Any other consumer can also retrieve the same message once the VisibilityTimeout period expires. To ensure, no other
//   consumer retrieves the same message, it needs to be deleted within the VisibilityTimeout time period.

import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const QUEUE_URL = `${SQS_ENDPOINT_URL}/queue/test-queue`;

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new ReceiveMessageCommand({
    QueueUrl: QUEUE_URL,
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 5
});

const response = await client.send(command);
console.log(response);