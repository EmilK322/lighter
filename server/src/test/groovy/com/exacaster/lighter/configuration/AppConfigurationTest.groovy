package com.exacaster.lighter.configuration

import io.micronaut.test.extensions.spock.annotation.MicronautTest
import spock.lang.Specification
import spock.lang.Subject

import javax.inject.Inject

@MicronautTest
class AppConfigurationTest extends Specification {
    @Inject
    @Subject
    AppConfiguration appConfiguration

    def "binds properties form yaml"() {
        expect:
        appConfiguration.maxRunningJobs == 5
    }

}