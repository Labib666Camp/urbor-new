import os
import subprocess
from PIL import Image

assets_dir = r"h:\competitions\Urbor\website\public\assets"

def compress_image(filepath):
    try:
        size_bytes = os.path.getsize(filepath)
        if size_bytes < 500 * 1024:
            return # Skip if already small (<500KB)

        img = Image.open(filepath)
        # Resize if very large
        img.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
        
        # Save over original format
        if filepath.lower().endswith('.png'):
            img.save(filepath, optimize=True)
        elif filepath.lower().endswith(('.jpg', '.jpeg')):
            # Convert to RGB if necessary
            img = img.convert("RGB")
            img.save(filepath, quality=80, optimize=True)
        print(f"Compressed image: {filepath}")
    except Exception as e:
        print(f"Failed to compress {filepath}: {e}")

def compress_video(filepath):
    try:
        size_bytes = os.path.getsize(filepath)
        if size_bytes < 2 * 1024 * 1024:
            return # Skip if already small (<2MB)

        tmp_path = filepath + ".tmp.mp4"
        # use ffmpeg to compress. -vcodec libx264 -crf 28 -preset fast
        cmd = [
            "ffmpeg", "-y", "-i", filepath,
            "-vcodec", "libx264", "-crf", "28", "-preset", "fast",
            "-vf", "scale='min(1280,iw)':-2", # scale down to 720p max
            "-an", # remove audio to save space (since most are background videos)
            tmp_path
        ]
        
        # Check if the video has audio and if we should remove it? Background videos usually have no audio.
        # Let's keep audio just in case: removing `-an` and using `-acodec aac -b:a 128k`
        cmd = [
            "ffmpeg", "-y", "-i", filepath,
            "-vcodec", "libx264", "-crf", "28", "-preset", "fast",
            "-vf", "scale='min(1280,iw)':-2",
            "-acodec", "aac", "-b:a", "128k",
            tmp_path
        ]
        
        result = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if result.returncode == 0:
            os.replace(tmp_path, filepath)
            print(f"Compressed video: {filepath}")
        else:
            if os.path.exists(tmp_path):
                os.remove(tmp_path)
    except Exception as e:
        print(f"Failed to compress {filepath}: {e}")

for root, _, files in os.walk(assets_dir):
    for file in files:
        filepath = os.path.join(root, file)
        ext = file.lower().split('.')[-1]
        
        if ext in ['png', 'jpg', 'jpeg', 'webp']:
            compress_image(filepath)
        elif ext in ['mp4', 'webm', 'mov']:
            compress_video(filepath)

print("Asset compression complete.")
