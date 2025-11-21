### Getting Start

Cloneしたあと、以下を実行

- dockerを起動
- [directus/README.md](directus/README.md)の手順の前半を実行
- [build-lume/README.md](build-lume/README.md)の手順を実行
- directus/README.mdの手順の後半を実行
- http://0.0.0.0:8055/ へアクセスする

Directusのコンソールで、以下の型で取得できるコレクションを作る。
コレクションを作ったあと、Directusのコンソールの設定 > Access Policies 画面でPublishルールに作ったコレクションを追加する。
これはLumeからDirectus SDKを利用して接続する際の認証を不要とするために必要。

```typescript
interface ReleaseNote {
    id: number;
    Title: string;
    ReleaseDate: string;
    Contents: string;
}
```
![screen](screen.png)

Directusのコンソールで、Flowを作る。

![flow](flow.png)

DirectusのContentエディタではボタンが表示される。

![build](build.png)
