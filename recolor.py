from PIL import Image
import numpy as np

# Load your image
image_path = "1c05ddec-2010-4a5b-98b7-756c55ba87b9.png"  # update path if needed
img = Image.open(image_path).convert("RGBA")

# Convert to numpy array
img_np = np.array(img)
r, g, b, a = img_np[..., 0], img_np[..., 1], img_np[..., 2], img_np[..., 3]

# Shift the gold tones toward neon cyan
cyan_img = np.stack((g * 0.4, g * 1.5, b * 2.0, a), axis=-1)
cyan_img = np.clip(cyan_img, 0, 255).astype(np.uint8)

# Save the new image
final_img = Image.fromarray(cyan_img, "RGBA")
final_img.save("chartisan_neon_cyan.png")

print("✅ Done! Saved as chartisan_neon_cyan.png")
