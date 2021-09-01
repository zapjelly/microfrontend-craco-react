# Run time integration between mfe1 and mfe2

mfe1 exposes button code which is access by mfe2 using craco and module-federation.

help from following articles

- https://www.linkedin.com/pulse/microfrontends-create-react-app-without-eject-using-rany/
- https://www.linkedin.com/pulse/micro-frontends-hands-on-example-using-react-webpack-rany
- https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
- https://libraries.io/npm/craco-module-federation

Issue:
with craco modulefederation
unable to get shared working

shared: [
        { react: { requiredVersion: deps.react, singleton: true } },
        { "react-dom": { requiredVersion: deps["react-dom"], singleton: true }},
        { "react-router-dom": { requiredVersion: deps["react-router-dom"], singleton: true }},
      ],

https://blog.bredvid.no/micro-frontends-with-module-federation-e4ed75fcc328
