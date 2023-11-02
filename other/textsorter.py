import re
import os

def sort_by_first_digit(s):
    # Extract the first digit from the string
    match = re.search(r'\d', s)
    if match:
        return int(match.group())
    return 0  # if no digits, it'll be at the beginning

def process_text(text):
    # # Regex for delimeters. (eg: Markdown Headings)
    # regex_string = r'(\n#\s\d)'

    # Split the string using the regex pattern
    parts = re.split(r'(\n#\s\d)', text)

    # Sort the list by the value of the first digit that appears in each string
    # Group adjacent items (because now we have the text and its corresponding delimiter)
    grouped_parts = [(parts[i-1] if (i-1)>=0 else '') + parts[i] for i in range(0, len(parts), 2)] # Care with the range being correct.


    # Sort the list by the value of the first digit that appears in each string
    sorted_parts = sorted(grouped_parts, key=sort_by_first_digit)

    # Join the sorted strings back together
    result = ''.join(sorted_parts)
    
    return result



#################
# MAIN:

# working_dir = os.path.expanduser("~")
# working_dir = os.path.expanduser("")
working_dir = os.path.expanduser("C:\\Users\\tester\\Documents\\GitHub\\Second\\other")

# Specify input and output file paths relative to home directory
input_path = os.path.join(working_dir, "inputOfSorter.txt")
output_path = os.path.join(working_dir, "outputOfSorter.txt")

with open(input_path, 'r', encoding="utf-8") as file:
    text = file.read()

processed_text = process_text(text)

with open(output_path, 'w', encoding="utf-8") as file:
    file.write(processed_text)















