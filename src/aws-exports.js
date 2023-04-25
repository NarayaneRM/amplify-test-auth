
const awsmobile = {
    "aws_project_region": "XXXXX",
    "aws_cognito_region": "XXXXX",
    "aws_user_pools_id": "XXXXX",
    "aws_user_pools_web_client_id": "XXXXX",
    "oauth": {
        "domain": "XXXXX",
        "scope": [
            "XXXXX"
        ],
        "redirectSignIn": "XXXXXXX",
        "redirectSignOut": "XXXXXX",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "XXXXXX"
    ],
    "aws_cognito_social_providers": [
        "XXXXXX"
    ],
    "aws_cognito_signup_attributes": [
        "XXXXXX"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "XXXXX"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "XXXXX"
    ],
    "aws_content_delivery_bucket": "XXXXX",
    "aws_content_delivery_bucket_region": "XXXXX",
    "aws_content_delivery_url": "XXXXX"
};


export default awsmobile;
