# Update the attributes of an existing queue
#
# Prerequisites:
#   - URL of the existing queue
#   - Updated queue attributes

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"
UPDATED_QUEUE_ATTRIBUTES = {
    "DelaySeconds": "0",
    "VisibilityTimeout": "30"
}

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

set_queue_attributes_response = sqs.set_queue_attributes(
    QueueUrl=QUEUE_URL,
    Attributes=UPDATED_QUEUE_ATTRIBUTES
)

print(set_queue_attributes_response)
