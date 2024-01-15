// Update the attributes of an existing queue
//
// Prerequisites:
//   - URL of the existing queue
//   - Updated queue attributes

import { SQSClient, SetQueueAttributesCommand } from '@aws-sdk/client-sqs';

const SQS_ENDPOINT_URL = 'http://localhost:8100';

const QUEUE_URL = `${SQS_ENDPOINT_URL}/queue/test-queue`;
const UPDATED_QUEUE_ATTRIBUTES = {
    DelaySeconds: '0',
    VisibilityTimeout: '30'
};

const client = new SQSClient({
    endpoint: SQS_ENDPOINT_URL
});

const command = new SetQueueAttributesCommand({
    QueueUrl: QUEUE_URL,
    Attributes: UPDATED_QUEUE_ATTRIBUTES
});

const response = await client.send(command);
console.log(response);