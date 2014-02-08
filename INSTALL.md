Install SERBER
--------------

The SERBER project is divided in two sub-projects, a web-based application *serving* web services ([SGCB/serber](https://github.com/SGCB/serber)) by offering them in terms of administrating, searching, creating, reading, updating and deleting registry data and a web-based application *interfacing* web services ([SGCB/serber-interface](https://github.com/SGCB/serber-interface)) by demanding them in terms of managing, searching, visualizing and debugging registry data.  The former application composes the latter application.  The serber sub-project implements a *static* site offering registry application web services, i.e., the core site.  The serber-interface sub-project is a *dynamic* site demanding registry application web services, i.e., the interface site.  Both repositories are needed for a proof of concept demonstration to be shown.

Once the repositories have been cloned to local, we need to accomplish the following steps:

1.  Entering the Play console for **SERBER web-based services**
	-   Being at `serber/` directory, clean previous sbt cache (if any) and enter the Play console from the command prompt:

			$ play clean-all
			$ play

2.  Accessing an SQL database [only if necessary]
	-   When using H2 database engine, the *H2 Console* should be started before executing the SERBER web-based services:

			[serber] $ h2-browser
	-   The *H2 Console* is started on localhost's port 8082: `http://localhost:8082`
		+   The connection configuration should match the one reflected at `serber/` directory in `conf/application.conf` file, which by default is:

				Driver Class: org.h2.Driver
				JDBC URL: jdbc:h2:mem:play
				User Name:
				Password:
		+   In case the `default` connection pool configured at `serber/` directory in `conf/application.conf` file has been changed, it should be reflected in the connection configuration above.
		+   This connection is stablished by simply clicking `Connect` button.
	-   If H2 database engine and default JDBC data source `default` are used, the database can be accessed on the *H2 Console*, though there will be nothing yet, the database schema still needs to be created.

3.  Running **SERBER web-based services** on the server
	-   From the Play console, execute the SERBER web-based services:

			[serber]$ run
	-   A web server is started on localhost's port 9000.

4.  Querying **SERBER web-based services** from the client
	-   From the browser address bar, access the SERBER web-based services:

			http://localhost:9000
		+   A message stating `Database 'default' needs evolution!` will be display.  The appropriate SQL DDL script will be generated at `serber/` directory in `/conf/evolutions/default/1.sql` file.
		+   This SQL DDL script needs to be executed on the database engine.
		+   This SQL DDL script can be executed by simply clicking `Apply this script now!` button.
		+   If H2 database engine and default JDBC data source `default` are used, the newly created database schema can be viewed on the *H2 Console*, though there will be no data yet, the database still needs to be populated.
	-   A *static* web about the SERBER project is served.  The static page can be displayed, though there is no navigation, in this case, the SERBER web-based "application" is just *serving* registry logic web services.

5.  Populating the SQL database [only if necessary]
	-   To populate the database some data SQL script needs to be executed on the database engine.  A sample data SQL script is supplied at `serber/` directory in `conf/sample.sql` file.
	-   If H2 database engine and default JDBC data source `default` is used, the sample data SQL script can be executed on the *H2 Console*, now the data is ready.

6.  Entering the Play console for **SERBER web-based interface**
	-   Being at `serber-interface/` directory, clean previous sbt cache (if any) and enter the Play console from the command prompt:

			$ play clean-all
			$ play

7.  Running **SERBER web-based interface** on the server
	-   From the Play console, execute the SERBER web-based interface:

			[serber-interface] $ run 9001
	-   A web server is started on localhost's port 9001.

8.  Querying **SERBER web-based interface** from the client
	-   From the browser address bar, access the SERBER web-based interface:

			http://localhost:9001
	-   A *dynamic* web about the SERBER project is served.  The dynamic page can be displayed and navigated, in this case, the SERBER web-based "application" is just *interfacing* registry logic web services.



### Editors, Terminals & IDEs ###

To edit, compile and run the system any text editor and terminal is more than enough, however, Play allows to generate a working Eclipse project derived from any working Play application.
