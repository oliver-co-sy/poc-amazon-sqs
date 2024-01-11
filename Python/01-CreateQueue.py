# Creates a queue programmatically
#
# Requirements:
#   - Name of the queue
#   - Attributes of the queue

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_NAME = "test-queue"
QUEUE_ATTRIBUTES = {
    "DelaySeconds": "0",
    "VisibilityTimeout": "60"
}

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

response = sqs.create_queue(
    QueueName=QUEUE_NAME,
    Attributes=QUEUE_ATTRIBUTES
)

print(response)
