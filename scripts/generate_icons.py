"""Generate PWA PNG icons for Chipego AI.

Draws the same "network of nodes" motif as favicon.svg so the installed app
icon matches the in-app branding. Run: python3 scripts/generate_icons.py
"""
from __future__ import annotations

import os

from PIL import Image, ImageDraw

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public")

GREEN = (11, 122, 91)
TEAL = (10, 95, 110)
GOLD = (244, 185, 59)
WHITE = (255, 255, 255)


def lerp(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def rounded_gradient(size: int, radius_ratio: float) -> Image.Image:
    """Diagonal gradient background clipped to a rounded square."""
    grad = Image.new("RGB", (size, size))
    px = grad.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            px[x, y] = lerp(GREEN, TEAL, t)

    mask = Image.new("L", (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * radius_ratio), fill=255)

    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(grad, (0, 0), mask)
    return out


def draw_motif(img: Image.Image, size: int, inset: float = 0.0) -> None:
    d = ImageDraw.Draw(img)
    s = size

    def p(px: float, py: float) -> tuple[float, float]:
        # map 512-space coordinates into the (possibly inset) canvas
        scale = 1 - 2 * inset
        return (s * (inset + px / 512 * scale), s * (inset + py / 512 * scale))

    lw = max(2, int(s * 0.028))
    lines = [
        ((256, 150), (150, 330)),
        ((256, 150), (362, 330)),
        ((150, 330), (362, 330)),
        ((256, 150), (256, 330)),
    ]
    for a, b in lines:
        d.line([p(*a), p(*b)], fill=GOLD, width=lw)

    def circle(cx: float, cy: float, r: float, color: tuple[int, int, int]) -> None:
        c = p(cx, cy)
        rr = r / 512 * s * (1 - 2 * inset)
        d.ellipse([c[0] - rr, c[1] - rr, c[0] + rr, c[1] + rr], fill=color)

    circle(256, 150, 42, WHITE)
    circle(150, 330, 42, WHITE)
    circle(362, 330, 42, WHITE)
    circle(256, 330, 30, GOLD)


def make(size: int, name: str, maskable: bool = False) -> None:
    # Maskable icons need safe padding so nothing important is clipped.
    radius = 0.30 if maskable else 0.22
    img = rounded_gradient(size, radius)
    draw_motif(img, size, inset=0.12 if maskable else 0.0)
    path = os.path.abspath(os.path.join(OUT_DIR, name))
    img.save(path)
    print("wrote", path)


if __name__ == "__main__":
    make(192, "icon-192.png")
    make(512, "icon-512.png")
    make(512, "icon-maskable-512.png", maskable=True)
    # apple touch icon
    make(180, "apple-touch-icon.png")
