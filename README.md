NEXT_PUBLIC_VAPID_KEY 
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN 
NEXT_PUBLIC_FIREBASE_PROJECT_ID 
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET 
NEXT_PUBLIC_FIREBASE_MESSAGING_ID 
NEXT_PUBLIC_FIREBASE_APP_ID 
NEXT_PUBLIC_FIREBASE_SERVER_KEY
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID


PoC: 

Recommend the ideal router approach (Page Router vs App Router vs React Router) that satisfies all the below requirements and demo the app.



Requirements: 

Functional
Core app must load the base path and the route till the workspace name —> https://canvassit1.ebiz.verizon.com/convergedui/system_performance
Workspace will have to load the child routes or nested routes after the core app route —> https://canvassit1.ebiz.verizon.com/convergedui/system_performance/market_reports
Child routes can be bookmarked and refreshed to the exact page —> https://canvassit1.ebiz.verizon.com/convergedui/system_performance/market_reports
Core app should not maintain all the child routes or child app folder structure
Child apps must be loaded via Module Federation remotely
Child apps may have nested child apps which are module federated themselves
Framework 
Recommend the UI framework for the Host and Child apps (NextJS or ReactJS)


Nomenclature:

Host / Core --> Converged UI Core which will host all workspaces and their MFEs

Workspace / View / App / Child App --> Ex: System Performance, Topology Visualizer, Landlord Portal

MFE --> Micro front-end within the Workspaces --> Ex: Market Report (SP), Audit Trends (SP), KPI Details (SP), Map View (TV)
