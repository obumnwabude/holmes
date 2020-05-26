[![Build Status](https://travis-ci.com/obumnwabude/holmes.svg?branch=master)](https://travis-ci.com/obumnwabude/holmes) [![Maintainability](https://api.codeclimate.com/v1/badges/5de4043dc3503d9ac8f3/maintainability)](https://codeclimate.com/github/obumnwabude/holmes-backend/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5de4043dc3503d9ac8f3/test_coverage)](https://codeclimate.com/github/obumnwabude/holmes-backend/test_coverage)

# Holmes

Holmes is an emulation of an example structure of a real world estate. This project contains the code for the backend of Holmes.

The real world estate in view is that which is made up of various residential houses. In the estate, these houses are streets and streets are found in districts. Implied is: there are various residential houses in a street and various streets in a district and various districts in the estate.

**Holmes** emulates the above real world estate example structure with the following notable
1) To access a house, one needs its address.
2) The address of the house is made up of the house, its street and its district in holmes.
2) Various Streets can be found in a given district.
3) Various Districts can be found in **Holmes**.

This project provides the necessary APIs for accessing houses in a street, streets in a district and the districts in **Holmes**.

This project is hosted with [Vercel](https://vercel.com) at https://holmes.now.sh

Relevant to this project:
* The frontend was made with [Angular](https://angular.io)
* The backend service used was [NodeJS](https://nodejs.org/)

