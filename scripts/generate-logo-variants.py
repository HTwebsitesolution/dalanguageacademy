from pathlib import Path

from PIL import Image

SRC = Path("public/images/Logo/DA Language Academy logo.png")
OUT_DIR = Path("public/images/logo")
OUT_DIR.mkdir(parents=True, exist_ok=True)

TOLERANCE = 28


def remove_near_white(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r >= 255 - TOLERANCE and g >= 255 - TOLERANCE and b >= 255 - TOLERANCE:
                px[x, y] = (255, 255, 255, 0)
    return img


def content_bbox(img: Image.Image, pad: int = 12):
    px = img.load()
    w, h = img.size

    def is_bg(r, g, b, a):
        return a < 8 or (r > 240 and g > 240 and b > 240)

    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if not is_bg(r, g, b, a):
                minx = min(minx, x)
                miny = min(miny, y)
                maxx = max(maxx, x)
                maxy = max(maxy, y)
    return (
        max(0, minx - pad),
        max(0, miny - pad),
        min(w, maxx + pad),
        min(h, maxy + pad),
    )


def trim(img: Image.Image, pad: int = 12) -> Image.Image:
    return img.crop(content_bbox(img, pad))


def make_mark(img: Image.Image) -> Image.Image:
    w, h = img.size
    left = int(w * 0.18)
    top = int(h * 0.02)
    right = int(w * 0.82)
    bottom = int(h * 0.88)
    mark = img.crop((left, top, right, bottom))
    return trim(mark, pad=8)


def make_footer(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 12:
                continue
            if g > r + 18 and g > b + 18 and g > 120:
                px[x, y] = (225, 195, 122, a)
            else:
                px[x, y] = (255, 255, 255, a)
    return rgba


def main() -> None:
    source = Image.open(SRC).convert("RGBA")
    trimmed = trim(source)
    transparent = remove_near_white(trimmed.copy())

    full = Image.new("RGBA", trimmed.size, (255, 255, 255, 255))
    full.alpha_composite(trimmed)
    full.save(OUT_DIR / "da-logo-full.png", optimize=True)

    transparent.save(OUT_DIR / "da-logo-transparent.png", optimize=True)

    mark = make_mark(transparent)
    mark.save(OUT_DIR / "da-logo-mark.png", optimize=True)

    footer = make_footer(transparent)
    footer.save(OUT_DIR / "da-logo-footer.png", optimize=True)

    for name in [
        "da-logo-full.png",
        "da-logo-mark.png",
        "da-logo-transparent.png",
        "da-logo-footer.png",
    ]:
        im = Image.open(OUT_DIR / name)
        print(f"{name}: {im.size[0]}x{im.size[1]}")


if __name__ == "__main__":
    main()
