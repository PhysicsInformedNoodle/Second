# Initialize an array of texts
$texts = @("password", "justpassword", "abcdef")

$sha1 = New-Object System.Security.Cryptography.SHA1CryptoServiceProvider

foreach ($text in $texts) {
    # Compute hash
    $hash = [BitConverter]::ToString($sha1.ComputeHash([Text.Encoding]::ASCII.GetBytes($text))).Replace('-', '')
    
    # Extract the prefix, suffix and the URL from the hash
    $prefix = $hash.Substring(0,5)
    $suffix = $hash.Substring(5)
    $url = "https://api.pwnedpasswords.com/range/$prefix"

    # Echo the text, its corresponding hash URL and suffix
    echo "--THE Text:"
    echo $text
    echo "--THE URL:"
    echo $url
    echo "--THE SHA-1 suffix:"
    echo $suffix
    echo "" # Echo an empty line between URL and next text
    echo "" # Echo another empty line for two lines spacing

    # Open the URL in the default browser
    Start-Process $url

    # Optional: introduce a delay between requests
    Start-Sleep -Milliseconds 100
}
