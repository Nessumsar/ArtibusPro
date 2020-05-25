package org.tieto.web;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.model.*;
import org.tieto.cognito.CognitoConnect;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

import static org.tieto.cognito.CognitoConnect.*;

//Will be "/{tenant} later on.
//@PathParam("tenant") for method input params?
@Path("tenant")
@RequestScoped
//@RolesAllowed({"Admin"})
public class TenantResource {

    public TenantResource(){}

    CognitoConnect cognitoConnect = new CognitoConnect();
    AWSCognitoIdentityProvider identityProvider = cognitoConnect.connector();

    //Done
    //Needs testing - manual testing done
    @GET
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllUsers(String group){
        StringBuilder sb = new StringBuilder();

        ListUsersInGroupRequest usersRequest = new ListUsersInGroupRequest().withGroupName("Testgroup").withUserPoolId(AWS_USER_POOL_ID);
        ListUsersInGroupResult result = identityProvider.listUsersInGroup(usersRequest);

            for (UserType user : result.getUsers()){
                sb.append(user.getUsername());
                List<AttributeType> attributeList = user.getAttributes();
                for (AttributeType attribute : attributeList){
                    String attName = attribute.getName();
                    String attValue = attribute.getValue();
                    if(attName.equals("phone_number") || attName.equals("email") ){
                        sb.append("   " + attValue);
                    }
                }
                sb.append("   Grupper");
                sb.append("   Nollställ lösenord");
                sb.append("\n");
            }
            return sb.toString();
    }

    //Postman tested - OK
    //Needs authorization - HTTP ERROR 405
    @POST
    @Path("/user")
    @Produces(MediaType.APPLICATION_JSON)
    public String createAndAddUserToTenant(String username, String email, String tempPassword, String tenant){
        try {
            AttributeType type = new AttributeType();
            type.setName("email");
            type.setValue(email);

            AdminCreateUserRequest createUserRequest = new AdminCreateUserRequest().withUserPoolId(AWS_USER_POOL_ID);
            AdminCreateUserResult createUserResult = identityProvider.adminCreateUser(
                    createUserRequest
                            .withUsername(username)
                            .withUserAttributes(type)
                            .withTemporaryPassword(tempPassword));

            AdminAddUserToGroupRequest addRequest = new AdminAddUserToGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withGroupName(tenant)
                    .withUsername(createUserResult.getUser().getUsername());
            identityProvider.adminAddUserToGroup(addRequest);

            return "Användaren "+createUserResult.getUser().getUsername()+" skapades"+
                    "och har lagts till i "+tenant+". Temporärt lösenord: "+tempPassword;
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }

    //Postman tested - OK
    //Needs authorization - HTTP ERROR 405
    @DELETE
    @Path("/user")
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteUser(String username, String tenant){
        try {
            AdminRemoveUserFromGroupRequest removeRequest = new AdminRemoveUserFromGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withUsername("postman")
                    .withGroupName("Testgroup");
            AdminRemoveUserFromGroupResult removeResult = identityProvider.adminRemoveUserFromGroup(removeRequest);

            AdminDeleteUserRequest deleteUserRequest = new AdminDeleteUserRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withUsername("postman");
            identityProvider.adminDeleteUser(deleteUserRequest);

            return "Användaren "+username +" raderades. RemoveResult: "+removeResult.toString();
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }



}
