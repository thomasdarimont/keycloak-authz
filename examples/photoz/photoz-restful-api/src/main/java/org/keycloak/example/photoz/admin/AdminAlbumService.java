/*
 * JBoss, Home of Professional Open Source
 *
 * Copyright 2015 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.keycloak.example.photoz.admin;

import org.keycloak.authz.policy.enforcer.jaxrs.annotation.Enforce;
import org.keycloak.authz.policy.enforcer.jaxrs.annotation.ProtectedResource;
import org.keycloak.authz.policy.enforcer.jaxrs.annotation.ProtectedScope;
import org.keycloak.example.photoz.entity.Album;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author <a href="mailto:psilva@redhat.com">Pedro Igor</a>
 */
@Path("/admin/album")
@ProtectedResource(
        name = "Admin Resources",
        type = "http://photoz.com/dev/resource/admin/album",
        uri = "/admin/*",
        scopes = {
                @ProtectedScope(name = AdminAlbumService.SCOPE_ADMIN_ALBUM_MANAGE)
        })
public class AdminAlbumService {

    public static final String SCOPE_ADMIN_ALBUM_MANAGE = "urn:photoz.com:scopes:album:admin:manage";

    @PersistenceContext
    private EntityManager entityManager;

    @Context
    private HttpHeaders headers;

    @GET
    @Produces("application/json")
    @Enforce(scopes= SCOPE_ADMIN_ALBUM_MANAGE)
    public Response findAll() {
        HashMap<String, List<Album>> albums = new HashMap<>();
        List<Album> result = this.entityManager.createQuery("from Album").getResultList();

        for (Album album : result) {
            albums.computeIfAbsent(album.getUserId(), key -> new ArrayList<>()).add(album);
        }

        return Response.ok(albums).build();
    }
}
