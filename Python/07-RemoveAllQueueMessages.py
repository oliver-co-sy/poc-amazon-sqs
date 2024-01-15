# Removes all messages in a queue
#
# Prerequisites:
#   - URL of the existing queue

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

purge_queue_response = sqs.purge_queue(
    QueueUrl=QUEUE_URL
)

print(purge_queue_response)
