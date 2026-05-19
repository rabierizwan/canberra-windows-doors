#!/usr/bin/env python3
"""Rename image files in a folder to a sequential, zero-padded scheme.

Files are numbered in modification-time order, so the sequence follows
the order the images were created/edited.

Usage:
    python3 scripts/rename_images.py                       # dry run, default folder
    python3 scripts/rename_images.py --apply               # actually rename
    python3 scripts/rename_images.py DIR --prefix cwd-edited- --apply

Defaults:
    DIR     = media/CW&D_editied_images
    prefix  = cwd-edited-
"""

import argparse
import sys
from pathlib import Path

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "directory",
        nargs="?",
        default="media/CW&D_editied_images",
        help="Folder containing the images (default: media/CW&D_editied_images)",
    )
    parser.add_argument(
        "--prefix",
        default="cwd-edited-",
        help="Filename prefix for renamed files (default: cwd-edited-)",
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Perform the rename. Without this flag the script only previews.",
    )
    args = parser.parse_args()

    directory = Path(args.directory)
    if not directory.is_dir():
        print(f"Error: directory not found: {directory}", file=sys.stderr)
        return 1

    files = sorted(
        (
            p
            for p in directory.iterdir()
            if p.is_file()
            and not p.name.startswith(".")
            and p.suffix.lower() in IMAGE_EXTS
        ),
        key=lambda p: p.stat().st_mtime,
    )

    if not files:
        print(f"No image files found in: {directory}")
        return 0

    width = max(3, len(str(len(files))))

    print(f"Directory : {directory}")
    print(f"Files     : {len(files)}")
    print(f"Prefix    : {args.prefix}")
    print(f"Mode      : {'APPLY' if args.apply else 'DRY RUN (use --apply to rename)'}")
    print()

    # Build the full rename plan first so we can detect collisions before
    # touching anything.
    plan = []
    for i, src in enumerate(files, start=1):
        dst = directory / f"{args.prefix}{i:0{width}d}{src.suffix.lower()}"
        plan.append((src, dst))

    targets = {dst for _, dst in plan}
    for src, dst in plan:
        if dst.exists() and dst not in {s for s, _ in plan}:
            print(f"Error: target already exists: {dst}", file=sys.stderr)
            return 1
    if len(targets) != len(plan):
        print("Error: rename plan has duplicate targets; aborting.", file=sys.stderr)
        return 1

    for src, dst in plan:
        if src == dst:
            print(f"skip   {src.name}  (already named correctly)")
            continue
        print(f"{src.name}  ->  {dst.name}")
        if args.apply:
            src.rename(dst)

    print()
    if args.apply:
        print(f"Done. Renamed {len(files)} file(s).")
    else:
        print("Dry run complete. Re-run with --apply to perform the rename.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
