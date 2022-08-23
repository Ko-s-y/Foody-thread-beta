# Foody!

<p align="center">
<img src="https://user-images.githubusercontent.com/100200496/185188262-914d6ddc-172d-4e99-8cf8-a9f06f089069.png">
</p>

---

### アプリURL
https://vast-brushlands-89395.herokuapp.com/

---

### サービス概要

##### - Foody!開発に至った経緯
今後の飲食業界の課題の一つとして人材が挙がると思われます。

そこで私が考える対策の一つとして、新米コックの方達の着実なレベルアップと挫折率の低減です。

飲食業界で働く方達のほとんどが多忙を極めます。

新米のコックたちはインプットをしたくてもできない状況が多々あり、日々急遽対応しなくてはならないことも出てきて、休憩時間がないお店もままあります。

プロの料理人達にとって知識のインプットとアウトプットは必須だと思います。

Foody!は自分が新米コックの時にこんなのあったら良いなと思ったWebアプリです。

「料理は先輩からみて盗め」の考えを持ったレストランが今でもあるのが現状です。

聞きたくても職場の人に聞けない、そんな状況で飲食業界を去ってしまった同期の人たちが沢山いました。

そのような人たちの挫折を少しでも減らせたら。

Foody!ユーザーは肩書き、経験年数を撤廃したフラットな環境を目指して作成しました。

あえてユーザーの自己紹介機能はつけておりません。

コロナ禍で少なくなっていった別の調理ジャンルの方達との意見交流の場としても一役買ってくれると信じています。

##### - こだわったポイント
実際料理人の方達は使うデバイスはおそらくスマートフォンだと思われます。
PCとタブレット、スマートフォンでの各デバイスでの操作性を意識しレスポンシブデザインなどを対応しました。

---

### レスポンシブ対応済み
* MacOS 1024px~2000px
* Android, FireOS  769px~1023px
* iOS  380px~768px

---

### 実装予定の機能
* JQuery => Reactへの変更
* 投稿は増えて来たらpaginationを無限スクロールに変更
* AWSにデプロイ

---

### ER図
![783EB435-EBC6-4A6D-8538-581253928DE1](https://user-images.githubusercontent.com/100200496/185433655-21e8bd51-8752-4de8-82ec-f443214aadd7.png)

---

### 主な機能
* deviseによるユーザー登録,メール認証機能
* admin_user機能
* ゲストログイン機能
* お問合せ機能
* 投稿機能
* 投稿に対するいいね機能(Ajax)
* 投稿に対するブックマーク機能(Ajax)
* 投稿に対するコメント機能
* ユーザーに対するフォロー機能(Ajax)
* ユーザーに対するお知らせ機能
* 投稿,コメント,ユーザー検索機能
* エラーページの作成(404,422,500)

##### 機能補足
* お知らせ機能は一度コメントをした投稿に対しては以後全てのユーザーのコメントを通知します。
* 検索機能は3つのモデルから範囲を絞れます。1つもしくは、2つのキーワード検索が可能です。(ransackは未使用)
* フォローボタンは相互のフォロー状態により「フォローバックする」に変わります。
* フォロワー,フォロー数表示機能
* 自分以外が自分の投稿にいいね,ブックマークした数の表示機能
* お問合せは送信されるとユーザー自身と管理人にBCCで送信されます。
* 他、細かい機能や仕様はPRに記載しております。

---

### スケジュール
* クラス図作成 6/15
* 機能実装 6/16~8/18
* README 8/19
* テスト追加 8/20~

---

### 使用技術
##### バックエンド
* Ruby 2.7.5
* Rails 6.1.4

##### フロントエンド
* Bulma
* JQuery
* Canva(favicon)

##### 主要Gem
* rubocop-airbnb
* devise
* aws-sdk
* kaminari
* rails_admin

##### テスト
* rspec

##### インフラ
* mysql2 0.5(開発環境)
* heroku(本番環境)
* ActiveStorage
* amazonS3
