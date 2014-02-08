SERBER
======

**SERBER** (SErvicio de Registro de Bibliotecas y Entidades Relacionadas, Registry Service for Libraries and Related Organizations) is a system that faithfully implements a data model based on the ISO 2146:2010 scheme considering its five entities: the main class Registry Object, and the classes Parties (persons and organizations), Activities, Collections, and Services.  This data model has proven successful and perfect for encapsulating registry data from different sources (origin) and, hence, of different kinds (nature).  It is essential to emphasize the fact that the system aims to be a general-purpose tool around the registry application services, it should not be limited to the library sector as it could potentially be used to build a registry application service for any other community.

**SERBER core** provides a registry application by means of RESTful web services.  This registry application allows for administrating, searching, creating, reading, updating and deleting registry data via web.  On the other hand, the RESTful web services allow the registry application to occur optimally over the HTTP protocol.  An API of RESTful web services is provided for exchanges of information to take place with third parties (registry interaction).

**SERBER interface** provides a registry interaction by means of a responsive web interface.  This registry interaction allows for managing, searching, visualizing and debugging registry data via web.  On the other hand, the responsive web interface allows the registry interaction to occur optimally on any device (mobile, tablet, laptop or desktop).

**SERBER** has been built with a free & open source software approach in mind.  We would like to encourage contribution and adoption by easing both the collaboration with other developers and the interchangeability of different components.



Development Environment & Associated Technologies
-------------------------------------------------

The development environment selected for this project is Play Framework ([http://www.playframework.com](http://www.playframework.com)): A modern and scalable Java/Scala stack to build web applications.  Play provides the MVC architectural pattern, RESTful framework, XML/JSON parsers and marshallers, persistence API integration, JavaScript and many other modern and well accepted web technologies.

The database tier is implemented by means of an SQL database platform with a convenient database engine.  For managing connection pools Play provides a JDBC plugin which by default uses a JDBC driver for the H2 RDBMS.  For integration with the persistence API Play provides several alternative data access libraries.  These can be configured at `serber/` directory in `conf/application.conf` file.  At the moment, SERBER is configured to use H2 in-memory database as its default RDBMS and Ebean as its default ORM.

The interaction tier is implemented by means of the MVVM architectural pattern where the role of the "middle-man" is played by the ViewModel.  This pattern strengthens the decoupling between the user interface and the domain model, let alone the development environment.  At the moment, SERBER implements such pattern by means of KnockoutJS and AJAX.

The SERBER project is divided in two sub-projects, a web-based application *serving* web services ([SGCB/serber](https://github.com/SGCB/serber)) by offering them in terms of administrating, searching, creating, reading, updating and deleting registry data and a web-based application *interfacing* web services ([SGCB/serber-interface](https://github.com/SGCB/serber-interface)) by demanding them in terms of managing, searching, visualizing and debugging registry data.  The former application composes the latter application.  The serber sub-project implements a *static* site offering registry application web services, i.e., the core site.  The serber-interface sub-project is a *dynamic* site demanding registry application web services, i.e., the interface site.  Both repositories are needed for a proof of concept demonstration to be shown.

To compile and run these sub-projects, it is mandatory to install Play which can be downloaded from its web site ([http://www.playframework.com/download](http://www.playframework.com/download)).  Currently, SERBER uses Play version 2.2.1: [http://downloads.typesafe.com/play/2.2.1/play-2.2.1.zip](http://downloads.typesafe.com/play/2.2.1/play-2.2.1.zip).

Prerequisites: JDK 6 or later.

Installing Play Framework: [http://www.playframework.com/documentation/2.2.1/Installing](http://www.playframework.com/documentation/2.2.1/Installing)



Install
-------

Wanting to get SERBER up and running? Please, take a look at `INSTALL.md`.



Contributing
------------

Wanting to participate in SERBER development? Please, take a look at `CONTRIBUTING.md`.



Authors
-------

**Carlos Ramírez**

-   [https://github.com/medios](https://github.com/medios)

**Pablo Ripollés**

-   [https://github.com/protolab-org](https://github.com/protolab-org)



Copyright and License
---------------------

Copyright 2013 Spanish Ministry of Education, Culture and Sport

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European Commission - subsequent versions of the EUPL (the "Licence");
You may not use this work except in compliance with the License.
You may obtain a copy of the License at:

[http://ec.europa.eu/idabc/servlets/Docbb6d.pdf?id=31979](http://ec.europa.eu/idabc/servlets/Docbb6d.pdf?id=31979)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
