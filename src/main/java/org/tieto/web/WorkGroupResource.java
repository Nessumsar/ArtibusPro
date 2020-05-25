package org.tieto.web;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.model.*;
import io.quarkus.security.identity.IdentityProvider;
import org.tieto.cognito.CognitoConnect;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import static org.tieto.cognito.CognitoConnect.AWS_USER_POOL_ID;

//Will be changed to "{work-group}" later on
@Path("/group")
@RequestScoped
//@RolesAllowed({"Admin"})
public class WorkGroupResource {

    TenantResource resource = new TenantResource();
    CognitoConnect cognitoConnect = new CognitoConnect();
    AWSCognitoIdentityProvider identityProvider = cognitoConnect.connector();

    //need to filter after workgroup
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/users")
    public String getAllUsersInWorkGroup(String workGroup){
        return resource.getAllUsers(workGroup);
    }

    //Needs testing
    //Needs authorization
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/create")
    public String createWorkGroup(String groupname){
        try {
            CreateGroupRequest groupRequest = new CreateGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withGroupName(groupname);

            resource.identityProvider.createGroup(groupRequest);

            return "Du skapade gruppen "+groupname;
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }

    //Needs testing
    //Needs authorization
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/delete")
    public String deleteWorkGroup(String groupname){
        try {
            DeleteGroupRequest groupRequest = new DeleteGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withGroupName(groupname);

            resource.identityProvider.deleteGroup(groupRequest);

            return "Du raderade gruppen "+groupname;
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }


    //Uses the method from tenantResource since it works the same way.
    //Adding users to different groups, therefore same methods in different classes for different types of groups
    //Group is already chosen when accessing these methods, therefore these methods cannot execute on
    //a tenant when trying to execute on a workgroup

    //Needs testing
    //Needs authorization
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/add")
    public String addUserToWorkGroup(String username, String email, String tempPassword, String group){
        try {
            AdminAddUserToGroupRequest addRequest = new AdminAddUserToGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withUsername(username)
                    .withGroupName(group);
            identityProvider.adminAddUserToGroup(addRequest);

            return "Användaren "+addRequest.getUsername()+
                    "har lagts till i gruppen "+group+".";
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }


    //Needs testing
    //Needs authorization
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/remove")
    public String removeUserFromWorkGroup(String username, String group){
        try {
            AdminRemoveUserFromGroupRequest removeRequest = new AdminRemoveUserFromGroupRequest()
                    .withUserPoolId(AWS_USER_POOL_ID)
                    .withUsername(username)
                    .withGroupName(group);
            identityProvider.adminRemoveUserFromGroup(removeRequest);

            return "Användaren "+removeRequest.getUsername()+
                    "har lagts till i gruppen "+group+".";
        }catch (Exception e){
            return "Error: "+e.toString();
        }
    }


}
