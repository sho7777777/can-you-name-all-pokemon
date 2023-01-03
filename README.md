##
<img width="601" alt="image" src="https://user-images.githubusercontent.com/115442046/210326056-5fb8f71c-0e93-40f7-8a0d-43a2c5767159.png">

## アプリ概要
- ポケモンの英語名とその由来をイラストとともに暗記することができます。
- クイズ機能を利用して英語名の確認が可能です。

## URL
- https://can-you-name-all-pokemon.net/

## 作成理由
- [PokeAPI](https://pokeapi.co/)の存在、及びポケモンの英語名にはそれぞれ由来があるということを知り、これを利用して英語名のクイズを作りたいと思いました。  
また、英語名には比較的レベルの高い単語が使われているため、子ども向けに良い英語の勉強になるのではないかと考えました。

## 使用技術
- Next.js(TypeScript)
- Firebase（Firestore, ホスティング）
- tailwind CSS
- Swiper.js
- react-rewards

ポケモンデータはNext.jsのAPI機能を利用して自作のjsonデータを取得しています。
Firestoreはランキング機能使用しておりますが、現在読み取りのみ許可しております。

## 作成時間

データ作成： 5h
実装： 115h
合計：120h
作成時期：2022年8月

リファクタリング： 30h

- ReactとNext.jsの勉強をした後に作成しました。
- その後、Atomic Designを意識したリファクタリングを行いました。

## 改善点
- 残りのポケモン（No.152 ~ No.1008）に関しても対応
- ビルド時に時間がかかっており、ポケモンの数が増加するにつれてビルド時間の許容範囲を超えるようであればFireStoreからデータを取得する方式に変更
- テストコードを書く
- GitHub Actionsを利用したCI/CD
- クイズの出題数の変更
- 多言語対応
- テスト形式の拡大（選択式、入力式）
- SEO対策

