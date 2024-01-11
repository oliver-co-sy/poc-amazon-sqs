# Deletes a queue programmatically
#
# Requirements:
#   - URL of an existing queue

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

response = sqs.delete_queue(
    QueueUrl=QUEUE_URL
)

print(response)
