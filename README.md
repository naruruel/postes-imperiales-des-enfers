# 地獄帝国郵政局 — Postes Impériales des Enfers

地獄帝国郵政局の沿革と切手目録（日本語・English・Français・Deutsch）。
OpenSea コレクション：https://opensea.io/collection/postes-imperiales-des-enfers

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | ページ本体 |
| `assets/history.js` | 沿革（四言語確定稿） |
| `assets/catalogue.js` | 切手目録 12 種（解説・額面・消印・透かし紋様） |
| `assets/app.js` | 言語切替・章送り・目録の詳細表示 |
| `assets/style.css` | 意匠 |
| `images/specimen/` | 見本刷り（SPECIMEN）図版 |

## 見本刷り図版の置き方

`images/specimen/` に次の名前で置くと、仮枠が自動的に図版へ差し替わります。

```
{通し番号}_{版}.jpg
通し番号：001〜009、010（A クラポ）、011（B グリマルキン）、012（C ミュカレ）
版：original（オリジナル） / mint（未使用版） / used（使用済み版）
例：001_original.jpg　001_mint.jpg　001_used.jpg
```

言語はページ右上で切り替えられます。`?lang=ja|en|fr|de` を付けたURLで特定の言語から開くこともできます。

© 2026 画天使 なるるえる / naruruel
