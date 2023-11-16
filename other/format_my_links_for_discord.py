# FINISH EDITIGN THIS SO THAT YOU FORMAT GENERAL LINKS AND YOUTUBE LINSK IN A PERSONALIZED WAY


import youtube_dl

def get_video_title(url):
    with youtube_dl.YoutubeDL({'quiet': True}) as ydl:
        try:
            video_info = ydl.extract_info(url, download=False)
            return video_info.get('title', 'No Title Found')
        except Exception as e:
            return 'Error Fetching Title'

def format_links(file_path):
    with open(file_path, 'r') as file:
        links = file.readlines()

    for link in links:
        link = link.strip()
        title = get_video_title(link)
        formatted_string = f"[{title}]({link})"
        print(formatted_string)

# Replace 'your_file.txt' with the path to your text file
format_links('your_file.txt')

