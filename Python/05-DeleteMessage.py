# Delete message from the queue
#
# Requirements:
#   - URL of an existing queue
#   - Receipt handle value from receive message response
#
# Note:
#   It is important to keep in mind that receiving a message from the SQS queue doesn’t automatically delete it.
#   Any other consumer can also retrieve the same message once the VisibilityTimeout period expires. To ensure, no other
#   consumer retrieves the same message, it needs to be deleted within the VisibilityTimeout time period.

import boto3

SQS_ENDPOINT_URL = "http://localhost:8100"

QUEUE_URL = f"{SQS_ENDPOINT_URL}/queue/test-queue"
RECEIPT_HANDLE = "f2d90946-c29e-469f-9e51-48d8a633d749#e667ccbd-3bdd-4dce-9bca-d195eeef59f3"

sqs = boto3.client(
    "sqs",
    endpoint_url=SQS_ENDPOINT_URL
)

delete_message_response = sqs.delete_message(
    QueueUrl=QUEUE_URL,
    ReceiptHandle=RECEIPT_HANDLE
)

print(delete_message_response)
