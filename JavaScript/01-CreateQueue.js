// Creates a queue programmatically
//
// Requirements:
//   - Name of the queue
//   - Attributes of the queue

import { SQSClient, CreateQueueCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const SQS_QUEUE_NAME = 'test-queue';
const QUEUE_ATTRIBUTES = {
    DelaySeconds: '0',
    VisibilityTimeout: '60'
};

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new CreateQueueCommand({
    QueueName: SQS_QUEUE_NAME,
    Attributes: QUEUE_ATTRIBUTES
});

const response = await client.send(command);
console.log(response);
