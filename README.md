[![Build Status](https://codefirst.iut.uca.fr/api/badges/React-if/React-eat/status.svg)](https://codefirst.iut.uca.fr/React-if/React-eat)

[![Maintainability Rating](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=sqale_rating&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Reliability Rating](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=reliability_rating&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Security Rating](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=security_rating&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)

[![Coverage](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=coverage&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Lines of Code](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=ncloc&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)

[![Bugs](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=bugs&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Code Smells](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=code_smells&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Duplicated Lines (%)](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=duplicated_lines_density&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Security Hotspots](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=security_hotspots&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Technical Debt](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=sqale_index&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)
[![Vulnerabilities](https://codefirst.iut.uca.fr/sonar/api/project_badges/measure?project=React-eat&metric=vulnerabilities&token=622beada19cf5b82499e0d66dc7759ee99299e0c)](https://codefirst.iut.uca.fr/sonar/dashboard?id=React-eat)

# React-eat

## Install

In the ``Sources`` directory, execute following commands to install and launch the expo server.
```shell
npm install
npm start
```

## 📝 Purpose

React-Eat is another application to order some foods on your mobile. You can see restaurants, add their articles in your basket and manage articles of your basket. In the ``Settings`` screen, you can edit your nickname.

## 🛠 Languages & tools

![skills](https://skillicons.dev/icons?i=react,vscode)

## 🖊️ Versions 

- [React Native](https://reactnative.dev/): 0.7

## ⚙️ Architecture

### Navigation

The first component of the app is a Bottom Bar Navigation, that allow to navigate between Home, Basket and Settings. In the ``Home`` page, there is an other navigation, with Stack Navigation. So when you click on a restaurant, the app navigate to its details. Nest Stack navigation in the Bottom Bar navigation allow the user to go on a details of a restaurant, keeping access to other tab.

### Redux

Restaurant list, basket and the nickname are stored with redux.

### AsyncStorage

Basket is stored in AsyncStorage, to be saved closind the app and opening later.

## 📍 Sketchs

| Home | Details |
| --- | --- |
| ![](./Documentation/sketchs/homescreen.drawio.png) | ![](./Documentation/sketchs/restaurantscreen.drawio.png) |

| Basket | Settings |
| --- | --- |
| ![](./Documentation/sketchs/basketscreen.drawio.png) | ![](./Documentation/sketchs/settingsscreen.drawio.png) |

## ✍️ Credits

* Co-author [Mathis Ribémont](https://github.com/TEDDAC)
* Co-author [Valentin Clergue](https://github.com/HandyS11)