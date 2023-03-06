##
<img width="601" alt="image" src="https://user-images.githubusercontent.com/115442046/210326056-5fb8f71c-0e93-40f7-8a0d-43a2c5767159.png">

## Overview
- You can memorize pokemon's english name and its origin with picture.
- You can check your understanding with quiz.  

## URL
- https://can-you-name-all-pokemon.net/

## Why I created this
- I came across [PokeAPI](https://pokeapi.co/), learned that each pokemon has its particular origin for their english name, and came to think that I want to create quiz app with it.  
I also thought it will be good english learning material for kids because comparatively high level words are used for their english name.  
That's why I created this app.  

## Technologies
- Next.js(TypeScript)
- Firebase(Firestore, Hosting)
- tailwind CSS
- Swiper.js
- react-rewards

I'm using original json data for pokemon data, with API provider function of Next.js.  
Firestore is used for providing ranking function, but currently it is set read-only.  

## The amount of time for creation

Data cretion： 5h  
Coding 115h  
Total：120h  
Release：August, 2022  

Refactoring： 30h  

I made this app after I have studied React and Next.js.  
After lauching it, I did refactoring with Atomic Design.  

## Future improvements
- Adding rest of pokemon(No.152 ~ No.1008)  
- 現在ポケモンデータは開発環境、本番環境ともに一部をNext.jsのAPI機能を利用して取得しているが、本番環境をFirestoreから取得する方式に改修  
- At now, pokemon data is provided with Next.js API route for both DEV and PROD, but I will change it to be provided by Firestore for PROD  
This is because of the limitation for the request amount Firestore free plan offers(50,000 documents per day).  
For DEV, Next.js builds app every time I change codes and consumes 151 documents for the pokemon data, so it sometimes reaches request limitation and that's why I get data by using API route.  
However, for PROD, app is build with server side rendered and needs to get data only one time, so I realized that this issue doesn't hold true for the PROD.  
- Write test codes  
- CI/CD with GitHub Actions  
- Make the number of questions selectable  
- Multilingual support  
- Add test format(multiple-choice, short answer)  
- Improve SEO(because currently there is no access to this app)

