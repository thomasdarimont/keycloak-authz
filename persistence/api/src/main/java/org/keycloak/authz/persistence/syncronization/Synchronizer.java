package org.keycloak.authz.persistence.syncronization;

import org.keycloak.authz.core.store.spi.PersistenceProvider;
import org.keycloak.provider.ProviderEvent;

/**
 * @author <a href="mailto:psilva@redhat.com">Pedro Igor</a>
 */
public interface Synchronizer<E extends ProviderEvent> {

    void synchronize(E event, PersistenceProvider persistenceProvider);

}
