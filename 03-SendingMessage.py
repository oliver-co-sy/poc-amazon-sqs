# Sends a message to the queue
#
# Requirements:
#   - URL of an existing queue
#   - Message to send as string

import json
import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"
MESSAGE = {
    "one": "uno",
    "two": "dos",
    "three": "tres"
}

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

send_message_response = sqs.send_message(
    QueueUrl=QUEUE_URL,
    MessageBody=json.dumps(MESSAGE)
)

print(send_message_response)
