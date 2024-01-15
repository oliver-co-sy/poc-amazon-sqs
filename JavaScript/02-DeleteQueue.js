// Deletes a queue programmatically
//
// Requirements:
//  - URL of an existing queue

import { SQSClient, DeleteQueueCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const QUEUE_URL = `${SQS_ENDPOINT_URL}/queue/test-queue`;

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new DeleteQueueCommand({
    QueueUrl: QUEUE_URL
});

const response = await client.send(command);
console.log(response);