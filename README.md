# holmes-backend

Holmes is an emulation of an example structure of a real world estate. This project contains the code for the backend of Holmes.

The real world estate in view is that which is made up of various residential houses. In the estate, these houses should be easily accessed via their addresses.  To access a house or its address, one needs to know its street and then the district in 
which that street is found before it can be located in the estate. Implied is there are various residential houses in a street and various streets in a districts and in a district and various districts in the estate.

**Holmes** emulates the above real world estate example structure with the following notable
1) To access a house, one needs its address.
2) The address of the house is made up of the house, its street and its district in holmes.
2) Various Streets can be found in a given district.
3) Various Districts can be found in **Holmes**.

This project provides the necessary APIs for accessing a house (it's address), houses in a street, streets in a district and the districts in **Holmes**.

Relevant to this project:
* The backend service used was [NodeJS](https://nodejs.org/)/[Express](https://expressjs.com/)
* The database used was [PostgreSQL](https://www.postgresql.org/)
* The linting tool used was [ESlint](https://eslint.org/)
* The style guide used in linting was [airbnb](https://github.com/airbnb/javascript)
* The testing framework used was [Jasmine](https://jasmine.github.io/)
* The Git workflow design used was [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 
* The Git naming conventions used were those of [Andela](https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices)
