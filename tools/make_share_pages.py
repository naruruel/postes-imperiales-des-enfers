"""切手ごとの「入口の頁」を作る。

  s/{番号}-{版}/index.html   例：s/B-mint/  s/009-used/
  images/share/{通し番号}_{版}.jpg   リンクのプレビュー用 1200×630

X などにリンクを貼ると、その切手の図版がプレビューに出る。
開いた人は、すぐに目録の該当頁（#B-mint など）へ移る。

使い方（保管庫の一番上で）：  python3 tools/make_share_pages.py
図版を差し替えたときは、もう一度実行して出来たファイルを反映する。
"""
import html, json, os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://naruruel.github.io/postes-imperiales-des-enfers/"
INK = (14, 12, 10)

ED = {
    "original": ("原画", "Original Art"),
    "mint": ("未使用版", "Mint Edition"),
    "used": ("使用済み版", "Used Edition"),
}

src = open(os.path.join(ROOT, "assets", "catalogue.js"), encoding="utf-8").read()
cat = json.loads(src[src.index("["): src.rindex("]") + 1])

os.makedirs(os.path.join(ROOT, "images", "share"), exist_ok=True)


def share_image(file, ed):
    """見本刷り図版（4:3）を、墨色の地に収めた 1200×630 の絵にする。"""
    im = Image.open(os.path.join(ROOT, "images", "specimen", f"{file}_{ed}.jpg")).convert("RGB")
    h = 600
    w = round(im.width * h / im.height)
    im = im.resize((w, h), Image.LANCZOS)
    card = Image.new("RGB", (1200, 630), INK)
    card.paste(im, ((1200 - w) // 2, 15))
    out = f"images/share/{file}_{ed}.jpg"
    card.save(os.path.join(ROOT, out), quality=88, optimize=True, progressive=True)
    return out


PAGE = """<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:site_name" content="地獄帝国郵政局 — Postes Impériales des Enfers">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{alt}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{img}">
<meta name="theme-color" content="#0e0c0a">
<link rel="icon" type="image/png" href="../../images/emblem-96.png">
<style>
  html,body{{margin:0;background:#0e0c0a;color:#e9e0cc;font-family:"Hiragino Mincho ProN","Yu Mincho",serif}}
  main{{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:16px;text-align:center}}
  img{{max-width:min(560px,100%);height:auto;border:1px solid #3a3127}}
  a{{color:#e0c07e}}
</style>
<script>location.replace("../../#{hash}");</script>
</head>
<body>
<main>
  <img src="../../images/specimen/{file}_{ed}.jpg" width="1200" height="900" alt="{alt}">
  <p>{name_ja}（{ed_ja}）— {name_la}, {ed_en}</p>
  <p><a href="../../#{hash}">目録の頁へ ／ Open in the catalogue</a></p>
</main>
</body>
</html>
"""

made = []
for it in cat:
    no, file = it["no"], it["file"]
    name_ja = it["name"]["ja"]
    name_la = it["name"]["latin"].split(" (")[0]
    for ed, (ed_ja, ed_en) in ED.items():
        key = f"{no}-{ed}"
        img = BASE + share_image(file, ed)
        title = f"No.{no} {name_ja}（{ed_ja}）｜地獄帝国郵政局"
        desc = f"{name_la} — {ed_en}. Postes Impériales des Enfers 公式目録"
        d = os.path.join(ROOT, "s", key)
        os.makedirs(d, exist_ok=True)
        e = html.escape
        with open(os.path.join(d, "index.html"), "w", encoding="utf-8") as f:
            f.write(PAGE.format(
                title=e(title), desc=e(desc), url=e(f"{BASE}s/{key}/"), img=e(img),
                alt=e(f"{name_ja}（{ed_ja}）見本刷り"), hash=key, file=file, ed=ed,
                name_ja=e(name_ja), ed_ja=ed_ja, name_la=e(name_la), ed_en=ed_en))
        made.append(key)

print(len(made), "pages:", " ".join(made))
