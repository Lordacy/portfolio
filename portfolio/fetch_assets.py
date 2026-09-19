import os, sys, urllib.request, concurrent.futures

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")
os.makedirs(OUT, exist_ok=True)

# (filename, url)
ITEMS = [
    ("ai-01.jpg", "https://sc04.alicdn.com/kf/Af35e278fb7384c3282ab2fc2ad46ede8K.jpg"),
    ("ai-02.jpg", "https://sc04.alicdn.com/kf/A420c06ea26ad4a6f9a0438e08815fd93j.jpg"),
    ("ai-03.jpg", "https://sc04.alicdn.com/kf/Ac4a7959f1943489bb5087f16e204ba5dt.jpg"),
    ("ai-04.jpg", "https://sc04.alicdn.com/kf/A94404e0be6d0471e9938ee168d5f7293D.jpg"),
    ("ai-05.jpg", "https://sc04.alicdn.com/kf/Ae98c11ddd67a4d12b4ed0c8e97137ba0m.jpg"),
    ("ai-06.jpg", "https://sc04.alicdn.com/kf/A4d5978d77fde4b64927d1f2c4cf3da22E.jpg"),
    ("pdp-headphone.jpg", "https://sc04.alicdn.com/kf/A0c006c7e8b2647fb8c1183b58808d7f0o.jpg"),
    ("pdp-mouse.jpg", "https://sc04.alicdn.com/kf/A41fb9abce43442e68d8af37eb2c3a542m.jpg"),
    ("ppt-01.jpg", "https://sc04.alicdn.com/kf/A2b94e0d855b24c70b26430fb7b33a103f.jpg"),
    ("ppt-02.jpg", "https://sc04.alicdn.com/kf/A96a7f3a2a9454d3eab915a368d9b6f52k.jpg"),
    ("logic-map.jpg", "https://sc04.alicdn.com/kf/A7190107adc874f388f9e8283d4857fb7H.jpg"),
    ("wordcloud.jpg", "https://sc04.alicdn.com/kf/A9a7060fb658d472f8242b67630f9c40eO.jpg"),
    ("uml-activity.jpg", "https://sc04.alicdn.com/kf/Ab09c71e6ce7049389bcc8ddc05b7f7423.jpg"),
    ("uml-class.jpg", "https://sc04.alicdn.com/kf/A06212092b12a4f27b601126cf97118c82.jpg"),
    ("uml-collab.jpg", "https://sc04.alicdn.com/kf/A71bc1728083c4a5d924fe3e281f2e8e8v.jpg"),
    ("uml-usecase.jpg", "https://sc04.alicdn.com/kf/A6de91cbef5774cc2820d5faba4d5dcadB.jpg"),
    ("wechat-ops.jpg", "https://sc04.alicdn.com/kf/Ae4832b68bea84aa58a91cc185cf0047d7.jpg"),
    ("flower-base.jpg", "https://sc04.alicdn.com/kf/A9531712cc0a044f182e95d3277b52335D.jpg"),
    ("flower-category.jpg", "https://sc04.alicdn.com/kf/A9978b2fb427d495d828e70e06caca3b6b.jpg"),
    ("viz-01.jpg", "https://sc04.alicdn.com/kf/Aa9df18c625dc49a998632005dd59448cY.jpg"),
]

HDRS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Referer": "https://www.alibaba.com/",
}

def grab(item):
    name, url = item
    dest = os.path.join(OUT, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 2048:
        return (name, os.path.getsize(dest), "cached")
    last = ""
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=HDRS)
            with urllib.request.urlopen(req, timeout=50) as r:
                data = r.read()
            if len(data) < 2048:
                last = "too small %d" % len(data)
                continue
            with open(dest, "wb") as f:
                f.write(data)
            return (name, len(data), "ok")
        except Exception as e:
            last = str(e)[:70]
    return (name, 0, "FAIL " + last)

with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
    results = list(ex.map(grab, ITEMS))

ok = 0
for name, size, status in results:
    print("%-22s %9d  %s" % (name, size, status))
    if status in ("ok", "cached"):
        ok += 1
print("---")
print("SUCCESS %d / %d" % (ok, len(ITEMS)))
