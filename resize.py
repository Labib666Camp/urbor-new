import os
from PIL import Image

team_dir = r"h:\competitions\Urbor\website\public\assets\teams"
files = ["RITU.png", "LABIB.png", "SADIA.png", "SHAHRIAR.png"]

for file in files:
    file_path = os.path.join(team_dir, file)
    if os.path.exists(file_path):
        img = Image.open(file_path)
        # Convert to RGB (in case of RGBA) to save as WebP or JPEG
        img = img.convert("RGB")
        # Resize to max 600px width/height while maintaining aspect ratio
        img.thumbnail((600, 800), Image.Resampling.LANCZOS)
        
        # Save as webp
        webp_path = os.path.join(team_dir, file.replace(".png", ".webp"))
        img.save(webp_path, "WEBP", quality=80)
        print(f"Saved {webp_path}")
    else:
        print(f"Not found: {file_path}")
