# Receive messages from the queue
#
# Requirements:
#   - URL of an existing queue
#
# Note:
#   It is important to keep in mind that receiving a message from the SQS queue doesn’t automatically delete it.
#   Any other consumer can also retrieve the same message once the VisibilityTimeout period expires. To ensure, no other
#   consumer retrieves the same message, it needs to be deleted within the VisibilityTimeout time period.

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

receive_message_response = sqs.receive_message(
    QueueUrl=QUEUE_URL,
    MaxNumberOfMessages=1,
    WaitTimeSeconds=5
)

print(receive_message_response)
