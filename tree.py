import os

def tree(dir_path, prefix=''):
    contents = os.listdir(dir_path)
    pointers = ['├── '] * (len(contents) - 1) + ['└── ']
    for pointer, path in zip(pointers, contents):
        full_path = os.path.join(dir_path, path)
        print(prefix + pointer + path)
        if os.path.isdir(full_path):
            extension = '│   ' if pointer == '├── ' else '    '
            tree(full_path, prefix + extension)

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: python tree.py <directory_path>")
        sys.exit(1)

    dir_path = sys.argv[1]
    if not os.path.isdir(dir_path):
        print(f"{dir_path} is not a valid directory")
        sys.exit(1)

    print(dir_path)
    tree(dir_path)
