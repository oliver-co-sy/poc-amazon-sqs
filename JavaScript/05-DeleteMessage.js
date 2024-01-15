// Delete message from the queue
//
// Requirements:
//   - URL of an existing queue
//   - Receipt handle value from receive message response
//
// Note:
//   It is important to keep in mind that receiving a message from the SQS queue doesn’t automatically delete it.
//   Any other consumer can also retrieve the same message once the VisibilityTimeout period expires. To ensure, no other
//   consumer retrieves the same message, it needs to be deleted within the VisibilityTimeout time period.

import { SQSClient, DeleteMessageCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const QUEUE_URL = `${SQS_ENDPOINT_URL}/queue/test-queue`;
const RECEIPT_HANDLE = '71ea5d65-d9f1-4d2f-9ff2-b7135aac2a07#8155e504-a9b0-4fc4-972c-d2faa8a1031e';

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new DeleteMessageCommand({
    QueueUrl: QUEUE_URL,
    ReceiptHandle: RECEIPT_HANDLE
});

const response = await client.send(command);
console.log(response);