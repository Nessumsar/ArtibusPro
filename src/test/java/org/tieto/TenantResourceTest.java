package org.tieto;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.tieto.web.TenantResource;

import javax.inject.Inject;


@QuarkusTest
public class TenantResourceTest {

    @Inject
    TenantResource tenantResource;

    @Test
    public void test(){

    }

}
