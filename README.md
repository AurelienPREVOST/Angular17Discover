Discovering Angular 17 with OpenClassRoom tutorial (deprecated tutorial parts explain in Readme)  

Formation link:  
https://openclassrooms.com/fr/courses/7471261-debutez-avec-angular/  


WARNING : at the time I write Angular 17 is not in long time support but in active mode. Some bugs will be corrected in the next months.  
Please look at the documentation : https://angular.dev/  
Especialy   => about Routing, you can find answer here : https://angular.dev/guide/routing/common-router-tasks  
            => about app.module.ts , does not exist anymore in standalone, choose no-standalone when you create your new app if you want it. app.config.ts does the "same" role now but do not write inside this file just as if it was an old app.module.ts file, it wont work.  
            => aboute routing, now since Angular 17 you have an app.route.ts file present in your application. So do not create a "app.routing.ts" file  
            => about 'fr-FR' for example about date when you want than "january" become "janvier"...well...for now it does not work. I hope later  

Open Class Room tutorial is deprecated and work on Angular V12. In January 2024 date of this Repo we work on V17 where standalone is the rule for new project.

First check your node version and install it if not on your setup allready.
Then install Angular in following this command line:
```npm i -g @angular/cli```

![installation angular](https://github.com/AurelienPREVOST/Angular17Discover/assets/102169301/5b17d098-4e3b-4826-be1b-b6da72e16e36)

Lets create a new app:
![new app](https://github.com/AurelienPREVOST/Angular17Discover/assets/102169301/31c74dd7-1d79-482a-9d7c-12e63c8ee8d6)

Build first Component /!\ in V17 you must add in the "app.components.ts" array all your componennts and importing them.

more explanations here (Juan IWK3 answer): https://stackoverflow.com/questions/77488404/how-to-display-components-using-their-selector-in-angular-17
![FirstComponent](https://github.com/AurelienPREVOST/Angular17Discover/assets/102169301/a132979e-1bd3-4311-b454-8656ed9a9ab0)
