import cv2
import os

video_path = r"c:\Users\dbatra\Downloads\jam-video.webm"
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print(f"Error: Could not open video {video_path}")
    exit()

os.makedirs("frames", exist_ok=True)
count = 0
saved = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Save every 5th frame to get a sense of the animation
    if count % 5 == 0:
        cv2.imwrite(f"frames/frame_{saved:04d}.jpg", frame)
        saved += 1
        
    count += 1
    
    if saved >= 50: # save up to 50 frames
        break

cap.release()
print(f"Saved {saved} frames.")
