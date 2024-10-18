# Service functions (e.g., for AWS integration)
import boto3
from botocore.exceptions import NoCredentialsError
from config import Config

def get_s3_client():
    return boto3.client(
        's3',
        aws_access_key_id=Config.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=Config.AWS_SECRET_ACCESS_KEY,
        region_name=Config.AWS_REGION
    )
