"""Generate DA monogram favicons matching the navbar style."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT_DIR = Path("app")
BRAND_NAVY = "#182a5b"
WHITE = "#ffffff"


def draw_monogram(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    inset = max(2, round(size * 0.08))
    radius = max(6, round(size * 0.22))
    draw.rounded_rectangle(
        (inset, inset, size - inset, size - inset),
        radius=radius,
        fill=BRAND_NAVY,
    )

    font_size = max(10, round(size * 0.34))
    try:
        font = ImageFont.truetype("arialbd.ttf", font_size)
    except OSError:
        font = ImageFont.load_default()

    text = "DA"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1]
    draw.text((x, y), text, fill=WHITE, font=font)

    return img


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    icon = draw_monogram(32)
    icon.save(OUT_DIR / "icon.png", optimize=True)

    apple = draw_monogram(180)
    apple.save(OUT_DIR / "apple-icon.png", optimize=True)

    # Classic favicon.ico with 16 and 32px sizes
    favicon_16 = draw_monogram(16)
    favicon_32 = draw_monogram(32)
    favicon_32.save(
        OUT_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32)],
        append_images=[favicon_16],
    )

    print("Wrote app/icon.png, app/apple-icon.png, app/favicon.ico")


if __name__ == "__main__":
    main()
