package org.tieto.web;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.model.GroupType;
import com.amazonaws.services.cognitoidp.model.ListGroupsRequest;
import com.amazonaws.services.cognitoidp.model.ListGroupsResult;
import org.tieto.cognito.CognitoConnect;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static org.tieto.cognito.CognitoConnect.*;


@Path("/super")
@RequestScoped
//@RolesAllowed({"super-user"})
public class SuperUserResource{

    CognitoConnect cognitoConnect = new CognitoConnect();
    AWSCognitoIdentityProvider identityProvider = cognitoConnect.connector();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/view-all")
    public String listAllTenantGroups() {
        StringBuilder sb = new StringBuilder();
        ListGroupsRequest groupsRequest = new ListGroupsRequest().withUserPoolId(AWS_USER_POOL_ID);
        ListGroupsResult groupsResult = identityProvider.listGroups(groupsRequest);

        for (GroupType type : groupsResult.getGroups()){
            if (type.getGroupName() == null){
                return "No groups found."; //Needed?
            }

            if (type.getGroupName().contains("tenant")){
                sb.append("Group: ")
                        .append(type.getGroupName())
                        .append("\n");
            }
        }
        return sb.toString();
    }

}
