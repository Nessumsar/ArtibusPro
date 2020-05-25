package org.tieto.web;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.model.*;
import org.tieto.cognito.CognitoConnect;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import static org.tieto.cognito.CognitoConnect.*;


//Would like the path to go /{tenant}/users/method if in a tenant-group or {work-group}/users/method if in a work-group.
@Path("/users")
@RequestScoped
//@RolesAllowed("ADMIN")
public class UserResource {

    CognitoConnect cognitoConnect = new CognitoConnect();
    AWSCognitoIdentityProvider identityProvider = cognitoConnect.connector();


    //Works to find more than one user but needs to be in the same group, to be improved.
    //Possible improvement
    //Username as param in search form, group as "dropdown" if searching in a workgroup or when serching as super-user
    //If searching in a tenant as tenant-admin the group should be tenant   if(role=tenant-admin) { group=tenant-name)}
    //Postman tested
    @GET
    @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    public String searchUser(String username, String group){
        StringBuilder sb = new StringBuilder();

        ListUsersInGroupRequest usersInGroupRequest = new ListUsersInGroupRequest()
                .withUserPoolId(AWS_USER_POOL_ID)
                .withGroupName(group);
        ListUsersInGroupResult groupResult = identityProvider.listUsersInGroup(usersInGroupRequest);

        for (UserType user : groupResult.getUsers()){
            if (user.getUsername().contains(username)){
                sb.append(username);
                List<AttributeType> attributeList = user.getAttributes();

                for (AttributeType attribute : attributeList){
                    String attName = attribute.getName();
                    String attValue = attribute.getValue();

                    if(attName.equals("phone_number") || attName.equals("email") ){
                        sb.append("   ").append(attValue);
                    }
                }
                sb.append("   Grupper");
                sb.append("   Nollställ lösenord");
                sb.append("\n");
                //Probably not needed - gets to stay for now
            }
        }
        if (!sb.toString().contains(username)){
            return "Ingen användare hittades.";
        }
        return sb.toString();
    }

    //Needs testing
    //Need authorization - HTTP ERROR 405
    @POST
    @Path("/reset-password")
    @Produces(MediaType.APPLICATION_JSON)
    public String resetPassword(String username){
        try {
            AdminResetUserPasswordRequest resetRequest = new AdminResetUserPasswordRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withUsername(username);
            identityProvider.adminResetUserPassword(resetRequest);

            return "Lösenordet nollställdes för "+username +".";
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }

}
