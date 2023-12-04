
import requests
from bs4 import BeautifulSoup

def get_mp3_links(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    mp3_links = [a['href'] for a in soup.find_all('a', href=True) if a['href'].endswith('.mp3')]

    return mp3_links

# use it like this


url = 'https://www.google.com' # replace with the URL you want

mp3_links = get_mp3_links(url)

# print each mp3 link
for link in mp3_links:
    print(link)
