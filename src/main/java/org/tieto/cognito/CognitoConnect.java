package org.tieto.cognito;

import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;


public class CognitoConnect {

    public final static String AWS_REGION = "eu-west-1";
    public static final String AWS_PROFILE = "default";
    public final static String TEST_USER = "testuser";
    public final static String AWS_USER_POOL_ID ="eu-west-1_T1KRUAuQl";

    public CognitoConnect() {
    }

    public AWSCognitoIdentityProvider connector() {
        AWSCognitoIdentityProvider client = AWSCognitoIdentityProviderClientBuilder.standard()
                .withCredentials(new ProfileCredentialsProvider(AWS_PROFILE))
                .withRegion(AWS_REGION)
                .build();

        return client;
    }
}
