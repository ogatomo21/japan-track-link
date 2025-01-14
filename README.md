# Japan-Track-Link

## 概要

これは日本郵便・ヤマト運輸・佐川急便の荷物を一括で検索・管理できるWebアプリです。

## 使用シーン

- 荷物をおくる際に追跡リンクを短く送る
- 検索画面を一つで済ましたい
- 複数の荷物を一括管理したい
- iOSのショートカットに組み込みたい

## パラメーター

外部から使う際はr.htmlにリクエストを投げます。

### 運送会社選択ページを出したい・荷物一覧に追加したい場合

```
r.html?id={荷物の追跡番号}
```

パラメーター「id」には「1234-5678-9012」のような追跡番号を渡します。ハイフンは自動で消されるのであってもなくてもいいです。数字とハイフン以外のアルファベットや日本語が入っていた場合はホーム画面であるindex.htmlにリダイレクトされます。

## 自動でリダイレクトしたい場合

```
r.html?id={荷物の追跡番号}&type=(japan|yamato|sagawa)
```

パラメーター「id」には先程同様に追跡番号を渡します。それに加えてパラメーター「type」を指定することで各運送会社の問い合わせページに自動リダイレクトされます。typeに対応していない会社が入力された場合はホーム画面であるindex.htmlにリダイレクトされます。

## typeパラメーター対応表

- 日本郵便 → japan
- ヤマト運輸 → yamato
- 佐川急便 → sagawa
